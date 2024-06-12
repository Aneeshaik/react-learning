import { IMG_URL } from "../utils/constants";

const ItemList = ({item}) => {
    return(
        <div className="">
            {item?.itemCards.map((item) => (
                <div key={item?.card?.info?.id} className="border-b-2 pb-1 text-left">
                    <div>
                        <span className="font-semibold">{item?.card?.info?.name}</span>
                    </div>
                    <p>{item?.card?.info?.description}</p>
                    {/* <img className="w-32 rounded-md" alt="food-item" src={IMG_URL + item?.card?.info?.imageId} /> */}
                </div>
            ))}
        </div>
    )
}
export default ItemList;