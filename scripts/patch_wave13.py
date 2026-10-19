import re

def replace_item(filepath, item_num, old_hw, new_hw, new_ipa=None):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match heading
    pattern = rf'^(##\s+{item_num}\.\s+)([^(/]+?)(\s+/[^/\n]+/)(\s*$)'
    m = re.search(pattern, content, re.MULTILINE)
    if not m:
        pattern2 = rf'^(##\s+{item_num}\.\s+)([^/\n]+?)(\s*/[^/\n]+/)(\s*)'
        m = re.search(pattern2, content, re.MULTILINE)
        if not m:
            print(f'Item {item_num} not found in {filepath}')
            return
    matched_hw = m.group(2).strip()
    ipa_str = new_ipa if new_ipa else m.group(3).strip('/')
    new_heading = f'## {item_num}. {new_hw} /{ipa_str}/'
    content = content[:m.start()] + new_heading + content[m.end():]

    # Replace bold occurrences of old_hw and matched_hw in the entire file
    content = re.sub(rf'\*\*{re.escape(matched_hw)}\*\*', f'**{new_hw}**', content, flags=re.IGNORECASE)
    if old_hw.lower() != matched_hw.lower():
        content = re.sub(rf'\*\*{re.escape(old_hw)}\*\*', f'**{new_hw}**', content, flags=re.IGNORECASE)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Updated {filepath}: item #{item_num} "{matched_hw}" -> "{new_hw}"')

# 1. b1/culture/14
f = 'english/lessons/vocabulary/cefr/b1/culture/14-puppet-theaters-shadow-puppetry-and-folk-performances.md'
with open(f, 'r', encoding='utf-8') as fp: c = fp.read()
c = c.replace('## 16. hand glove puppet /hænd ɡlʌv ˈpʌp.ɪt/ -> `glove puppet` /ˈɡlʌv ˈpʌp.ɪt/', '## 16. glove puppet /ˈɡlʌv ˈpʌp.ɪt/')
c = c.replace('## 19. folk drama troupe /fəʊk ˈdrɑː.mə truːp/ -> `folk troupe` /fəʊk truːp/', '## 19. folk troupe /fəʊk truːp/')
c = c.replace('## 21. string-controlled puppet /strɪŋ kənˈtrəʊld ˈpʌp.ɪt/ -> `string puppet` /strɪŋ ˈpʌp.ɪt/', '## 21. string puppet /strɪŋ ˈpʌp.ɪt/')
with open(f, 'w', encoding='utf-8') as fp: fp.write(c)

replace_item(f, 1, 'puppet theater', 'traditional puppet theater stage', 'trəˈdɪʃənl ˈpʌpɪt ˈθiːətər steɪdʒ')
replace_item(f, 2, 'shadow puppetry', 'traditional shadow puppetry', 'trəˈdɪʃənl ˈʃædoʊ ˈpʌpɪtri')
replace_item(f, 25, 'cultural preservation', 'puppetry cultural preservation', 'ˈpʌpɪtri ˈkʌltʃərəl ˌprezərˈveɪʃn')

# 2. b1/society/16
f = 'english/lessons/vocabulary/cefr/b1/society/16-neighborhood-civic-associations-block-parties-and-local-advocacy.md'
replace_item(f, 6, 'neighborhood watch', 'neighborhood watch patrol', 'ˈneɪbərhʊd wɑːtʃ pəˈtroʊl')
replace_item(f, 7, 'public forum', 'civic public forum', 'ˈsɪvɪk ˈpʌblɪk ˈfɔːrəm')
replace_item(f, 10, 'volunteer coordinator', 'neighborhood volunteer coordinator', 'ˈneɪbərhʊd ˌvɑːlənˈtɪr koʊˈɔːrdɪneɪtər')
replace_item(f, 11, 'civic engagement', 'grassroots civic engagement', 'ˈɡræsruːts ˈsɪvɪk ɪnˈɡeɪdʒmənt')
replace_item(f, 14, 'town hall meeting', 'local town hall assembly', 'ˈloʊkl taʊn hɔːl əˈsembli')
replace_item(f, 15, 'public consultation', 'municipal public consultation', 'mjuːˈnɪsɪpl ˈpʌblɪk ˌkɑːnslˈteɪʃn')
replace_item(f, 17, 'neighborhood council', 'residential neighborhood council', 'ˌrezɪˈdenʃl ˈneɪbərhʊd ˈkaʊnsl')
replace_item(f, 20, 'public hearing', 'zoning public hearing', 'ˈzoʊnɪŋ ˈpʌblɪk ˈhɪrɪŋ')
replace_item(f, 23, 'neighborhood cohesion', 'community neighborhood cohesion', 'kəˈmjuːnəti ˈneɪbərhʊd koʊˈhiːʒn')

# 3. b2/urban/18
f = 'english/lessons/vocabulary/cefr/b2/urban/18-urban-waterfront-revitalization-floodable-promenades-and-canal-restoration.md'
replace_item(f, 19, 'stormwater attenuation basin', 'waterfront stormwater attenuation basin', 'ˈwɔːtərfkrʌnt ˈstɔːrmwɔːtər əˌtenjuˈeɪʃn ˈbeɪsn')

# 4. b2/finance/12
f = 'english/lessons/vocabulary/cefr/b2/finance/12-project-finance-non-recourse-debt-and-infrastructure-concessions.md'
replace_item(f, 19, 'environmental impact assessment', 'project environmental impact assessment', 'ˈprɑːdʒekt ɪnˌvaɪrənˈmentl ˈɪmpækt əˈsesmənt')

