#!/usr/bin/env node

/**
 * sync-study-logs.mjs
 * 
 * Automatically aggregates study session log files from `study-logs/`
 * into `user-data/progress/{language}-progress.json` for the LanguageLab Dashboard.
 * 
 * Usage:
 *   node scripts/sync-study-logs.mjs
 *   node scripts/sync-study-logs.mjs --lang=english
 *   node scripts/sync-study-logs.mjs --date=2026-10-18
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const STUDY_LOGS_DIR = path.join(ROOT_DIR, "study-logs");
const USER_DATA_DIR = path.join(ROOT_DIR, "user-data", "progress");

// Parse simple CLI arguments
const args = process.argv.slice(2);
let targetLang = null;
let targetDate = null;

for (const arg of args) {
  if (arg.startsWith("--lang=")) targetLang = arg.split("=")[1].toLowerCase();
  if (arg.startsWith("--date=")) targetDate = arg.split("=")[1];
}

function normalizeLang(lang) {
  if (!lang) return "en";
  const l = lang.toLowerCase();
  if (l === "english" || l === "en") return "en";
  if (l === "korean" || l === "ko") return "ko";
  return l;
}

/**
 * Lightweight YAML frontmatter parser (pure JS, zero dependencies)
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;

  const yamlStr = match[1];
  const lines = yamlStr.split(/\r?\n/);
  const data = {};
  let currentKey = null;
  let currentList = null;
  let currentItem = null;

  for (let rawLine of lines) {
    const line = rawLine.trimEnd();
    if (!line || line.trim().startsWith("#")) continue;

    // Top-level key-value
    const topKeyMatch = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (topKeyMatch && !line.startsWith(" ") && !line.startsWith("\t")) {
      currentKey = topKeyMatch[1];
      const valStr = topKeyMatch[2].trim();
      currentList = null;
      currentItem = null;

      if (valStr === "") {
        // May be start of list or object
        continue;
      } else {
        data[currentKey] = parseScalar(valStr);
      }
      continue;
    }

    // List item start: "  - key: val" or "  - val"
    const listItemMatch = line.match(/^\s*-\s*(.*)$/);
    if (listItemMatch && currentKey) {
      if (!Array.isArray(data[currentKey])) {
        data[currentKey] = [];
      }
      currentList = data[currentKey];
      const remainder = listItemMatch[1].trim();

      if (remainder.includes(":")) {
        // Object in list
        currentItem = {};
        currentList.push(currentItem);
        const [k, ...vParts] = remainder.split(":");
        currentItem[k.trim()] = parseScalar(vParts.join(":").trim());
      } else if (remainder) {
        currentItem = null;
        currentList.push(parseScalar(remainder));
      } else {
        currentItem = {};
        currentList.push(currentItem);
      }
      continue;
    }

    // Sub-key in list item: "    subKey: val"
    const subKeyMatch = line.match(/^\s+([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (subKeyMatch && currentItem) {
      const k = subKeyMatch[1];
      const v = subKeyMatch[2].trim();
      currentItem[k] = parseScalar(v);
      continue;
    }
  }

  return data;
}

function parseScalar(val) {
  if (!val) return "";
  if (val === "true") return true;
  if (val === "false") return false;
  if (val === "null") return null;
  if (/^-?\d+(\.\d+)?$/.test(val)) return Number(val);
  // Remove wrapping quotes
  if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
    return val.slice(1, -1);
  }
  return val;
}

/**
 * Recursively find all markdown files in a directory
 */
function findMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(findMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md") && entry.name.toLowerCase() !== "readme.md") {
      files.push(fullPath);
    }
  }
  return files;
}

/**
 * Load existing progress JSON or return clean initial structure
 */
function loadOrCreateProgress(langCode) {
  const filePath = path.join(USER_DATA_DIR, `${langCode === "en" ? "english" : langCode}-progress.json`);
  if (fs.existsSync(filePath)) {
    try {
      const content = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(content);
    } catch (err) {
      console.warn(`[WARN] Could not parse existing progress at ${filePath}, creating new.`);
    }
  }

  return {
    format: `language-lab-${langCode}-journey`,
    journey: {
      schemaVersion: 1,
      language: langCode,
      updatedAt: new Date().toISOString(),
      attempts: [],
      errors: [],
      topics: []
    }
  };
}

/**
 * Main execution
 */
