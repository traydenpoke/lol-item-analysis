function generateString(name, gold, stats, rank) {
    let str = `${name}: ${gold} gold`;
    stats.forEach((stat) => {
        str += `, ${stat[0]}:${stat[1]}`;
    });

    str += ` rank: ${rank}`;

    return str;
}

function IndividualItem({ name, gold, stats, rank, img }) {
    return (
        <div className="item">
            {/* <p>{generateString(name, gold, stats, rank)} </p> */}
            <img src={img} />
        </div>
    );
}

export default IndividualItem;