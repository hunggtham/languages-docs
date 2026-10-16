with open('english/lessons/vocabulary/cefr/b1/README.md', 'r', encoding='utf-8') as f:
    b1_readme = f.read()

b1_updates = [
    (
        './culture/13-indigenous-folklore-mythology-and-oral-traditions.md)',
        './culture/13-indigenous-folklore-mythology-and-oral-traditions.md)\n- [Puppet Theaters, Shadow Puppetry, and Folk Performances](./culture/14-puppet-theaters-shadow-puppetry-and-folk-performances.md)'
    ),
    (
        './education/11-creative-writing-workshops-peer-critiques-and-literary-zines.md)',
        './education/11-creative-writing-workshops-peer-critiques-and-literary-zines.md)\n- [Science Fairs, STEM Competitions, and Student Inventors](./education/12-science-fairs-stem-competitions-and-student-inventors.md)'
    ),
    (
        './food/12-cold-brew-tea-infusions-and-herbal-tisanes.md)',
        './food/12-cold-brew-tea-infusions-and-herbal-tisanes.md)\n- [Sourdough Baking, Wild Yeast Starters, and Artisan Bread](./food/13-sourdough-baking-wild-yeast-starters-and-artisan-bread.md)'
    ),
    (
        './health/13-eye-care-screen-fatigue-and-vision-protection.md)',
        './health/13-eye-care-screen-fatigue-and-vision-protection.md)\n- [Sleep Hygiene, Circadian Rhythms, and Restorative Rest](./health/14-sleep-hygiene-circadian-rhythms-and-restorative-rest.md)'
    ),
    (
        './leisure/14-ceramic-glazing-pottery-decorating-and-kiln-firing-clubs.md)',
        './leisure/14-ceramic-glazing-pottery-decorating-and-kiln-firing-clubs.md)\n- [Astrophotography, Stargazing Clubs, and Amateur Observatories](./leisure/15-astrophotography-stargazing-clubs-and-amateur-observatories.md)'
    ),
    (
        './society/15-neighborhood-emergency-shelters-community-pantries-and-volunteer-first-aid.md)',
        './society/15-neighborhood-emergency-shelters-community-pantries-and-volunteer-first-aid.md)\n- [Neighborhood Civic Associations, Block Parties, and Local Advocacy](./society/16-neighborhood-civic-associations-block-parties-and-local-advocacy.md)'
    ),
    (
        './travel/15-mountain-cable-cars-funiculars-and-alpine-trails.md)',
        './travel/15-mountain-cable-cars-funiculars-and-alpine-trails.md)\n- [Island Hopping, Coastal Ferries, and Archipelago Explorations](./travel/16-island-hopping-coastal-ferries-and-archipelago-explorations.md)'
    ),
    (
        './work/12-job-shadowing-internship-rotations-and-workplace-mentoring.md)',
        './work/12-job-shadowing-internship-rotations-and-workplace-mentoring.md)\n- [Conflict Resolution, Workplace Mediation, and Consensus Building](./work/13-conflict-resolution-workplace-mediation-and-consensus-building.md)'
    ),
]

for old, new in b1_updates:
    if old in b1_readme and new not in b1_readme:
        b1_readme = b1_readme.replace(old, new)
        print('Updated b1/README.md for', new.split('\n')[-1])
    else:
        print('Skipped or already present in b1/README.md for', old)

with open('english/lessons/vocabulary/cefr/b1/README.md', 'w', encoding='utf-8') as f:
    f.write(b1_readme)

with open('english/lessons/vocabulary/cefr/b2/README.md', 'r', encoding='utf-8') as f:
    b2_readme = f.read()

b2_updates = [
    (
        './art/10-interactive-sound-art-acoustic-ecology-and-soundscape-installations.md)',
        './art/10-interactive-sound-art-acoustic-ecology-and-soundscape-installations.md)\n- [Kinetic Sculpture, Optical Art, and Spatial Illusions](./art/11-kinetic-sculpture-optical-art-and-spatial-illusions.md)'
    ),
    (
        './business/10-joint-ventures-technology-licensing-and-foreign-subsidiaries.md)',
        './business/10-joint-ventures-technology-licensing-and-foreign-subsidiaries.md)\n- [Corporate Spin-Offs, Carve-Outs, and Divestiture Strategies](./business/11-corporate-spin-offs-carve-outs-and-divestiture-strategies.md)'
    ),
    (
        './economics/11-demographic-transition-dependency-ratios-and-silver-economy.md)',
        './economics/11-demographic-transition-dependency-ratios-and-silver-economy.md)\n- [Input-Output Analysis, Inter-Industry Linkages, and Multiplier Effects](./economics/12-input-output-analysis-inter-industry-linkages-and-multiplier-effects.md)'
    ),
    (
        './environment/18-mangrove-afforestation-blue-carbon-credits-and-coastal-bioshields.md)',
        './environment/18-mangrove-afforestation-blue-carbon-credits-and-coastal-bioshields.md)\n- [Soil Salinization Remediation, Halophyte Cultivation, and Dryland Restoration](./environment/19-soil-salinization-remediation-halophyte-cultivation-and-dryland-restoration.md)'
    ),
    (
        './finance/11-catastrophe-bonds-insurance-linked-securities-and-reinsurance-pools.md)',
        './finance/11-catastrophe-bonds-insurance-linked-securities-and-reinsurance-pools.md)\n- [Project Finance, Non-Recourse Debt, and Infrastructure Concessions](./finance/12-project-finance-non-recourse-debt-and-infrastructure-concessions.md)'
    ),
    (
        './health/10-antimicrobial-peptides-phage-therapy-and-novel-pathogen-diagnostics.md)',
        './health/10-antimicrobial-peptides-phage-therapy-and-novel-pathogen-diagnostics.md)\n- [Cellular Senescence, Telomere Biology, and Longevity Therapeutics](./health/11-cellular-senescence-telomere-biology-and-longevity-therapeutics.md)'
    ),
    (
        './law/11-maritime-law-salvage-rights-and-admiralty-jurisdiction.md)',
        './law/11-maritime-law-salvage-rights-and-admiralty-jurisdiction.md)\n- [Antitrust Enforcement, Market Definition, and Merger Remedies](./law/12-antitrust-enforcement-market-definition-and-merger-remedies.md)'
    ),
    (
        './urban/17-pocket-parks-urban-micro-forests-and-pocket-green-spaces.md)',
        './urban/17-pocket-parks-urban-micro-forests-and-pocket-green-spaces.md)\n- [Urban Waterfront Revitalization, Floodable Promenades, and Canal Restoration](./urban/18-urban-waterfront-revitalization-floodable-promenades-and-canal-restoration.md)'
    ),
]

for old, new in b2_updates:
    if old in b2_readme and new not in b2_readme:
        b2_readme = b2_readme.replace(old, new)
        print('Updated b2/README.md for', new.split('\n')[-1])
    else:
        print('Skipped or already present in b2/README.md for', old)

with open('english/lessons/vocabulary/cefr/b2/README.md', 'w', encoding='utf-8') as f:
    f.write(b2_readme)

print('README updates complete!')
