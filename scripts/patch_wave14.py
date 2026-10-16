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

# 1. b1/culture/15
f1 = 'english/lessons/vocabulary/cefr/b1/culture/15-traditional-storytelling-epic-poetry-and-oral-chronicles.md'
with open(f1, 'r', encoding='utf-8') as fp: c1 = fp.read()
c1 = c1.replace("## 4. village storyteller /ˈvɪl.ɪdʒ ˈstɔː.riˌtɛl.ɪt/ -> `village storyteller` /ˈvɪl.ɪdʒ ˈstɔː.riˌtɛl.ər/", "## 4. village storyteller /ˈvɪl.ɪdʒ ˈstɔː.riˌtɛl.ər/")
c1 = c1.replace("## 10. mythic hero /ˈmɪθ.ɪk ˈhɪə.rəʊ/ -> `mythical hero` /ˈmɪθ.ɪ.kəl ˈhɪə.rəʊ/", "## 10. mythical hero /ˈmɪθ.ɪ.kəl ˈhɪə.rəʊ/")
c1 = c1.replace("## 20. legend and myth /ˈlɛdʒ.ənd ənd mɪθ/ -> `legend and lore` /ˈlɛdʒ.ənd ənd lɔːr/", "## 20. legend and lore /ˈlɛdʒ.ənd ənd lɔːr/")
c1 = c1.replace("## 23. oral chronicle tradition /ˈɔː.rəl ˈkrɒn.ɪ.kəl trəˈdɪʃ.ən/ -> `chronicle tradition` /ˈkrɒn.ɪ.kəl trəˈdɪʃ.ən/", "## 23. chronicle tradition /ˈkrɒn.ɪ.kəl trəˈdɪʃ.ən/")
c1 = c1.replace("## 24. storytellers lineage /ˈstɔː.riˌtɛl.ərz ˈlɪn.i.ɪdʒ/ -> `storyteller lineage` /ˈstɔː.riˌtɛl.ər ˈlɪn.i.ɪdʒ/", "## 24. storyteller lineage /ˈstɔː.riˌtɛl.ər ˈlɪn.i.ɪdʒ/")
with open(f1, 'w', encoding='utf-8') as fp: fp.write(c1)

replace_item(f1, 6, 'oral tradition', 'traditional oral storytelling tradition', 'trəˈdɪʃənl ˈɔːrəl ˈstɔːritelɪŋ trəˈdɪʃn')
replace_item(f1, 7, 'folklore archive', 'village folklore archive collection', 'ˈvɪlɪdʒ ˈfoʊklɔːr ˈɑːrkaɪv kəˈlekʃn')
replace_item(f1, 9, 'spoken narrative', 'recited spoken narrative', 'rɪˈsaɪtɪd ˈspoʊkən ˈnærətɪv')
replace_item(f1, 11, 'folk chant', 'traditional rhythmic folk chant', 'trəˈdɪʃənl ˈrɪðmɪk foʊk tʃænt')
replace_item(f1, 12, 'cultural heritage', 'living oral cultural heritage', 'ˈlɪvɪŋ ˈɔːrəl ˈkʌltʃərəl ˈherɪtɪdʒ')
replace_item(f1, 13, 'spoken history', 'communal spoken history record', 'kəˈmjuːnl ˈspoʊkən ˈhɪstri ˈrekərd')
replace_item(f1, 14, 'tribal elder', 'venerated tribal elder storyteller', 'ˈvenəreɪtɪd ˈtraɪbl ˈeldər ˈstɔːritelər')
replace_item(f1, 16, 'oral narrative', 'customary oral narrative performance', 'ˈkʌstəməri ˈɔːrəl ˈnærətɪv pərˈfɔːrməns')
replace_item(f1, 17, 'folklore tradition', 'ancient folklore recitation tradition', 'ˈeɪnʃənt ˈfoʊklɔːr ˌresɪˈteɪʃn trəˈdɪʃn')

# 2. b1/travel/17
f2 = 'english/lessons/vocabulary/cefr/b1/travel/17-scenic-railway-journeys-sleeper-trains-and-historic-stations.md'
with open(f2, 'r', encoding='utf-8') as fp: c2 = fp.read()
c2 = c2.replace("## 25. historical railway preservation /hɪˈstɔːrɪkl ˈreɪlweɪ ˌprzərˈveɪʃn/ (preservation)", "## 25. historical railway preservation /hɪˈstɔːrɪkl ˈreɪlweɪ ˌprezərˈveɪʃn/")
with open(f2, 'w', encoding='utf-8') as fp: fp.write(c2)

replace_item(f2, 10, 'vintage steam locomotive', 'restored vintage steam locomotive', 'rɪˈstɔːrd ˈvɪntɪdʒ stiːm ˌloʊkəˈmoʊtɪv')

# 3. b2/finance/13
f3 = 'english/lessons/vocabulary/cefr/b2/finance/13-microfinance-institutions-peer-to-peer-lending-and-financial-inclusion.md'
with open(f3, 'r', encoding='utf-8') as fp: c3 = fp.read()
c3 = c3.replace("## Review in Context", "## Review in context")
with open(f3, 'w', encoding='utf-8') as fp: fp.write(c3)

replace_item(f3, 3, 'financial inclusion', 'grassroots financial inclusion initiative', 'ˈɡræsruːts faɪˈnænʃl ɪnˈkluːʒn ɪˈnɪʃətɪv')
replace_item(f3, 11, 'digital wallet', 'mobile fintech digital wallet', 'ˈmoʊbl ˈfɪntek ˈdɪdʒɪtl ˈwɑːlɪt')
replace_item(f3, 14, 'predatory lending', 'unregulated predatory lending practice', 'ʌnˈreɡjuleɪtɪd ˈpredətɔːri ˈlendɪŋ ˈpræktɪs')

print('Wave 14 patch execution complete!')