# 5. b2/business/11
f = 'english/lessons/vocabulary/cefr/b2/business/11-corporate-spin-offs-carve-outs-and-divestiture-strategies.md'
with open(f, 'r', encoding='utf-8') as fp: c = fp.read()
c = c.replace('## 3. divestiture strategy daɪˈvɛstɪtʃər ˈstrætədʒi/', '## 3. divestiture strategy /daɪˈvɛstɪtʃər ˈstrætədʒi/')
c = c.replace('## Review in context (Part 1: Items 1–13)\n', '## Review in context\n\n### Part 1: Items 1 to 13\n')
c = c.replace('## Review in context (Part 2: Items 14–25)\n', '### Part 2: Items 14 to 25\n')
with open(f, 'w', encoding='utf-8') as fp: fp.write(c)

replace_item(f, 2, 'equity carve-out', 'subsidiary equity carve-out', 'səbˈsɪdieri ˈekwəti kɑːrv aʊt')
replace_item(f, 22, 'debt-for-equity swap', 'restructuring debt-for-equity swap', 'riːˈstrʌktʃərɪŋ det fɔːr ˈekwəti swɑːp')

# 6. b1/food/13
f = 'english/lessons/vocabulary/cefr/b1/food/13-sourdough-baking-wild-yeast-starters-and-artisan-bread.md'
replace_item(f, 4, 'filtered spring water', 'non-chlorinated spring water', 'nɑːn ˈklɔːrɪneɪtɪd sprɪŋ ˈwɔːtər')

# 7. b1/health/14
f = 'english/lessons/vocabulary/cefr/b1/health/14-sleep-hygiene-circadian-rhythms-and-restorative-rest.md'
replace_item(f, 2, 'sleep hygiene practice', 'nighttime sleep hygiene practice', 'ˈnaɪttaɪm sliːp ˈhaɪdʒiːn ˈpræktɪs')
replace_item(f, 17, 'afternoon caffeine cutoff', 'strict caffeine cutoff time', 'strɪkt ˈkæfiːn ˈkʌtɔːf taɪm')
replace_item(f, 23, 'bedtime anxiety management', 'nocturnal anxiety management', 'nɑːkˈtɜːrnl æŋˈzaɪəti ˈmænɪdʒmənt')

# 8. b1/education/12
f = 'english/lessons/vocabulary/cefr/b1/education/12-science-fairs-stem-competitions-and-student-inventors.md'
replace_item(f, 6, 'science fair judging panel', 'regional science fair judging panel', 'ˈriːdʒənl ˈsaɪəns fer ˈdʒʌdʒɪŋ ˈpænl')
replace_item(f, 9, 'scientific method application', 'empirical scientific method application', 'ɪmˈpɪrɪkl ˌsaɪənˈtɪfɪk ˈmeθəd ˌæplɪˈkeɪʃn')
replace_item(f, 12, 'coding and programming skill', 'stem coding and programming skill', 'stem ˈkoʊdɪŋ ənd ˈproʊɡræmɪŋ skɪl')

# 9. b1/work/13
f = 'english/lessons/vocabulary/cefr/b1/work/13-conflict-resolution-workplace-mediation-and-consensus-building.md'
replace_item(f, 4, 'empathetic listening skill', 'active empathetic listening skill', 'ˈæktɪv ˌempəˈθetɪk ˈlɪsnɪŋ skɪl')
replace_item(f, 13, 'root cause analysis', 'workplace root cause analysis', 'ˈwɜːrkpleɪs ruːt kɔːz əˈnæləsɪs')

# 10. b2/law/12
f = 'english/lessons/vocabulary/cefr/b2/law/12-antitrust-enforcement-market-definition-and-merger-remedies.md'
replace_item(f, 1, 'antitrust enforcement', 'cross-border antitrust enforcement', 'ˌkrɔːs ˈbɔːrdər ˈæntitrʌst ɪnˈfɔːrsmənt')
replace_item(f, 3, 'horizontal merger', 'horizontal merger scrutiny', 'ˌhɔːrɪˈzɑːntl ˈmɜːrdʒər ˈskruːtəni')
replace_item(f, 7, 'predatory pricing', 'anticompetitive predatory pricing', 'ˌænti kəmˈpetətɪv ˈpredətɔːri ˈpraɪsɪŋ')
replace_item(f, 9, 'market foreclosure', 'vertical market foreclosure', 'ˈvɜːrtɪkl ˈmɑːrkɪt fɔːrˈkloʊʒər')
replace_item(f, 11, 'behavioral remedy', 'structural and behavioral remedy', 'ˈstrʌktʃərəl ənd bɪˈheɪvjərəl ˈremədi')
replace_item(f, 12, 'abuse of dominance', 'unlawful abuse of dominance', 'ʌnˈlɔːfl əˈbjuːs əv ˈdɑːmɪnəns')
replace_item(f, 14, 'competition advocacy', 'multilateral competition advocacy', 'ˌmʌltiˈlætərəl ˌkɑːmpəˈtɪʃn ˈædvəkəsi')
replace_item(f, 18, 'tying arrangement', 'anticompetitive tying arrangement', 'ˌænti kəmˈpetətɪv ˈtaɪɪŋ əˈreɪndʒmənt')

# 11. b2/economics/12
f = 'english/lessons/vocabulary/cefr/b2/economics/12-input-output-analysis-inter-industry-linkages-and-multiplier-effects.md'
replace_item(f, 14, 'supply chain resilience', 'inter-industry supply chain resilience', 'ˌɪntər ˈɪndəstri səˈplaɪ tʃeɪn rɪˈzɪliəns')

print('Patch script execution complete!')
