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
        <div className="header flex justify-between">
        <div className="logo w-24">
            <img className="main-logo" alt="logo" src = {LOGO_URL} />
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="m-4">
                    {onlineStatus ? "Online ✅" : "Offline ❌"}
                </li>

                <li className="m-4"><Link to = "/">Home</Link></li>
                <li className="m-4"><Link to = "/about">About Us</Link></li>
                <li className="m-4"><Link to = "/contact">Contact Us</Link></li>
                <li className="m-4"><Link to = "/grocery">Grocery Items</Link></li>
                <li className="m-4">Cart</li>
                <button className="login m-4" onClick={() => {
                    loginBtn === "LogIn"? setLoginBtn("LogOut") : setLoginBtn("LogIn");
                }}>{loginBtn}</button>
            </ul>
        </div>   
        </div>
    )
}
export default Head