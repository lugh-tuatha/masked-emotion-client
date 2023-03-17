import React, { Component } from 'react'
import App from '../../App'

export default class UserDetails extends Component {
  constructor(props){
    super(props)
    this.state={
      userData: "",
      admin: false,
    }
  }

  setAdmin = (admin) => {
    this.setState({ admin });
  }

  componentDidMount(){
    fetch("http://localhost:5000/userData",{
      method: "POST",
      crossDomain: true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        token:window.localStorage.getItem("token"),
      }),
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userData")
        this.setState({ userData: data.data })
        if(data.data.userType === "Admin"){
          this.setAdmin(true);
        }

      })
  }

  render() {
    const {  admin } = this.state;
    return (
      admin ? <h1>Welcome Admin</h1> : <App />
    )
  }
}