import {LOGO_URL} from "../utils/constants"
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
const Head = () => {
    const [loginBtn, setLoginBtn] = useState("LogIn");
    const onlineStatus = useOnlineStatus();
    useEffect(() => {
        console.log("Use effect called");
    }, [])
    return (
        <div className="header">
        <div className="logo">
            <img className="main-logo" alt="logo" src = {LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    {onlineStatus ? "Online ✅" : "Offline ❌"}
                </li>

                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About Us</Link></li>
                <li><Link to = "/contact">Contact Us</Link></li>
                <li><Link to = "/grocery">Grocery Items</Link></li>
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