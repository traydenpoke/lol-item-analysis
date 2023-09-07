import noItemImage from '../components/none.webp';

const InventoryDisplay = ({ curItemsList, createListItem }) => {

    const generateItems = () => {
        const items = [];
        for (let i = 0; i < 6; i++) {
            if (i >= curItemsList.length) {
                items.push(<li key={i}><img src={noItemImage} alt="no item" /></li>);
            } else {
                items.push(createListItem(curItemsList[i], i));
            }
        }
        return items;
    };


    return (
        <>
            <h1>Inventory Items</h1>
            <div className="inventoryItems">
                {generateItems()}
            </div>
        </>
    );


};

export default InventoryDisplay;