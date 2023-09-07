import data from "./itemInfo.json";


function createItemList() {
    const itemsSorted = {
        "ORNN": [],
        "MYTHIC": [],
        "LEGENDARY": [],
        "EPIC": [],
        "BASIC": [],
        "STARTER": [],
        "BOOTS": []
    };

    data.forEach((item) => {
        const rank = item['rank'];
        itemsSorted[rank].push(item);
    });

    return itemsSorted;
}

export const ItemList = createItemList();