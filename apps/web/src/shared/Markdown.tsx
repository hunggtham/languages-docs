import type { ElementType, ReactElement, ReactNode } from "react";

export interface MarkdownHeading {
  id: string;
  text: string;
  level: number;
}

export function extractHeadings(content: string): MarkdownHeading[] {
  const counts = new Map<string, number>();
  return content.replace(/\r/g, "").split("\n").flatMap((line) => {
    const match = line.match(/^(#{1,6})\s+(.*)$/);
    if (!match) return [];
    const text = match[2].replace(/[`*_]/g, "").trim();
    const base = text.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-") || "section";
    const count = counts.get(base) ?? 0;
    counts.set(base, count + 1);
    return [{ id: count ? `${base}-${count + 1}` : base, text, level: match[1].length }];
  });
}

function inline(text: string): ReactNode[] {
  const tokens = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g).filter(Boolean);
  return tokens.map((token, index) => {
    if (token.startsWith("**") && token.endsWith("**")) return <strong key={index}>{token.slice(2, -2)}</strong>;
    if (token.startsWith("`") && token.endsWith("`")) return <code key={index}>{token.slice(1, -1)}</code>;
    if (token.startsWith("*") && token.endsWith("*")) return <em key={index}>{token.slice(1, -1)}</em>;
    return <span key={index}>{token}</span>;
  });
}

function Table({ rows }: { rows: string[][] }): ReactElement {
  const [head, ...body] = rows;
  return (
    <div className="lesson-table-wrap">
      <table className="lesson-table">
        <thead><tr>{head.map((cell, index) => <th key={index}>{inline(cell)}</th>)}</tr></thead>
        <tbody>{body.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, index) => <td key={index}>{inline(cell)}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

export default function Markdown({ content }: { content: string }): ReactElement {
  const lines = content.replace(/\r/g, "").split("\n");
  const headings = extractHeadings(content);
  const nodes: ReactNode[] = [];
  let index = 0;
  let headingIndex = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) { index += 1; continue; }
    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      const level = Math.min(heading[1].length, 4);
      const Tag = `h${level}` as ElementType;
      const headingInfo = headings[headingIndex];
      headingIndex += 1;
      nodes.push(<Tag key={index} id={headingInfo.id} data-lesson-heading={headingInfo.id}>{inline(heading[2])}</Tag>);
      index += 1;
      continue;
    }
    if (/^\|.*\|$/.test(line) && index + 1 < lines.length && /^\|?\s*:?-{2,}/.test(lines[index + 1])) {
      const table: string[][] = [];
      while (index < lines.length && /^\|.*\|$/.test(lines[index])) {
        const cells = lines[index].split("|").slice(1, -1).map((cell) => cell.trim());
        if (!cells.every((cell) => /^:?-{2,}:?$/.test(cell))) table.push(cells);
        index += 1;
      }
      if (table.length) nodes.push(<Table key={`table-${index}`} rows={table} />);
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index])) { items.push(lines[index].replace(/^[-*]\s+/, "")); index += 1; }
      nodes.push(<ul key={`ul-${index}`}>{items.map((item, itemIndex) => <li key={itemIndex}>{inline(item)}</li>)}</ul>);
      continue;
    }
    if (/^>\s?/.test(line)) {
      const quote: string[] = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) { quote.push(lines[index].replace(/^>\s?/, "")); index += 1; }
      nodes.push(<blockquote key={`quote-${index}`}>{inline(quote.join(" "))}</blockquote>);
      continue;
    }
    const paragraph: string[] = [];
    while (index < lines.length && lines[index].trim() && !/^(#{1,6})\s+/.test(lines[index]) && !/^[-*]\s+/.test(lines[index]) && !/^>\s?/.test(lines[index])) {
      paragraph.push(lines[index]); index += 1;
    }
    nodes.push(<p key={`p-${index}`}>{inline(paragraph.join(" "))}</p>);
  }
  return <div className="markdown-body">{nodes}</div>;
}
