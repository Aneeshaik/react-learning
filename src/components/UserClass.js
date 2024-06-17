import React from "react"
import UserContext from "../utils/UserContext";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        // console.log(props);
        this.state = {
            userInfo : {
                // name : "",
                // location : ""
            },
            count : 0,
            count2 : 3
        }
        // console.log("Constructor");
    }
    async componentDidMount(){
        const userData = await fetch("https://api.github.com/users/aneeshaik")
        const json = await userData.json();
        this.timer = setInterval(() => {
            // console.log("Timer")
        }, 1000)
        this.setState({
            userInfo : json
        })
        // console.log(json);
    }
    componentWillUnmount(){
        clearInterval(this.timer) // to stop timer when we to other page
    }
    render(){
        // const {count, count2} = this.state;
        // const {name} = this.props;
        const {login, location} = this.state.userInfo
        // console.log("Render");
        return(
            <div className="user">
            {/* <h3>Count : {count}</h3>
            <button onClick={() => {
                this.setState({
                    count : this.state.count + 1
                })
            }}>Click me </button>
            <h3>Count : {count2}</h3> */}
            <h3>Name: {login}</h3>
            <h4>location : {location}</h4>
            <h4>aneesahmad@gmail.com</h4>
            <div>
                <UserContext.Provider>
                    {(data) => console.log(data)}
                </UserContext.Provider>
            </div>
        </div>
        )
    }
}
export default UserClass;