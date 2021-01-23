import React, { Component } from "react"; 
import Lock from "../img/lock.svg";
import "./form-sign.css";

import {NavLink} from "react-router-dom";

class FormSign extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
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
         <h2>Sign in</h2>
            <form>   
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
                   <label>Remember me</label>
                   
                   <input className="remember" 
                    type="checkbox"  
                    name="remember"  
                    onChange={this.onChangeHandler}  
                />  
                   {console.log(this.state.remember)}
                   </div>
            </form>   
            <button>Sign in</button>
            <div className="nav-wrapper">
            <NavLink  to={"/forgot"}>Forgot password?</NavLink>
            <NavLink  to={"/signup"}>Don't have an account? Sign Up</NavLink>
            </div>
         </div>
         </div>  
        );  
        }
}  
  
export default FormSign; 