import Card from "./Card"
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
    const [listItems, setListItems] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const onlineStatus = useOnlineStatus();
    // console.log("Body Rendered");
    useEffect(()=>{
        // console.log("Effect rendered");
        fetchData();
    }, [])
    const {setUserName, loggedInUser} = useContext(UserContext)
    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // console.log(data);
        const jsonData = await data.json();
        // console.log(jsonData);
        setListItems(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if(onlineStatus === false){
        return <h1>You are offline</h1>
    }
    return listItems.length === 0? <Shimmer /> : (
        <div className="body">
            <div className="filter-items">
                <input className="search-box border border-solid border-black rounded-md ml-2" type="search" value={searchValue} onChange={(e) => {
                    setSearchValue(e.target.value);
                }}></input>
                <button className="filtered-search bg-gray-400 rounded-md px-2 py-[2px] m-4" onClick={() => {
                    const filetredSearch = listItems.filter(
                        (rest) => rest.info.name.toLowerCase().includes(searchValue.toLowerCase())
                    )
                    setFilteredList(filetredSearch);
                    // console.log(listItems);
                }}>Search</button>
                {/* {console.log(listItems)} */}
                <button type="button" className="filter-res bg-gray-400 rounded-md px-2 py-[2px]" onClick={() => {
                    const filteredItems = listItems.filter(
                        (res) => res.info.avgRating >= 4.2
                    )
                    setFilteredList(filteredItems);
                    // console.log(filteredList);
                }}>Top Rated Restuarents</button>
                <input className="search-box border border-solid border-black rounded-md ml-2" type="search" value={loggedInUser} onChange={(e)=>{
                    setUserName(e.target.value)
                }}></input>
            </div>
            <div className="card-container flex flex-wrap">
                {/* {console.log(filteredList)} */}
                {filteredList.map((rest) => (
                    <Link to={"/restuarantmenu/" +rest.info.id}  key={rest.info.id}><Card  resData = {rest}/></Link>
                ))}
            </div>
        </div>
    )
}
export default Body;