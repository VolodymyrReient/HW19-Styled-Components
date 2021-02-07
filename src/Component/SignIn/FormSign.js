import React, { Component } from "react";
import {NavLink} from "react-router-dom";

import Lock from "../img/lock.svg";
import {Img, H2, Input, RememberWrapper, Label, Wrapper, FormWrapper, LockLogo, Button, NavWrapper} from "./styles"

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
          <Wrapper>
          <FormWrapper>  
         <LockLogo><Img src={Lock} alt="lock-icon"/></LockLogo> 
         <H2>Sign in</H2>
            <form>   
              <Input  
                  type="text"   
                  placeholder="Email Address*"
                  name="email"
                  onChange={this.onChangeHandler} />  
                  {console.log(this.state.email)}
                  <Input  
                  type="text"   
                  placeholder="Password*" 
                  name="password"
                  className="bottom-input"
                  onChange={this.onChangeHandler} />  
                   {console.log(this.state.password)}
                   <RememberWrapper> 
                   <Label for="remember">Remember me</Label>
                   <Input className="remember" id="remember"
                    type="checkbox"  
                    name="remember"  
                    onChange={this.onChangeHandler}  
                />  
                   {console.log(this.state.remember)}
                   </RememberWrapper>
            </form>   
            <Button>Sign in</Button>
            <NavWrapper>
            <NavLink  to={"/forgot"}>Forgot password?</NavLink>
            <NavLink  to={"/signup"}>Don't have an account? Sign Up</NavLink>
            </NavWrapper>
         </FormWrapper>
         </Wrapper>  
        );  
        }
}  
  
export default FormSign; 