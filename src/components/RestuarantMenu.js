import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestmenu from "../utils/useRestmenu";

const RestuarantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestmenu(resId);
    // console.log(resInfo);
    if(resInfo === null) return <Shimmer />
    const resCards = resInfo?.data?.cards[2]?.card?.card?.info;
    const itemInfo = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0].itemCards;
    // console.log(resCards);
    // console.log(itemInfo);
    return (
        <div>
            <h1>{resCards.name}</h1>
            <p>{resCards.cuisines} - {resCards.costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
            {itemInfo.map((item) => (
                <li key={item.card.info.id}>{item.card.info.name}</li>
            ))}
            </ul>
        </div>
    )
}
export default RestuarantMenu;