with open('english/lessons/vocabulary/cefr/b1/README.md', 'r', encoding='utf-8') as f:
    b1_readme = f.read()

b1_updates = [
    (
        './culture/14-puppet-theaters-shadow-puppetry-and-folk-performances.md)',
        './culture/14-puppet-theaters-shadow-puppetry-and-folk-performances.md)\n- [Traditional Storytelling, Epic Poetry, and Oral Chronicles](./culture/15-traditional-storytelling-epic-poetry-and-oral-chronicles.md)'
    ),
    (
        './food/13-sourdough-baking-wild-yeast-starters-and-artisan-bread.md)',
        './food/13-sourdough-baking-wild-yeast-starters-and-artisan-bread.md)\n- [Artisanal Cheese Making, Fermentation Caves, and Dairy Craft](./food/14-artisanal-cheese-making-fermentation-caves-and-dairy-craft.md)'
    ),
    (
        './travel/16-island-hopping-coastal-ferries-and-archipelago-explorations.md)',
        './travel/16-island-hopping-coastal-ferries-and-archipelago-explorations.md)\n- [Scenic Railway Journeys, Sleeper Trains, and Historic Stations](./travel/17-scenic-railway-journeys-sleeper-trains-and-historic-stations.md)'
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
        './urban/18-urban-waterfront-revitalization-floodable-promenades-and-canal-restoration.md)',
        './urban/18-urban-waterfront-revitalization-floodable-promenades-and-canal-restoration.md)\n- [Biophilic Architecture, Green Roofs, and Vertical Gardens](./urban/19-biophilic-architecture-green-roofs-and-vertical-gardens.md)'
    ),
    (
        './finance/12-project-finance-non-recourse-debt-and-infrastructure-concessions.md)',
        './finance/12-project-finance-non-recourse-debt-and-infrastructure-concessions.md)\n- [Microfinance Institutions, Peer-to-Peer Lending, and Financial Inclusion](./finance/13-microfinance-institutions-peer-to-peer-lending-and-financial-inclusion.md)'
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

print('Wave 14 README updates complete!')
