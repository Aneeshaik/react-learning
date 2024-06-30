import { useState } from "react";
import ItemList from "./ItemList";
const RestuarantCategory = ({data, showItems, setShowItems}) => {
    // console.log(data);
    // const [itemsView, setItemsView] = useState(false);
    const handleClick = () => {
        setShowItems();
    }
    return(
        <div key={data?.title} className="">
            {/* header */}
            <div className="w-6/12 cursor-pointer shadow-xl rounded-md my-2 mx-auto bg-gray-100 p-4" onClick={handleClick}>
            <div className="flex justify-between">
                <span className="font-bold">{data?.title} ({data?.itemCards.length})</span>
                <span className="">⬇️</span>
            </div>
              { showItems && <ItemList items={data?.itemCards} /> }
            </div>
            {/* body */}
        </div>
    )
}
export default RestuarantCategory;