import IndividualItem from "./IndividualItem.js";
import { ItemList } from "../helpers/ItemList.js";
import "../styles/ItemDisplay.css";

const itemRarities = [
    "ORNN",
    "MYTHIC",
    "LEGENDARY",
    "EPIC",
    "BASIC",
    "STARTER",
    "BOOTS"
];

// convert item rarities to proper grammar, eg. Mythic vs MYTHIC
function itemHeader(rank) {
    const grammarRank = rank.charAt(0).toUpperCase() + rank.toLowerCase().slice(1);
    return <div className="rankTitle"><h1>{grammarRank} items:</h1></div>;
}

// helper function to render each set of items
function renderItems(rank) {
    return (
        <>
            <div className="itemHeaderText">
                <h1>{itemHeader(rank)}</h1>
            </div>
            <div className="itemList">
                {ItemList.map((item) => {
                    return itemsToDisplay(item, rank);
                })}
            </div>
        </>
    );
}

// display items that are all the certain rank
function itemsToDisplay(item, rankWanted) {
    if (item.rank === rankWanted) {
        return <div className="individualItem"><IndividualItem name={item.name} gold={item.gold} stats={item.stats} rank={item.rank} img={item.img} /> </div>;
    }
}

function ItemDisplay() {
    return (
        <div className="itemListWrapper">
            {/* Mythic Items */}
            {itemRarities.map((rank) => {
                console.log(rank);
                return <> {renderItems(rank)} </>;
            })}
        </div>
    );
}

export default ItemDisplay;