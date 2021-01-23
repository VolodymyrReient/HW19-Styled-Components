import React, { Component } from "react"; 
import Lock from "../img/lock.svg";
import "./form-sign-up.css";

import {NavLink} from "react-router-dom";

class FormSignUp extends Component {  
    constructor(props) {  
        super(props);  
        this.state = { 
            firstName: "", 
            lastName: "",
            email: "",
            password: "",
            remember: "off",
        };  
        this.onChangeHandler = this.onChangeHandler.bind(this);  
  }  
    onChangeHandler(e) {  
        this.setState({  
         [e.target.name]: e.target.value  
         });  
     }  
      render() {  
        return (  
          <div className="wrapper">
          <div className="form">  
         <div className="lock-logo"><img src={Lock} alt="lock-icon"/></div> 
         <h2>Sign up</h2>
            <form> 
            <div className="names">
            <input   
                  type="text"   
                  placeholder="First Name*"
                  name="firstName"
                  onChange={this.onChangeHandler} />  
                  <input   
                  type="text"   
                  placeholder="Last Name*"
                  name="lastName"
                  onChange={this.onChangeHandler} />    
              {console.log(this.state.lastName)}
              {console.log(this.state.firstName)}
            </div>
            <input   
                  type="text"   
                  placeholder="Email Address*"
                  name="email"
                  onChange={this.onChangeHandler} />  
                  {console.log(this.state.email)}
                  <input   
                  type="text"   
                  placeholder="Password*" 
                  name="password" 
                  onChange={this.onChangeHandler} />  
                   {console.log(this.state.password)}
                   <div className="remember-wrapper"> 
                   <label><p>I want to receive information, marketing</p> <p>promotions and updates via email</p> </label>
                   
                   <input className="remember" 
                    type="checkbox"  
                    name="remember"  
                    onChange={this.onChangeHandler}  
                />  
                   {console.log(this.state.remember)}
                   </div>
            </form>   
            <button>Sign up</button>
            <div className="navigation">
            <NavLink  to={"/signin"}>Allready have an account? Sign in</NavLink>
           
            </div>
         </div>
         </div>  
        );  
        }
}  
  
export default FormSignUp; 