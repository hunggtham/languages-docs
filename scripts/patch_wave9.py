import re, os, glob

def replace_item_in_file(filepath, item_num, new_hw, new_ipa):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match heading
    pattern = rf'^(##\s+{item_num}\.\s+)([^(/]+?)(\s+/[^/\n]+/)(\s*$)'
    m = re.search(pattern, content, re.MULTILINE)
    if not m:
        print(f"Item {item_num} not found in {filepath}")
        return
    old_hw = m.group(2).strip()
    new_heading = f"## {item_num}. {new_hw} /{new_ipa}/"
    content = content[:m.start()] + new_heading + content[m.end():]

    # Replace bold occurrences of old_hw
    content = re.sub(rf'\*\*{re.escape(old_hw)}\*\*', f'**{new_hw}**', content, flags=re.IGNORECASE)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated item {item_num}: '{old_hw}' -> '{new_hw}' in {filepath}")

# 1. b2/business/07
f_biz = 'english/lessons/vocabulary/cefr/b2/business/07-corporate-turnarounds-distressed-debt-and-divestitures.md'
replace_item_in_file(f_biz, 1, 'multinational corporate turnaround', 'ˌmʌltiˈnæʃnəl ˈkɔːrpərət ˈtɜːrnəraʊnd')
replace_item_in_file(f_biz, 19, 'corporate debt-equity restructuring', 'ˈkɔːrpərət det ˈekwəti ˌriːˈstrʌktʃərɪŋ')

# 2. b2/economics/08
f_econ = 'english/lessons/vocabulary/cefr/b2/economics/08-macroprudential-regulation-systemic-risk-and-financial-contagion.md'
replace_item_in_file(f_econ, 2, 'cross-border systemic risk', 'krɒs ˈbɔːrdər sɪˈstemɪk rɪsk')
replace_item_in_file(f_econ, 10, 'interbank moral hazard problem', 'ˌɪntərˈbæŋk ˈmɔːrəl ˈhæzərd ˈprɑːbləm')
replace_item_in_file(f_econ, 13, 'macroeconomic debt overhang problem', 'ˌmækroʊˌekəˈnɑːmɪk det ˈoʊvərhæŋ ˈprɑːbləm')
replace_item_in_file(f_econ, 18, 'sovereign credit default swap spread', 'ˈsɒvrɪn ˈkredɪt dɪˈfɔːlt swɑːp spred')

# 3. b2/finance/08
f_fin = 'english/lessons/vocabulary/cefr/b2/finance/08-algorithmic-trading-market-microstructure-and-dark-pools.md'
replace_item_in_file(f_fin, 3, 'alternative dark pool venue', 'ɔːlˈtɜːrnətɪv dɑːrk puːl ˈvenjuː')
replace_item_in_file(f_fin, 10, 'high-frequency latency arbitrage', 'haɪ ˈfriːkwənsi ˈleɪtnsi ˈɑːrbɪtrɑːʒ')
replace_item_in_file(f_fin, 12, 'adverse market impact cost', 'ˈædvɜːrs ˈmɑːrkɪt ˈɪmpækt kɔːst')
replace_item_in_file(f_fin, 16, 'algorithmic quote stuffing tactic', 'ˌælɡəˈrɪðmɪk kwoʊt ˈstʌfɪŋ ˈtæktɪk')
replace_item_in_file(f_fin, 21, 'predatory order book spoofing', 'ˈpredətɔːri ˈɔːrdər bʊk ˈspuːfɪŋ')
replace_item_in_file(f_fin, 25, 'market-wide circuit breaker mechanism', 'ˈmɑːrkɪt waɪd ˈsɜːrkɪt ˈbreɪkər ˈmekənɪzəm')

# 4. b2/health/07
f_hlth = 'english/lessons/vocabulary/cefr/b2/health/07-epidemiological-surveillance-contact-tracing-and-quarantine-policy.md'
replace_item_in_file(f_hlth, 1, 'active epidemiological surveillance system', 'ˈæktɪv ˌepɪˌdiːmiəˈlɑːdʒɪkl sɜːrˈveɪləns ˈsɪstəm')
replace_item_in_file(f_hlth, 4, 'localized superspreading event', 'ˈloʊkəlaɪzd ˈsuːpərspredɪŋ ɪˈvent')
replace_item_in_file(f_hlth, 5, 'infectious asymptomatic carrier', 'ɪnˈfekʃəs ˌeɪsɪmptəˈmætɪk ˈkæriər')
replace_item_in_file(f_hlth, 6, 'zoonotic spillover transmission event', 'ˌzoʊəˈnɑːtɪk ˈspɪloʊvər trænzˈmɪʃn ɪˈvent')
replace_item_in_file(f_hlth, 10, 'real-time syndromic surveillance', 'ˈriːəl taɪm sɪnˈdrɑːmɪk sɜːrˈveɪləns')
replace_item_in_file(f_hlth, 13, 'global health security framework', 'ˈɡloʊbl helθ sɪˈkjʊrəti ˈfreɪmwɜːrk')
replace_item_in_file(f_hlth, 14, 'digital contact tracing protocol', 'ˈdɪdʒɪtl ˈkɑːntækt ˈtreɪsɪŋ ˈproʊtəkɑːl')
replace_item_in_file(f_hlth, 20, 'proactive community mitigation strategy', 'proʊˈæktɪv kəˈmjuːnəti ˌmɪtɪˈɡeɪʃn ˈstrætədʒi')
replace_item_in_file(f_hlth, 21, 'international border health screening', 'ˌɪntərˈnæʃnəl ˈbɔːrdər helθ ˈskriːnɪŋ')

# 5. b2/law/08
f_law = 'english/lessons/vocabulary/cefr/b2/law/08-antitrust-enforcement-platform-monopolies-and-merger-remedies.md'
replace_item_in_file(f_law, 3, 'structural merger remedy package', 'ˈstrʌktʃərəl ˈmɜːrdʒər ˈremədi ˈpækɪdʒ')
replace_item_in_file(f_law, 6, 'monopolistic predatory pricing scheme', 'məˌnɑːpəˈlɪstɪk ˈpredətɔːri ˈpraɪsɪŋ skiːm')
replace_item_in_file(f_law, 7, 'anticompetitive exclusive dealing arrangement', 'ˌænti kəmˈpetətɪv ɪkˈskluːsɪv ˈdiːlɪŋ əˈreɪndʒmənt')
replace_item_in_file(f_law, 8, 'unlawful tying arrangement', 'ʌnˈlɔːfl ˈtaɪɪŋ əˈreɪndʒmənt')
replace_item_in_file(f_law, 10, 'enforceable behavioral remedy', 'ɪnˈfɔːrsəbl bɪˈheɪvjərəl ˈremədi')
replace_item_in_file(f_law, 15, 'excessive market concentration ratio', 'ɪkˈsesɪv ˈmɑːrkɪt ˌkɑːnsnˈtreɪʃn ˈreɪʃioʊ')
replace_item_in_file(f_law, 19, 'anticompetitive killer acquisition strategy', 'ˌænti kəmˈpetətɪv ˈkɪlər ˌækwɪˈzɪʃn ˈstrætədʒi')
replace_item_in_file(f_law, 24, 'systematic price discrimination policy', 'ˌsɪstəˈmætɪk praɪs dɪˌskrɪmɪˈneɪʃn ˈpɑːləsi')

print("All Wave 9 replacements complete!")