function main() {
  console.log("=================================================");
  console.log("🚀 LANGUAGE LAB: STUDY LOGS AGGREGATOR");
  console.log("=================================================");

  if (!fs.existsSync(STUDY_LOGS_DIR)) {
    console.error(`[ERROR] Directory not found: ${STUDY_LOGS_DIR}`);
    process.exit(1);
  }

  fs.mkdirSync(USER_DATA_DIR, { recursive: true });

  const allFiles = findMarkdownFiles(STUDY_LOGS_DIR);
  if (allFiles.length === 0) {
    console.log("ℹ️ No study logs found in study-logs/. Nothing to sync.");
    return;
  }

  console.log(`Found ${allFiles.length} study log file(s). Processing...\n`);

  // Group files by language
  const filesByLang = { en: [], ko: [] };

  for (const file of allFiles) {
    const rel = path.relative(STUDY_LOGS_DIR, file);
    const parts = rel.split(path.sep);
    const langFolder = parts[0]?.toLowerCase();
    const langCode = normalizeLang(langFolder);

    if (targetLang && langFolder !== targetLang && langCode !== targetLang) continue;
    if (targetDate && !path.basename(file).startsWith(targetDate)) continue;

    if (!filesByLang[langCode]) filesByLang[langCode] = [];
    filesByLang[langCode].push(file);
  }

  for (const [langCode, files] of Object.entries(filesByLang)) {
    if (files.length === 0) continue;

    console.log(`📂 Processing language: [${langCode.toUpperCase()}] (${files.length} log files)`);
    const progressData = loadOrCreateProgress(langCode);
    const journey = progressData.journey || progressData;

    let totalAttemptsAdded = 0;
    let totalErrorsAdded = 0;
    let totalTopicsUpdated = 0;

    const attemptMap = new Map((journey.attempts || []).map(a => [a.id, a]));
    const errorMap = new Map((journey.errors || []).map(e => [e.id, e]));
    const topicMap = new Map((journey.topics || []).map(t => [t.id, t]));

    for (const file of files) {
      const content = fs.readFileSync(file, "utf-8");
      const frontmatter = parseFrontmatter(content);
      if (!frontmatter) continue;

      const fileDate = frontmatter.date || new Date().toISOString().split("T")[0];
      const relPath = path.relative(ROOT_DIR, file);

      // 1. Process Attempts
      if (Array.isArray(frontmatter.attempts)) {
        for (const rawAtt of frontmatter.attempts) {
          if (!rawAtt.id || !rawAtt.title) continue;
          const isNew = !attemptMap.has(rawAtt.id);
          attemptMap.set(rawAtt.id, {
            id: String(rawAtt.id),
            date: String(rawAtt.date || fileDate),
            title: String(rawAtt.title),
            correct: Number(rawAtt.correct ?? 0),
            total: Number(rawAtt.total ?? 10),
            note: String(rawAtt.note || "")
          });
          if (isNew) totalAttemptsAdded++;
        }
      }

      // 2. Process Errors
      if (Array.isArray(frontmatter.errors)) {
        for (const rawErr of frontmatter.errors) {
          if (!rawErr.id || !rawErr.incorrect) continue;
          const isNew = !errorMap.has(rawErr.id);
          errorMap.set(rawErr.id, {
            id: String(rawErr.id),
            topicId: rawErr.topic_id || rawErr.topicId || frontmatter.topic_id,
            category: String(rawErr.category || frontmatter.category || "General"),
            incorrect: String(rawErr.incorrect),
            corrected: String(rawErr.corrected || ""),
            explanationVi: String(rawErr.explanation_vi || rawErr.explanationVi || ""),
            explanationKo: String(rawErr.explanation_ko || rawErr.explanationKo || ""),
            status: String(rawErr.status || "due"),
            date: String(rawErr.date || fileDate),
            lessonId: rawErr.lesson_id || rawErr.lessonId || undefined
          });
          if (isNew) totalErrorsAdded++;
        }
      }

      // 3. Process Competency / Topic Updates
      const compUpdates = Array.isArray(frontmatter.competency_update)
        ? frontmatter.competency_update
        : frontmatter.competency_update
          ? [frontmatter.competency_update]
          : [];

      for (const rawComp of compUpdates) {
        if (!rawComp.topic_id) continue;
        const topicId = String(rawComp.topic_id);
        const existing = topicMap.get(topicId);

        if (existing) {
          existing.score = Number(rawComp.new_score ?? rawComp.score ?? existing.score);
          if (rawComp.evidence) existing.evidence = String(rawComp.evidence);
          totalTopicsUpdated++;
        } else {
          topicMap.set(topicId, {
            id: topicId,
            domain: frontmatter.domain || "grammar",
            category: frontmatter.category || "Chuyên đề tổng hợp",
            label: rawComp.label || topicId,
            score: Number(rawComp.new_score ?? rawComp.score ?? 5),
            evidence: String(rawComp.evidence || `Cập nhật từ nhật ký ngày ${fileDate}`)
          });
          totalTopicsUpdated++;
        }
      }

      console.log(`  ✓ Synced: ${path.basename(file)}`);
    }

    // Save updated journey
    journey.attempts = Array.from(attemptMap.values()).sort((a, b) => a.date.localeCompare(b.date));
    journey.errors = Array.from(errorMap.values()).sort((a, b) => a.id.localeCompare(b.id));
    journey.topics = Array.from(topicMap.values());
    journey.updatedAt = new Date().toISOString();

    const outFile = path.join(USER_DATA_DIR, `${langCode === "en" ? "english" : langCode}-progress.json`);
    fs.writeFileSync(outFile, JSON.stringify(progressData, null, 2) + "\n", "utf-8");

    console.log(`\n  📊 Kết quả tổng hợp [${langCode.toUpperCase()}]:`);
    console.log(`     + ${totalAttemptsAdded} bài test mới (Tổng: ${journey.attempts.length})`);
    console.log(`     + ${totalErrorsAdded} lỗi cần ôn mới (Tổng: ${journey.errors.length})`);
    console.log(`     + ${totalTopicsUpdated} chủ đề năng lực được cập nhật điểm số`);
    console.log(`     💾 Đã lưu tại: ${path.relative(ROOT_DIR, outFile)}\n`);
  }

  console.log("=================================================");
  console.log("✅ TẤT CẢ LOG HỌC TẬP ĐÃ ĐƯỢC ĐỒNG BỘ THÀNH CÔNG!");
  console.log("=================================================\n");
}

main();
