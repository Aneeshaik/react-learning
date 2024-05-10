import Card from "./Card"
import resList from "../utils/resData"
import { useState } from "react";
const Body = () => {
    const [listItems, setListItems] = useState(resList);
    return (
        <div className="body">
            <div className="search" style={{padding: "10px"}}>Search</div>
            <div className="filter-items">
                <button type="button" className="filter-res" onClick={() => {
                    const filteredItems = listItems.filter(
                        (res) => res.info.avgRating >= 4
                    )
                    setListItems(filteredItems);
                    console.log(filteredItems);
                }}>Top Rated Restuarents</button>
            </div>
            <div className="card-container">
                {listItems.map((rest) => (
                    <Card key={rest.info.id} resData = {rest}/>
                ))}
            </div>
        </div>
    )
}
export default Body;