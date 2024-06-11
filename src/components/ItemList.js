const ItemList = ({item}) => {
    return(
        <div className="">
            {item?.itemCards.map((item) => (
                <div key={item?.card?.info?.id} className="border-b-2 pb-1 text-left">
                    <span className="font-semibold">{item?.card?.info?.name}</span>
                    <p>{item?.card?.info?.description}</p>
                </div>
            ))}
        </div>
    )
}
export default ItemList;