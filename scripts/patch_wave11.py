import re, os

def replace_item(filepath, item_num, old_hw, new_hw, new_ipa=None, vn_replacement=None):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match heading
    pattern = rf'^(##\s+{item_num}\.\s+)([^(/]+?)(\s+/[^/\n]+/)(\s*$)'
    m = re.search(pattern, content, re.MULTILINE)
    if not m:
        pattern2 = rf'^(##\s+{item_num}\.\s+)([^(/]+?)(\s+/[^/]+/)(\s*)'
        m = re.search(pattern2, content, re.MULTILINE)
        if not m:
            # try draft arrow heading: ## item. old_hw /ipa/ -> new_hw /ipa/
            pattern3 = rf'^(##\s+{item_num}\.\s+)(.+)$'
            m = re.search(pattern3, content, re.MULTILINE)
            if not m:
                print(f'Item {item_num} not found in {filepath}')
                return
            matched_hw = old_hw
            ipa_str = new_ipa if new_ipa else ''
            new_heading = f'## {item_num}. {new_hw} /{ipa_str}/'
            content = content[:m.start()] + new_heading + content[m.end():]
        else:
            matched_hw = m.group(2).strip()
            ipa_str = new_ipa if new_ipa else m.group(3).strip('/')
            new_heading = f'## {item_num}. {new_hw} /{ipa_str}/'
            content = content[:m.start()] + new_heading + content[m.end():]
    else:
        matched_hw = m.group(2).strip()
        ipa_str = new_ipa if new_ipa else m.group(3).strip('/')
        new_heading = f'## {item_num}. {new_hw} /{ipa_str}/'
        content = content[:m.start()] + new_heading + content[m.end():]

    # Replace bold occurrences of old_hw
    content = re.sub(rf'\*\*{re.escape(matched_hw)}\*\*', f'**{new_hw}**', content, flags=re.IGNORECASE)
    content = re.sub(rf'\*\*{re.escape(old_hw)}\*\*', f'**{new_hw}**', content, flags=re.IGNORECASE)

    if vn_replacement:
        content = content.replace(vn_replacement[0], vn_replacement[1])

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Updated {filepath}: item #{item_num} "{old_hw}" -> "{new_hw}"')

# 1. b1/culture/12
f = 'english/lessons/vocabulary/cefr/b1/culture/12-traditional-folk-crafts-pottery-and-textile-weaving.md'
replace_item(f, 2, 'pottery wheel', 'ceramic pottery wheel', 'səˈræmɪk ˈpɑːtəri wiːl')
replace_item(f, 5, 'skilled artisan', 'master folk artisan', 'ˈmæstər foʊk ˈɑːrtəzn')
replace_item(f, 6, 'cultural preservation', 'folk craft preservation', 'foʊk kræft ˌprezərˈveɪʃn')
replace_item(f, 23, 'pottery workshop', 'communal pottery workshop', 'kəˈmjuːnl ˈpɑːtəri ˈwɜːrkʃɑːp')

# 2. b1/education/10 review
f = 'english/lessons/vocabulary/cefr/b1/education/10-vocational-workshops-trade-apprenticeships-and-skill-badges.md'
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('**applied engineering concepts**', '**applied engineering concept**')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b1/education/10')

