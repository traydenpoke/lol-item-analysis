function Buttons({ curItemsList, setCurItemsList, setMythicInInventory, setHasMythic, setQuery, handleInputChange }) {

    const clearInventory = () => {
        setCurItemsList([]);
        setMythicInInventory(false);
        setHasMythic(false);
        //alert(`Cleared Inventory`);
    };

    const clearSearchBar = () => {
        setQuery("");
        handleInputChange({ target: { value: "" } });
    };

    function logStats() {
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

        console.log(uniqueStats);
    }

    return (
        <>
            <div className="clearSearchBar">
                <button onClick={clearSearchBar}> Clear Search Bar </button>
            </div>
            <div className="clearInventoryButton">
                <button onClick={clearInventory}> Clear Inventory </button>
            </div>
            <div className="logStats">
                <button onClick={logStats}> Log Stats </button>
            </div>
        </>
    );

};

export default Buttons;