import {IMG_URL} from "../utils/constants"
const Card = (props) => {
    const {resData} = props
    const {name, cuisines, costForTwo, avgRating} = resData?.info
    return (
        <div className="card-item w-52 m-4 p-4" style = {{backgroundColor : "#f0f0f0"}}>
            <img className="food-image w-52" alt="Tandoori" src={ IMG_URL + resData.info.cloudinaryImageId}/>
            <h3 className="food-name font-bold">{name}</h3>
            <h5 className="cuisine">{cuisines.join(", ")}</h5>
            <h5 className="food-rating">{costForTwo}</h5>
            <h5 className="food-rating">{avgRating} Star</h5>
        </div>
    )
}
export default Card;