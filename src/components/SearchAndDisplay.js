import React, { useState } from 'react';
import { ItemList } from "../helpers/ItemList";

function SearchAndDisplay2() {
    // Sample array of items
    const itemsSorted = {
        "ORNN": [],
        "MYTHIC": [],
        "LEGENDARY": [],
        "EPIC": [],
        "BASIC": [],
        "STARTER": [],
        "BOOTS": []
    };

    const items = [];
    ItemList.map((item) => {
        //console.log(item['rank']);
        const rank = item['rank'];
        itemsSorted[rank].push(item);

        console.log(item['name']);
        items.push(item);
    });
    //console.log(items);

    // State to store the current search query and filtered items
    const [query, setQuery] = useState('');
    const [filteredOrnn, setFilteredOrnn] = useState(itemsSorted["ORNN"]);
    const [filteredMythic, setFilteredMythic] = useState(itemsSorted["MYTHIC"]);
    const [filteredLegendary, setFilteredLegendary] = useState(itemsSorted["LEGENDARY"]);
    const [filteredEpic, setFilteredEpic] = useState(itemsSorted["EPIC"]);
    const [filteredBasic, setFilteredBasic] = useState(itemsSorted["BASIC"]);
    const [filteredStarter, setFilteredStarter] = useState(itemsSorted["STARTER"]);
    const [filteredBoots, setFilteredBoots] = useState(itemsSorted["BOOTS"]);

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

    return (
        <div>
            <h1>Search Component</h1>
            <div className="searchBar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleInputChange}
                />
            </div>
            <ul>

                <h1>Ornn</h1>
                <div className="ornnItemList">
                    <div className="itemList">
                        {filteredOrnn.map((item, index) => (
                            <li key={index}><img src={item.img} /></li>
                        ))}
                    </div>
                </div>

                <h1>Mythic</h1>
                <div className="mythicItemList">
                    <div className="itemList">
                        {filteredMythic.map((item, index) => (
                            <li key={index}><img src={item.img} /></li>
                        ))}
                    </div>
                </div>

                <h1>Legendary</h1>
                <div className="itemList">
                    {filteredLegendary.map((item, index) => (
                        <li key={index}><img src={item.img} /></li>
                    ))}
                </div>

                <h1>Epic</h1>
                <div className="itemList">

                    {filteredEpic.map((item, index) => (
                        <li key={index}><img src={item.img} /></li>
                    ))}
                </div>

                <h1>Basic</h1>
                <div className="itemList">
                    {filteredBasic.map((item, index) => (
                        <li key={index}><img src={item.img} /></li>
                    ))}
                </div>

                <h1>Starter</h1>
                <div className="itemList">
                    {filteredStarter.map((item, index) => (
                        <li key={index}><img src={item.img} /></li>
                    ))}
                </div>

                <h1>Boots</h1>
                <div className="itemList">
                    {filteredBoots.map((item, index) => (
                        <li key={index}><img src={item.img} /></li>
                    ))}
                </div>
            </ul>
        </div>
    );
}

export default SearchAndDisplay2;
