import React, { StrictMode, Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import Head from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
//import Grocery from "./components/Grocery"
import RestuarantMenu from "./components/RestuarantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

const AppComponent = () => {
    return (
        <div>
            <Head/>
            <Outlet/>
        </div>
    )
}
const Grocery = lazy(()=> import("./components/Grocery"));
const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppComponent/>,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={"Loading...."}><Grocery /></Suspense>
            },
            {
                path: '/restuarantmenu/:resId',
                element: <RestuarantMenu />
            }
        ],
        errorElement: <Error />
    },
])
root.render(<RouterProvider router = {appRouter} />)

//react is a library which can be used in any portion of website independently and can use as framework and create large applications 