const StatDisplay = ({ curItemsList }) => {
    const uniqueStats = {};

    if (curItemsList.length === 0) {
        console.log(`Empty inventory.`);
    } else {
        curItemsList.forEach((item) => {
            item.stats.forEach((stat) => {
                if (stat[0] in uniqueStats) {
                    uniqueStats[stat[0]] += stat[1];
                } else {
                    uniqueStats[stat[0]] = stat[1];
                }
            });
        });
    }

    const statNames = {
        "attackDamage": "Attack Damage",
        "attackSpeed": "Attack Speed",
        "omnivamp": "Omnivamp",
        "lifesteal": "Lifesteal",
        "criticalStrikeChance": "Critical Strike Chance",
        "lethality": "Lethality",
        "armorPenetrationPercent": "% Armor Penetration",
        "abilityPower": "Ability Power",
        "magicPenetration": "Flat Magic Penetration",
        "magicPenetrationPercent": "% Magic Penetration",
        "magicResistance": "Magic Resistance",
        "abilityHaste": "Ability Haste",
        "movespeed": "Movement Speed",
        "movespeedPercent": "% Movement Speed",
        "healAndShieldPower": "Heal and Shield Power",
        "armor": "Armor",
        "health": "Health",
        "healthRegen": "Health Regen",
        "mana": "Mana",
        "manaRegen": "Mana Regen",
        "goldPer10": "Gold Per 10s"
    };

    Object.keys(statNames).forEach((stat) => {
        if (stat in uniqueStats) {
            console.log(`${statNames[stat]}: ${uniqueStats[stat]}`);
        }
    });



    return (
        <>
            <h1>Stat Display</h1>
            <div className="statList">
                <p>test</p>
                {Object.keys(statNames).map((stat) => {
                    if (uniqueStats[stat] !== undefined) {
                        return (
                            <p key={stat}>
                                {`${statNames[stat]}: ${uniqueStats[stat]}`}
                            </p>
                        );
                    } else {
                        return (
                            <p key={stat}>
                                {`${statNames[stat]}: 0`}
                            </p>
                        );
                    }
                })}
            </div>
        </>
    );


    //console.log(uniqueStats);
};

export default StatDisplay;