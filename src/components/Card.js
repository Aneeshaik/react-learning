import {IMG_URL} from "../utils/constants"
const Card = (props) => {
    const {resData} = props
    const {name, cuisines, costForTwo, avgRating} = resData?.info
    return (
        <div className="card-item" style = {{backgroundColor : "#f0f0f0"}}>
            <img className="food-image" alt="Tandoori" src={ IMG_URL + resData.info.cloudinaryImageId}/>
            <h3 className="food-name">{name}</h3>
            <h5 className="cuisine">{cuisines.join(", ")}</h5>
            <h5 className="food-rating">{costForTwo}</h5>
            <h5 className="food-rating">{avgRating} Star</h5>
        </div>
    )
}
export default Card;