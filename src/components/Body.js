import Card from "./Card"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listItems, setListItems] = useState([]);
    useEffect(()=>{
        console.log("Effect rendered");
        fetchData();
    }, [])
    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // console.log(data);
        const jsonData = await data.json();
        // console.log(jsonData);
        setListItems(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if(listItems.length === 0){
        return <Shimmer />
    }
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
            {console.log(listItems.length)}
            <div className="card-container">
                {listItems.map((rest) => (
                    <Card key={rest.info.id} resData = {rest}/>
                ))}
            </div>
        </div>
    )
}
export default Body;