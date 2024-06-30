import { useDispatch } from "react-redux";
import { addItems } from "./cartSlice";

const ItemList = ({items}) => {
    const dispatch = useDispatch();
    const handleAddItems = (item) => {
        dispatch(addItems(item))
    }
    return(
        <div className="">
            {items?.map((item) => (
                <div key={item?.card?.info?.id} className="border-b-2 pb-1 text-left">
                    <div className="flex justify-between">
                        <span className="font-semibold">{item?.card?.info?.name}</span>
                        <button className="bg-slate-500 rounded-lg p-1 text-white mt-1" onClick={() => handleAddItems(item)}>Add+</button>
                    </div>
                    <p>{item?.card?.info?.description}</p>
                    {/* <img className="w-32 rounded-md" alt="food-item" src={IMG_URL + item?.card?.info?.imageId} /> */}
                </div>
            ))}
        </div>
    )
}
export default ItemList;