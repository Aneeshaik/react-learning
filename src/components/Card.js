import {IMG_URL} from "../utils/constants"
import { useContext } from "react"
import UserContext from "../utils/UserContext"
const Card = (props) => {
    const {loggedInUser} = useContext(UserContext)
    const {resData} = props
    // console.log(resData);
    const {name, cuisines, costForTwo, avgRating} = resData?.info
    return (
        <div data-testid="rests" className="card-item w-52 m-4 p-4" style = {{backgroundColor : "#f0f0f0"}}>
            <img className="food-image w-52" alt="Tandoori" src={ IMG_URL + resData.info.cloudinaryImageId}/>
            <h3 className="food-name font-bold">{name}</h3>
            <h5 className="cuisine">{cuisines.join(", ")}</h5>
            <h5 className="food-rating">{costForTwo}</h5>
            <h5 className="food-rating">{avgRating} Star</h5>
            <h5 className="food-user">User: {loggedInUser}</h5>
        </div>
    )
}

//higher order compponents
export const withPromotedLabel = (Card) => {
    return (props) => {
        return(
            <div>
                <label>Promoted</label>
                <Card {...props}/>
            </div>
        )
    }
}
export default Card;