# 3. b1/leisure/13
f = 'english/lessons/vocabulary/cefr/b1/leisure/13-diy-woodworking-home-crafts-and-maker-spaces.md'
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
# Clean up headings
text = re.sub(r'## 2\. home craft /[^/]+/ -> home crafts /[^/]+/', '## 2. home craft /hoʊm kræft/', text)
text = re.sub(r'## 5\. hand tool /[^/]+/ -> hand tools /[^/]+/', '## 5. hand tool /hænd tuːl/', text)
text = re.sub(r'## 6\. power tool /[^/]+/ -> power tools /[^/]+/', '## 6. power tool /ˈpaʊər tuːl/', text)
text = re.sub(r'## 9\. sandpaper /[^/]+/', '## 9. abrasive sandpaper sheet /əˈbreɪsɪv ˈsændpeɪpər ʃiːt/', text)
text = re.sub(r'## 11\. creative project /[^/]+/ -> creative projects /[^/]+/', '## 11. creative woodworking project /kriˈeɪtɪv ˈwʊdwɜːrkɪŋ ˈprɑːdʒekt/', text)
text = re.sub(r'## 12\. assembly guide /[^/]+/ -> assembly guides /[^/]+/', '## 12. assembly guide /əˈsembli ɡaɪd/', text)
text = re.sub(r'## 14\. safety goggle /[^/]+/ -> safety goggles /[^/]+/', '## 14. safety goggles /ˈseɪfti ɡɑːɡlz/', text)
text = re.sub(r'## 16\. clamp tool /[^/]+/ -> woodworking clamps /[^/]+/', '## 16. woodworking clamp /ˈwʊdwɜːrkɪŋ klæmp/', text)
text = re.sub(r'## 17\. dust mask /[^/]+/ -> dust masks /[^/]+/', '## 17. dust mask /dʌst mæsk/', text)
text = re.sub(r'## 18\. wooden crate /[^/]+/ -> wooden crates /[^/]+/', '## 18. wooden crate /ˈwʊdn kreɪt/', text)
text = re.sub(r'## 19\. decorative shelf /[^/]+/ -> decorative shelves /[^/]+/', '## 19. decorative shelf /ˈdekərətɪv ʃelf/', text)
text = re.sub(r'## 20\. storage box /[^/]+/ -> storage boxes /[^/]+/', '## 20. storage box /ˈstɔːrɪdʒ bɑːks/', text)
text = re.sub(r'## 22\. drill press /[^/]+/ -> drill presses /[^/]+/', '## 22. drill press /drɪl pres/', text)
text = re.sub(r'## 23\. wood carving /[^/]+/ -> wood carvings /[^/]+/', '## 23. intricate wood carving /ˈɪntrɪkət wʊd ˈkɑːrvɪŋ/', text)
text = re.sub(r'## 24\. timber yard /[^/]+/ -> timber yards /[^/]+/', '## 24. timber yard /ˈtɪmbər jɑːrd/', text)
text = re.sub(r'## 25\. workshop dust /[^/]+/ -> workshop dust extraction /[^/]+/', '## 25. workshop dust extraction /ˈwɜːrkʃɑːp dʌst ɪkˈstrækʃn/', text)

# Clean up review in b1/leisure/13
text = text.replace('**home crafts**', '**home craft**')
text = text.replace('**hand tools**', '**hand tool**')
text = text.replace('**power tools**', '**power tool**')
text = text.replace('**sandpaper**', '**abrasive sandpaper sheet**')
text = text.replace('**creative projects**', '**creative woodworking project**')
text = text.replace('**woodworking clamps**', '**woodworking clamp**')
text = text.replace('**wooden crates**', '**wooden crate**')
text = text.replace('**decorative shelves**', '**decorative shelf**')
text = text.replace('**storage boxes**', '**storage box**')
text = text.replace('**wood carving**', '**intricate wood carving**')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b1/leisure/13')

# 4. b1/society/14
f = 'english/lessons/vocabulary/cefr/b1/society/14-community-tool-libraries-repair-cafes-and-mutual-aid.md'
replace_item(f, 3, 'mutual aid', 'neighborhood mutual aid network', 'ˌneɪbərˈhʊd ˈmjuːtʃuəl eɪd ˈnetwɜːrk')
replace_item(f, 16, 'community resilience', 'local civic community resilience', 'ˈloʊkl ˈsɪvɪk kəˈmjuːnəti rɪˈzɪliəns')
replace_item(f, 19, 'circular economy', 'neighborhood circular economy initiative', 'ˌneɪbərˈhʊd ˈsɜːrkjələr ɪˈkɑːnəmi ɪˈnɪʃətɪv')

with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
# Fix item 6 heading
text = re.sub(r'## 6\. power tool borrow.*', '## 6. power tool loan /ˌpaʊər tuːl ˈloʊn/', text)
# Add power tool loan to Part 1 review
text = text.replace(
    'borrow drills and saws from the **lending inventory**.',
    'secure an affordable **power tool loan** or borrow drills from the **lending inventory**.'
)
text = text.replace(
    'mượn máy khoan và cưa từ **lending inventory**.',
    'bảo đảm một **power tool loan** giá cả phải chăng hoặc mượn máy khoan từ **lending inventory**.'
)
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b1/society/14')

