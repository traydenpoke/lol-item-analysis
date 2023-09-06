import data from "./itemInfo.json";


function createItemList() {
    const items = [];

    data.forEach((item) => {
        items.push(item);
    });

    return items;
}

export const ItemList = createItemList();