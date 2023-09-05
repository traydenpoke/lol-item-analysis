import React, { useState } from 'react';
import { ItemList } from "../helpers/ItemList";

let allMatches = [];

function GetMatches(props) {
    const { text } = props;
    const itemMatches = [];

    ItemList.forEach((item) => {
        //itemNames.push(item['name']);
        if (item['name'].toLowerCase().includes(text.toLowerCase())) {
            itemMatches.push(item);
            //console.log(`MATCH! Text:${text}, ${item['name']}`);
        }
    });

    console.log(`All matches for '${text}':`);
    itemMatches.map((item) => {
        console.log(item['name']);
    });

    allMatches = itemMatches;
    console.log("---------------------");
}

function GetSetText(props) {
    const { text, setText } = props;

    const handleChange = async (event) => {
        setText(event.target.value);
        console.log(`current text: ${text}`);
    };

    return (
        <input type="text" id="myInput" onChange={handleChange} placeholder="Search for names.." value={text} />
    );
}

function SearchBar(itemList) {

    const [text, setText] = useState('');

    // const handleChange = async (event) => {
    //     setText(event.target.value);
    //     console.log(`new text: ${text}`);
    // };

    // const itemNames = [];
    // const itemMatches = []; // CONTAINS ALL ITEMS THAT MATCH THE STRING, IGNORING CASE SENSITIVITY

    // ItemList.forEach((item) => {
    //     itemNames.push(item['name']);

    //     if (item['name'].toLowerCase().includes(text.toLowerCase())) {
    //         itemMatches.push(item);
    //         console.log(`MATCH! Text:${text}, ${item['name']}`);
    //     }
    // });

    return (
        <div>
            <GetMatches text={text} />
            <GetSetText text={text} setText={setText} />
        </div>
    );
};

export default SearchBar;
export { allMatches };