# 5. b1/travel/14
f = 'english/lessons/vocabulary/cefr/b1/travel/14-river-cruises-canal-barges-and-waterway-exploration.md'
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace(
    'Exploring picturesque aquatic corridors reveals hidden wildlife habitats',
    'Passing through a historic **manual lock gate**, travelers admire waterway engineering. Exploring picturesque aquatic corridors reveals hidden wildlife habitats'
)
text = text.replace(
    'Khám phá những hành lang thủy năng nên thơ hé lộ các môi trường sống động vật hoang dã ẩn giấu',
    'Đi qua một **manual lock gate** lịch sử, du khách chiêm ngưỡng kỹ thuật công trình đường thủy. Khám phá những hành lang thủy năng nên thơ hé lộ các môi trường sống động vật hoang dã ẩn giấu'
)
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b1/travel/14')

# 6. b1/work/11
f = 'english/lessons/vocabulary/cefr/b1/work/11-coworking-spaces-hot-desking-and-remote-work-perks.md'
replace_item(f, 1, 'coworking space', 'flexible coworking space facility', 'ˈfleksəbl ˈkoʊwɜːrkɪŋ speɪs fəˈsɪləti')
replace_item(f, 12, 'day pass', 'coworking day pass', 'ˈkoʊwɜːrkɪŋ deɪ pæs')
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('**remote work perks**', '**remote work perk**')
text = text.replace('**office amenities**', '**office amenity**')
text = text.replace('**guest passes**', '**guest pass**')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b1/work/11')

# 7. b2/art/09
f = 'english/lessons/vocabulary/cefr/b2/art/09-digital-installations-generative-art-and-virtual-exhibits.md'
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('**digital installations**', '**digital installation**')
text = text.replace('**algorithmic visual patterns**', '**algorithmic visual pattern**')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b2/art/09')

# 8. b2/business/09
f = 'english/lessons/vocabulary/cefr/b2/business/09-strategic-joint-ventures-cross-border-alliances-and-consortiums.md'
replace_item(f, 5, 'technology transfer', 'cross-border technology transfer agreement', 'ˌkrɔːs ˈbɔːrdər tekˈnɑːlədʒi ˈtrænsfɜːr əˈɡriːmənt')
replace_item(f, 17, 'regulatory approval', 'antitrust regulatory approval requirement', 'ˌæntiˈtrʌst ˈreɡjələtɔːri əˈpruːvl rɪˈkwaɪərmənt')
replace_item(f, 22, 'cross-licensing agreement', 'reciprocal cross-licensing agreement', 'rɪˈsɪprəkl ˌkrɔːs ˈlaɪsnsɪŋ əˈɡriːmənt')
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('## Review in Context', '## Review in context')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b2/business/09')

# 9. b2/economics/10
f = 'english/lessons/vocabulary/cefr/b2/economics/10-sovereign-wealth-funds-foreign-direct-investment-and-capital-controls.md'
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('**capital controls**', '**capital control**')
text = text.replace(
    'whereas volatile **portfolio investment** can introduce sudden market fluctuations.',
    'whereas executing a **strategic divestment** or handling volatile **portfolio investment** can introduce sudden market fluctuations.'
)
text = text.replace(
    'trong khi **đầu tư danh mục** biến động có thể mang lại những biến động thị trường đột ngột.',
    'trong khi việc thực hiện **strategic divestment** hoặc xử lý **đầu tư danh mục** biến động có thể mang lại những biến động thị trường đột ngột.'
)
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b2/economics/10')

# 10. b2/environment/17
f = 'english/lessons/vocabulary/cefr/b2/environment/17-enhanced-rock-weathering-carbon-mineralization-and-basalt-spreading.md'
replace_item(f, 16, 'soil organic carbon', 'soil organic carbon pool', 'sɔɪl ɔːrˈɡænɪk ˈkɑːrbən puːl')
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('## Review in Context', '## Review in context')
text = text.replace('**carbon dioxide removal credits**', '**carbon dioxide removal credit**')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b2/environment/17')

# 11. b2/finance/10
f = 'english/lessons/vocabulary/cefr/b2/finance/10-private-credit-syndicated-facilities-and-mezzanine-debt.md'
replace_item(f, 9, 'distressed debt', 'distressed private debt asset', 'dɪˈstrest ˈpraɪvət det ˈæset')
replace_item(f, 11, 'interest coverage ratio', 'minimum interest coverage covenant', 'ˈmɪnɪməm ˈɪntrəst ˈkʌvərɪdʒ ˈkʌvənənt')
replace_item(f, 21, 'debt restructuring', 'private debt restructuring arrangement', 'ˈpraɪvət det ˌriːˈstrʌktʃərɪŋ əˈreɪndʒmənt')
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('## Review in Context', '## Review in context')
text = text.replace('**financial covenants**', '**financial covenant**')
text = text.replace('**covenant-lite loans**', '**covenant-lite loan**')
text = text.replace('**loan loss provisions**', '**loan loss provision**')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b2/finance/10')

