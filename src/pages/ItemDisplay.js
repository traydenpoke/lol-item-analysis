import React, { useState } from 'react';
import { ItemList } from "../helpers/ItemList";
import Buttons from "../components/Buttons";
import InventoryDisplay from "../components/InventoryDisplay";
import StatDisplay from "../components/StatDisplay";
import FilterLists from "../helpers/FilterLists";
import "../styles/SearchBar.css";


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

    // sort all the lists
    // ---------------
    function sort(list) {
        list.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
    }

    // can i combine this with above somehow?
    const filteredList = [
        [filteredOrnn, setFilteredOrnn, "ORNN"],
        [filteredMythic, setFilteredMythic, "MYTHIC"],
        [filteredLegendary, setFilteredLegendary, "LEGENDARY"],
        [filteredEpic, setFilteredEpic, "EPIC"],
        [filteredBasic, setFilteredBasic, "BASIC"],
        [filteredStarter, setFilteredStarter, "STARTER"],
        [filteredBoots, setFilteredBoots, "BOOTS"]
    ];

    filteredList.forEach((listItem) => {
        sort(listItem[0]);
    });

    // Function to handle text input change
    const handleInputChange = (event) => {
        // get query and setQuery to the value in the text box
        const inputValue = event.target.value;
        setQuery(inputValue);

        // send to helper function, will change states for us
        filteredList.forEach((filtered) => {
            FilterLists(filtered[1], filtered[2], itemsSorted, inputValue);
        });

    };

    function isMythicItem(item) {
        return (item.rank === "ORNN" || item.rank === "MYTHIC");
    }

    const modifyInventory = (item) => {

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
                        <img src={item.img} alt={item.name} onClick={() => modifyInventory(item)} />
                    </div>
                ) : (
                    <img src={item.img} alt={item.name} onClick={() => modifyInventory(item)} />
                )}
            </li>
        );
    };

    return (
        <>
            <InventoryDisplay
                curItemsList={curItemsList}
                createListItem={createListItem}
            />
            <StatDisplay curItemsList={curItemsList} />
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

            <ul class="nobullets">
                {filteredList.map((list, index) => {
                    return (
                        <div key={index}>
                            <h1>{list[2]}</h1>
                            <div className="itemList">
                                {list[0].map((item, itemIndex) => {
                                    return createListItem(item, itemIndex);
                                })}
                            </div>
                        </div>
                    );
                })}
            </ul>

        </>
    );
}

export default SearchAndDisplay;
