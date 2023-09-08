function FilterLists(setFiltered, rank, itemsSorted, input) {
    const filtered = itemsSorted[rank].filter((item) =>
        item.name.toLowerCase().includes(input.toLowerCase())
        // || item.tags.toLowerCase().includes(inputValue.toLowerCase()) IMPLEMENT LATER FOR STATS and ls :D
    );
    setFiltered(filtered);
};

export default FilterLists;