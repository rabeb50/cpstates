import React, { Component } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./Profile/Profile"
import Button from 'react-bootstrap/Button';
export default class App extends Component {
  state={
    Person :{ fullName:"Ons JABEUR",
    bio:"Ons Jabeur, née le 28 août 1994 à Ksar Hellal, est une joueuse de tennis tunisienne, professionnelle depuis 2012. Elle remporte le tournoi de Roland-Garros 2011 en simple junior. Sur le circuit WTA, elle a atteint deux finales en simple.", 
    imgSrc:"./ProfilePhoto.jpg", 
    profession:"Tennis Player",
    show:true
  } 

  }
  switch=()=>{
    this.setState({
      show:!this.state.show
    })
  }
 
  render() {
    return (
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"5rem"}}>
        <Button style={{width:"10rem",height:"3rem",fontSize:"1.5rem"}}variant="danger" onClick={this.switch}>{this.state.show?"Hide Profle":"Show Profile"}</Button>
        {this.state.show?<Profile Person={this.state.Person}/>:null}
        
        
      </div>
    )
  }
}
