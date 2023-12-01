import "../styles/StatText.css";
import { StatNames } from "../helpers/StatInfo";

const StatDisplay = ({ curItemsList }) => {
    const uniqueStats = {};

    // store stat:value pairs in uniqueStats, totals stats from all items
    if (curItemsList.length === 0) {
        console.log(`Empty inventory.`);
    } else {
        curItemsList.forEach((item) => {
            item.stats.forEach((stat) => {
                console.log(stat);
                if (stat[0] in uniqueStats) {
                    uniqueStats[stat[0]] += stat[1];
                } else {
                    uniqueStats[stat[0]] = stat[1];
                }
            });
        });
    }

    Object.keys(StatNames).forEach((stat) => {
        if (stat in uniqueStats) {
            console.log(`${StatNames[stat]}: ${uniqueStats[stat]}`);
        }
    });

    const goldCost = () => {
        let goldCost = 0;
        curItemsList.forEach((item) => {
            goldCost += item.gold;
        });

        return (
            <>
                <p>
                    Gold Cost:
                </p>
                <p>
                    {goldCost}
                </p>
            </>
        );
    };

    return (
        <>
            <h1>Stat Display</h1>
            <div className="center">
                <div className="statTextList">
                    {Object.keys(StatNames).map((stat) => {
                        if (uniqueStats[stat] !== undefined) {
                            return (
                                <>
                                    <p>
                                        {`${StatNames[stat]}:`}
                                    </p>
                                    <p>
                                        {`${uniqueStats[stat]}`}
                                    </p>
                                </>
                            );
                        } else {
                            return (
                                <>
                                    <p>
                                        {`${StatNames[stat]}:`}
                                    </p>
                                    <p>
                                        0
                                    </p>
                                </>
                            );
                        }
                    })}
                    {goldCost()}
                </div>
            </div>
        </>
    );
};

export default StatDisplay;