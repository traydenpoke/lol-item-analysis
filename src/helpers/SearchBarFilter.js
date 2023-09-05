import React, { useState } from 'react';
import { ItemList } from "../helpers/ItemList";

function SearchBar(itemList) {

    const [text, setText] = useState('');

    const handleChange = async (event) => {
        setText(event.target.value);
        //console.log(`new text: ${text}`);
        getItemMatches();
    };


    function getItemMatches() {
        const itemNames = [];
        const itemMatches = []; // CONTAINS ALL ITEMS THAT MATCH THE STRING, IGNORING CASE SENSITIVITY

        ItemList.forEach((item) => {
            itemNames.push(item['name']);

            if (item['name'].toLowerCase().includes(text.toLowerCase())) {
                itemMatches.push(item);
                console.log(`MATCH! Text:${text}, ${item['name']}`);
            }
        });
        console.log("-----------------------");

        return itemMatches;
    }

    return (
        <div>
            <button onClick={getItemMatches}>Get Matches</button>
            <input type="text" id="myInput" onChange={handleChange} placeholder="Search for names.." value={text} />
        </div>
    );
};

export default SearchBar;