# 12. b2/health/09
f = 'english/lessons/vocabulary/cefr/b2/health/09-nosocomial-infection-control-antimicrobial-stewardship-and-isolation-wards.md'
replace_item(f, 11, 'surgical site infection', 'postoperative surgical site infection', 'ˌpoʊstˈɑːpərətɪv ˈsɜːrdʒɪkl saɪt ɪnˈfekʃn')
replace_item(f, 14, 'antimicrobial stewardship', 'hospital antimicrobial stewardship program', 'ˈhɑːspɪtl ˌæntimaɪˈkroʊbiəl ˈstuːərdʃɪp ˈproʊɡræm')
replace_item(f, 18, 'hand hygiene compliance', 'clinical hand hygiene compliance audit', 'ˈklɪnɪkl hænd ˈhaɪdʒiːn kəmˈplaɪəns ˈɔːdɪt')
replace_item(f, 20, 'de-escalation therapy', 'antimicrobial de-escalation protocol', 'ˌæntimaɪˈkroʊbiəl diːˌeskəˈleɪʃn ˈproʊtəkɑːl')
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('**outbreak containment measures**', '**outbreak containment measure**')
text = text.replace('**barrier nursing techniques**', '**barrier nursing technique**')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b2/health/09')

# 13. b2/law/10
f = 'english/lessons/vocabulary/cefr/b2/law/10-multinational-arbitration-bilateral-investment-treaties-and-forum-selection.md'
replace_item(f, 5, 'investor-state dispute settlement', 'treaty-based investor-state dispute settlement', 'ˈtriːti beɪst ɪnˈvestər steɪt dɪˈspjuːt ˈsetlmənt')
print('Patched b2/law/10')

# 14. b2/urban/16
f = 'english/lessons/vocabulary/cefr/b2/urban/16-sponge-city-infrastructure-rain-gardens-and-urban-floodways.md'
replace_item(f, 2, 'rain garden', 'engineered urban rain garden', 'ˌendʒɪˈnɪrd ˈɜːrbən reɪn ˈɡɑːrdn')
replace_item(f, 4, 'permeable pavement', 'porous permeable pavement system', 'ˈpɔːrəs ˈpɜːrmiəbl ˈpeɪvmənt ˈsɪstəm')
replace_item(f, 7, 'bioswale', 'vegetated roadway bioswale', 'ˈvedʒəteɪtɪd ˈroʊdweɪ ˈbaɪoʊsweɪl')
replace_item(f, 8, 'green roof', 'extensive stormwater green roof', 'ɪkˈstensɪv ˈstɔːrmwɔːtər ɡriːn ruːf')
replace_item(f, 9, 'retention pond', 'municipal stormwater retention pond', 'mjuːˈnɪsɪpl ˈstɔːrmwɔːtər rɪˈtenʃn pɑːnd')
replace_item(f, 10, 'detention basin', 'engineered dry detention basin', 'ˌendʒɪˈnɪrd draɪ dɪˈtenʃn ˈbeɪsn')
replace_item(f, 13, 'permeable interlocking paver', 'interlocking permeable concrete paver', 'ˌɪntərˈlɑːkɪŋ ˈpɜːrmiəbl ˈkɑːnkriːt ˈpeɪvər')

with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('## Review in Context', '## Review in context')
text = text.replace('**smart drainage sensors**', '**smart drainage sensor**')
text = text.replace('project **daylighting a stream** that had been', 'project **daylighting stream** initiative that had been')
text = text.replace('dự án lớn **daylighting a stream** đã bị giam giữ', 'dự án lớn **daylighting stream** đã bị giam giữ')
# update heading 25 if needed
text = re.sub(r'## 25\. daylighting a stream.*', '## 25. daylighting stream /ˈdeɪlaɪtɪŋ striːm/', text)
text = text.replace('**daylighting a stream**', '**daylighting stream**')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b2/urban/16')
