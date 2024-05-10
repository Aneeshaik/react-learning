import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import Head from "./components/Header"
import Body from "./components/Body"

const AppComponent = () => {
    return (
        <div>
            <Head/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent />)

//react is a library which can be used in any portion of website independently and can use as framework and create large applications 