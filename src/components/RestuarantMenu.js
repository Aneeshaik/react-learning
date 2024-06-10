import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestmenu from "../utils/useRestmenu";
import RestuarantCategory from "./RestuarantCategory";

const RestuarantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestmenu(resId);
    // console.log(resInfo);
    if(resInfo === null) return <Shimmer />
    const resCards = resInfo?.data?.cards[2]?.card?.card?.info;
    const itemInfo = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0].itemCards;
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (cat) => cat.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    console.log(categories);
    // console.log(resCards);
    // console.log(itemInfo);
    return (
        <div className="text-center">
            <h1>{resCards.name}</h1>
            <p>{resCards.cuisines} - {resCards.costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
            {/* {itemInfo.map((item) => (
                <li key={item.card.info.id}>{item.card.info.name}</li>
            ))} */}
            {categories.map((cat) => (
                <div>
                {/* <li className="font-bold">{cat.card?.card?.title}</li> */}
                <li><RestuarantCategory data={cat?.card?.card}/></li>
                </div>
            ))}
            </ul>
        </div>
    )
}
export default RestuarantMenu;