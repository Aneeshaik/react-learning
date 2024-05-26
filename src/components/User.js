import { useEffect, useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(3);
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("functional timer");
        }, 1000);
        return() => {
            clearInterval(timer); // to stop timer when we move to other page.
        }
    })
    return(
        <div className="user">
            <h3>Count : {count}</h3>
            <h3>Count : {count2}</h3>
            <h3>Name: {props.name}</h3>
            <h4>Mangalore</h4>
            <h4>aneesahmad@gmail.com</h4>
        </div>
    )
}
export default User;