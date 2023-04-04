import React, { Component } from 'react'

import App from '../../App'
import Dashboard from '../../pages/Dashboard'

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
    fetch("https://emowall-backend.onrender.com/userData",{
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
      admin ? <Dashboard /> : <App />
    )
  }
}