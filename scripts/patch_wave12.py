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
            print(f'Item {item_num} not found in {filepath}')
            return
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

# 1. b1/culture/13
f = 'english/lessons/vocabulary/cefr/b1/culture/13-indigenous-folklore-mythology-and-oral-traditions.md'
replace_item(f, 7, 'oral tradition', 'indigenous oral tradition', 'ɪnˈdɪdʒənəs ˈɔːrəl trəˈdɪʃn')
replace_item(f, 14, 'cultural heritage', 'tribal cultural heritage', 'ˈtraɪbl ˈkʌltʃərəl ˈherɪtɪdʒ')
replace_item(f, 19, 'folk ballad', 'mythological folk ballad', 'ˌmɪθəˈlɑːdʒɪkl foʊk ˈbæləd')

# 2. b1/education/11
f = 'english/lessons/vocabulary/cefr/b1/education/11-creative-writing-workshops-peer-critiques-and-literary-zines.md'
replace_item(f, 5, 'character arc development', 'protagonist character arc development', 'proʊˈtæɡənɪst ˈkærəktər ɑːrk dɪˈveləpmənt')

# 3. b1/health/13
f = 'english/lessons/vocabulary/cefr/b1/health/13-eye-care-screen-fatigue-and-vision-protection.md'
replace_item(f, 2, 'blue light filter', 'digital blue light filter', 'ˈdɪdʒɪtl bluː laɪt ˈfɪltər')
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('**artificial tears drops**', '**artificial tears drop**')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b1/health/13')

# 4. b1/leisure/14
f = 'english/lessons/vocabulary/cefr/b1/leisure/14-ceramic-glazing-pottery-decorating-and-kiln-firing-clubs.md'
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('**ceramic glaze pigments**', '**ceramic glaze pigment**')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b1/leisure/14')

# 5. b1/society/15
f = 'english/lessons/vocabulary/cefr/b1/society/15-neighborhood-emergency-shelters-community-pantries-and-volunteer-first-aid.md'
replace_item(f, 1, 'emergency shelter', 'neighborhood emergency shelter', 'ˌneɪbərˈhʊd ɪˈmɜːrdʒənsi ˈʃeltər')
replace_item(f, 4, 'disaster relief', 'neighborhood disaster relief', 'ˌneɪbərˈhʊd dɪˈzæstər rɪˈliːf')
replace_item(f, 5, 'crisis response', 'community crisis response team', 'kəˈmjuːnəti ˈkraɪsɪs rɪˈspɑːns tiːm')
replace_item(f, 7, 'food distribution', 'emergency food distribution', 'ɪˈmɜːrdʒənsi fuːd ˌdɪstrɪˈbjuːʃn')
replace_item(f, 8, 'emergency kit', 'shelter emergency kit', 'ˈʃeltər ɪˈmɜːrdʒənsi kɪt')
replace_item(f, 10, 'evacuation route', 'neighborhood evacuation route', 'ˌneɪbərˈhʊd ɪˌvækjuˈeɪʃn ruːt')
replace_item(f, 14, 'community resilience', 'neighborhood disaster resilience', 'ˌneɪbərˈhʊd dɪˈzæstər rɪˈzɪliəns')
replace_item(f, 16, 'emergency drill', 'neighborhood emergency drill', 'ˌneɪbərˈhʊd ɪˈmɜːrdʒənsi drɪl')
replace_item(f, 22, 'humanitarian aid', 'grassroots humanitarian aid', 'ˈɡræsruːts hjuːˌmænɪˈteriən eɪd')

with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
# Add bolding for first aid station in Part 2 review
text = text.replace(
    'Specialized **search and rescue** teams deploy quickly',
    'Volunteers operate a central **first aid station** to treat injuries, while specialized **search and rescue** teams deploy quickly'
)
text = text.replace(
    'Các đội **search and rescue** chuyên biệt triển khai nhanh chóng',
    'Các tình nguyện viên vận hành một **first aid station** trung tâm để điều trị các vết thương, trong khi các đội **search and rescue** chuyên biệt triển khai nhanh chóng'
)
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b1/society/15')

# 6. b1/work/12
f = 'english/lessons/vocabulary/cefr/b1/work/12-job-shadowing-internship-rotations-and-workplace-mentoring.md'
replace_item(f, 8, 'feedback session', 'mentoring feedback session', 'ˈmentərɪŋ ˈfiːdbæk ˈseʃn')
replace_item(f, 10, 'skill assessment', 'workplace skill assessment', 'ˈwɜːrkpleɪs skɪl əˈsesmənt')
replace_item(f, 11, 'professional network', 'industry professional network', 'ˈɪndəstri prəˈfeʃənl ˈnetwɜːrk')

# 7. b2/business/10
f = 'english/lessons/vocabulary/cefr/b2/business/10-joint-ventures-technology-licensing-and-foreign-subsidiaries.md'
replace_item(f, 8, 'foreign direct investment', 'greenfield foreign investment', 'ˈɡriːnfiːld ˈfɔːrən ɪnˈvestmənt')
replace_item(f, 18, 'cross-border dispute resolution', 'cross-border commercial dispute resolution', 'ˌkrɔːs ˈbɔːrdər kəˈmɜːrʃl dɪˈspjuːt ˌrezəˈluːʃn')
replace_item(f, 22, 'local content requirement', 'mandatory local content rule', 'ˈmændətɔːri ˈloʊkl ˈkɑːntent ruːl')

# 8. b2/economics/11
f = 'english/lessons/vocabulary/cefr/b2/economics/11-demographic-transition-dependency-ratios-and-silver-economy.md'
replace_item(f, 1, 'demographic transition', 'multistage demographic transition', 'ˌmʌltiˈsteɪdʒ ˌdeməˈɡræfɪk trænˈzɪʃn')
replace_item(f, 2, 'old-age dependency ratio', 'elderly dependency ratio metric', 'ˈeldərli dɪˈpendənsi ˈreɪʃioʊ ˈmetrɪk')
replace_item(f, 7, 'labor force participation rate', 'elderly labor force participation', 'ˈeldərli ˈleɪbər fɔːrs pɑːrˌtɪsɪˈpeɪʃn')
replace_item(f, 8, 'intergenerational equity', 'intergenerational pension equity', 'ˌɪntərdʒenəˈreɪʃənl ˈpenʃn ˈekwəti')

# 9. b2/finance/11
f = 'english/lessons/vocabulary/cefr/b2/finance/11-catastrophe-bonds-insurance-linked-securities-and-reinsurance-pools.md'
replace_item(f, 1, 'catastrophe bond', 'parametric catastrophe bond', 'ˌpærəˈmetrɪk kəˈtæstrəfi bɑːnd')
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('## Review in Context', '## Review in context')
text = text.replace('**secondary perils**', '**secondary peril**')
text = text.replace('**climate-indexed derivatives**', '**climate-indexed derivative**')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b2/finance/11')

# 10. b2/urban/17
f = 'english/lessons/vocabulary/cefr/b2/urban/17-pocket-parks-urban-micro-forests-and-pocket-green-spaces.md'
replace_item(f, 5, 'urban heat island mitigation', 'localized urban heat island mitigation', 'ˈloʊkəlaɪzd ˈɜːrbən hiːt ˈaɪlənd ˌmɪtɪˈɡeɪʃn')
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('## Review in Context', '## Review in context')
text = text.replace('**plant an urban micro-forest**', 'plant an **urban micro-forest**')
text = text.replace('cùng nhau **trồng một khu rừng siêu nhỏ đô thị**', 'cùng nhau trồng một **urban micro-forest**')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b2/urban/17')
