import {LOGO_URL} from "../utils/constants"
import { useState } from "react"
const Head = () => {
    const [loginBtn, setLoginBtn] = useState("LogIn");
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
                <button className="login" onClick={() => {
                    loginBtn === "LogIn"? setLoginBtn("LogOut") : setLoginBtn("LogIn");
                }}>{loginBtn}</button>
            </ul>
        </div>   
        </div>
    )
}
export default Head