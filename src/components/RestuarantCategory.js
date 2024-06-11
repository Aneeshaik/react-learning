import { useState } from "react";
import ItemList from "./ItemList";
const RestuarantCategory = ({data}) => {
    // console.log(data);
    const [itemsView, setItemsView] = useState(false);
    const handleClick = () => {
        setItemsView(!itemsView);
    }
    return(
        <div className="">
            {/* header */}
            <div className="w-6/12 cursor-pointer shadow-xl rounded-md my-2 mx-auto bg-gray-100 p-4" onClick={handleClick}>
            <div className="flex justify-between">
                <span className="font-bold">{data?.title} ({data?.itemCards.length})</span>
                <span className="">⬇️</span>
            </div>
              { itemsView && <ItemList item={data} /> }
            </div>
            {/* body */}
        </div>
    )
}
export default RestuarantCategory;