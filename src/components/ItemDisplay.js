import IndividualItem from "./IndividualItem.js";
import { ItemList } from "../helpers/ItemList.js";
import SearchBar from "../components/SearchBar";
import { allMatches } from "../components/SearchBar";
//import { MatchList } from "../components/SearchBar";
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
        <>
            <SearchBar />
            <button onClick={findMatches}>Click </button>
            <div className="itemListWrapper">
                {/* Items */}
                {itemRarities.map((rank) => {
                    return <> {renderItems(rank)} </>;
                })}
            </div>

        </>
    );
}

function findMatches() {
    console.log("found ya");
    console.log(allMatches);
}

export default ItemDisplay;