import React, { Component } from "react"; 

import {NavLink} from "react-router-dom";

import Lock from "../img/lock.svg";
import {Wrapper, FormWrapper, LockLogo, P, Img, H2, Input, RememberWrapper, Label, Button, Navigation, Names } from "./styles"

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
          <Wrapper>
          <FormWrapper>  
         <LockLogo><Img src={Lock} alt="lock-icon"/></LockLogo> 
         <H2>Sign up</H2>
            <form> 
            <Names>
            <Input   
                  type="text"   
                  placeholder="First Name*"
                  name="firstName"
                  onChange={this.onChangeHandler} />  
                  <Input
                  type="text"   
                  placeholder="Last Name*"
                  name="lastName"
                  onChange={this.onChangeHandler} />    
              {console.log(this.state.lastName)}
              {console.log(this.state.firstName)}
            </Names>
            <Input  
                  type="text"   
                  placeholder="Email Address*"
                  name="email"
                  onChange={this.onChangeHandler} />  
                  {console.log(this.state.email)}
                  <Input
                  type="text"   
                  placeholder="Password*" 
                  className="bottom-input"
                  name="password" 
                  onChange={this.onChangeHandler} />  
                   {console.log(this.state.password)}
                   <RememberWrapper > 
                   <Label for="remember"><P>I want to receive information, marketing</P> <P>promotions and updates via email</P> </Label>
                   <Input id="remember" className="remember" 
                    type="checkbox"  
                    name="remember"  
                    onChange={this.onChangeHandler}  
                />  
                   {console.log(this.state.remember)}
                   </RememberWrapper>
            </form>   
            <Button>Sign up</Button>
            <Navigation>
            <NavLink  to={"/signin"}>Allready have an account? Sign in</NavLink>
            </Navigation>
         </FormWrapper>
         </Wrapper>  
        );  
        }
}  
  
export default FormSignUp; 