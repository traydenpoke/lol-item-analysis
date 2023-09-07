import React, { useState } from 'react';
import { ItemList } from "../helpers/ItemList";
import Buttons from "../helpers/Buttons";
import InventoryDisplay from "../components/InventoryDisplay";
import StatDisplay from "../components/StatDisplay";

function SearchAndDisplay() {
    // Sample array of items
    const itemsSorted = ItemList;

    // State to store the current search query and filtered items
    const [query, setQuery] = useState('');
    const [filteredOrnn, setFilteredOrnn] = useState(itemsSorted["ORNN"]);
    const [filteredMythic, setFilteredMythic] = useState(itemsSorted["MYTHIC"]);
    const [filteredLegendary, setFilteredLegendary] = useState(itemsSorted["LEGENDARY"]);
    const [filteredEpic, setFilteredEpic] = useState(itemsSorted["EPIC"]);
    const [filteredBasic, setFilteredBasic] = useState(itemsSorted["BASIC"]);
    const [filteredStarter, setFilteredStarter] = useState(itemsSorted["STARTER"]);
    const [filteredBoots, setFilteredBoots] = useState(itemsSorted["BOOTS"]);

    const [curItemsList, setCurItemsList] = useState([]);
    const [hasMythic, setHasMythic] = useState(false);
    const [mythicInInventory, setMythicInInventory] = useState('');

    function sort(list) {
        list.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
    }

    sort(filteredOrnn);
    sort(filteredMythic);
    sort(filteredLegendary);
    sort(filteredEpic);
    sort(filteredBasic);
    sort(filteredStarter);
    sort(filteredBoots);

    // Function to handle text input change
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);

        // Filter items based on the input value
        const filteredOrnn = itemsSorted["ORNN"].filter((item) =>
            item.name.toLowerCase().includes(inputValue.toLowerCase())
            // || item.tags.toLowerCase().includes(inputValue.toLowerCase()) IMPLEMENT LATER FOR STATS and ls :D
        );
        setFilteredOrnn(filteredOrnn);

        const filteredMythic = itemsSorted["MYTHIC"].filter((item) =>
            item.name.toLowerCase().includes(inputValue.toLowerCase())
            // || item.tags.toLowerCase().includes(inputValue.toLowerCase()) IMPLEMENT LATER FOR STATS and ls :D
        );
        setFilteredMythic(filteredMythic);

        const filteredLegendary = itemsSorted["LEGENDARY"].filter((item) =>
            item.name.toLowerCase().includes(inputValue.toLowerCase())
            // || item.tags.toLowerCase().includes(inputValue.toLowerCase()) IMPLEMENT LATER FOR STATS and ls :D
        );
        setFilteredLegendary(filteredLegendary);

        const filteredEpic = itemsSorted["EPIC"].filter((item) =>
            item.name.toLowerCase().includes(inputValue.toLowerCase())
            // || item.tags.toLowerCase().includes(inputValue.toLowerCase()) IMPLEMENT LATER FOR STATS and ls :D
        );
        setFilteredEpic(filteredEpic);

        const filteredBasic = itemsSorted["BASIC"].filter((item) =>
            item.name.toLowerCase().includes(inputValue.toLowerCase())
            // || item.tags.toLowerCase().includes(inputValue.toLowerCase()) IMPLEMENT LATER FOR STATS and ls :D
        );
        setFilteredBasic(filteredBasic);

        const filteredStarter = itemsSorted["STARTER"].filter((item) =>
            item.name.toLowerCase().includes(inputValue.toLowerCase())
            // || item.tags.toLowerCase().includes(inputValue.toLowerCase()) IMPLEMENT LATER FOR STATS and ls :D
        );
        setFilteredStarter(filteredStarter);

        const filteredBoots = itemsSorted["BOOTS"].filter((item) =>
            item.name.toLowerCase().includes(inputValue.toLowerCase())
            // || item.tags.toLowerCase().includes(inputValue.toLowerCase()) IMPLEMENT LATER FOR STATS and ls :D
        );
        setFilteredBoots(filteredBoots);
    };

    function isMythicItem(item) {
        return (item.rank === "ORNN" || item.rank === "MYTHIC");
    }

    const testOnClick = (item) => {

        // if item clicked is already in inventory, remove it
        //     if the item is a mythic, set to no mythics
        // else if item clicked is not in inventory
        //     if already have 6 items, give an alert message
        //     else if don't have 6 items yet
        //         if already have a mythic, give an alert message
        //             if not, add it
        //             if its a mythic, set it as the mythic

        if (curItemsList.includes(item)) { // item in inventory
            if (isMythicItem(item)) {
                setHasMythic(false);
                setMythicInInventory('');
            }
            const newList = [];
            curItemsList.forEach((i) => {
                if (i !== item) {
                    newList.push(i);
                }
            });
            setCurItemsList(newList);
            console.log(newList); // log updated state
            //alert(`Removed ${item.name} from inventory.`);
        } else { // item not in inventory
            if (curItemsList.length === 6) {
                alert(`6 items already in inventory. Remove one to add '${item.name}'.`);
            } else {
                if (hasMythic && isMythicItem(item)) {
                    alert(`Mythic '${mythicInInventory.name}' already in inventory. Remove to add '${item.name}'.`);
                } else {
                    if (isMythicItem(item)) {
                        setHasMythic(true);
                        setMythicInInventory(item);
                    }
                    setCurItemsList([...curItemsList, item]);
                    console.log([...curItemsList, item]); // log updated state
                    //alert(`Added '${item.name}' to inventory.`);
                }
            }
        }
    };

    const createListItem = (item, idx) => {
        return (
            <li key={idx}>
                {isMythicItem(item) ? (
                    <div className="mythicItem">
                        <img src={item.img} alt={item.name} onClick={() => testOnClick(item)} />
                    </div>
                ) : (
                    <img src={item.img} alt={item.name} onClick={() => testOnClick(item)} />
                )}
            </li>
        );
    };

    return (
        <div>
            <InventoryDisplay
                curItemsList={curItemsList}
                createListItem={createListItem}
            />
            <StatDisplay curItemsList={curItemsList} />
            {/* <ul>
                <div className="inventoryItemList">
                    {curItemsList.map((item, index) => (
                        createListItem(item, index)
                    ))}
                </div>
            </ul> */}

            <h1>Search Component</h1>
            <div className="searchBar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleInputChange}
                />
            </div>
            <Buttons
                curItemsList={curItemsList}
                setCurItemsList={setCurItemsList}
                setMythicInInventory={setMythicInInventory}
                setHasMythic={setHasMythic}
                setQuery={setQuery}
                handleInputChange={handleInputChange}
            />
            {/* <div className="clearSearchBar">
                <button onClick={clearSearchBar}> Clear Search Bar </button>
            </div>
            <div className="clearInventoryButton">
                <button onClick={clearInventory}> Clear Inventory </button>
            </div>
            <div className="logStats">
                <button onClick={logStats}> Log Stats </button>
            </div> */}
            <ul>

                <h1>Ornn</h1>
                <div className="ornnItemList">
                    <div className="itemList">
                        {filteredOrnn.map((item, index) => (
                            createListItem(item, index)
                        ))}
                    </div>
                </div>

                <h1>Mythic</h1>
                <div className="mythicItemList">
                    <div className="itemList">

                        {filteredMythic.map((item, index) => (
                            createListItem(item, index)
                        ))}
                    </div>
                </div>

                <h1>Legendary</h1>
                <div className="itemList">
                    {filteredLegendary.map((item, index) => (
                        createListItem(item, index)
                    ))}
                </div>

                <h1>Epic</h1>
                <div className="itemList">

                    {filteredEpic.map((item, index) => (
                        createListItem(item, index)
                    ))}
                </div>

                <h1>Basic</h1>
                <div className="itemList">
                    {filteredBasic.map((item, index) => (
                        createListItem(item, index)
                    ))}
                </div>

                <h1>Starter</h1>
                <div className="itemList">
                    {filteredStarter.map((item, index) => (
                        createListItem(item, index)
                    ))}
                </div>

                <h1>Boots</h1>
                <div className="itemList">
                    {filteredBoots.map((item, index) => (
                        createListItem(item, index)
                    ))}
                </div>
            </ul>
        </div>
    );
}

export default SearchAndDisplay;
