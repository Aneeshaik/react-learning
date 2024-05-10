import {LOGO_URL} from "../utils/constants"
const Head = () => {
    return (
        <div className="header">
        <div className="logo">
            <img className="main-logo" alt="logo" src = {LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>   
        </div>
    )
}
export default Head