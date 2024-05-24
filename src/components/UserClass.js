import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
    }
    render(){
        return(
            <div className="user">
            <h3>Name: {this.props.name}</h3>
            <h4>Mangalore</h4>
            <h4>aneesahmad@gmail.com</h4>
        </div>
        )
    }
}
export default UserClass;