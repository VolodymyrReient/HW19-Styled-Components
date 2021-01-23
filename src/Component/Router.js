import FormSign from "./SignIn/FormSign";
import FormSignUp from "./SignUp/FormSignUp";
import Forgot from "./ForgotPassword";
import {BrowserRouter as Router, Route}  from "react-router-dom";



const Navigations = () => {
    return (
        <Router>
        <Route exact path="/">
            <FormSign />
        </Route>
        <Route exact path={"/signin"}>
            <FormSign />
          </Route>
          <Route exact path={"/signup"}>
            <FormSignUp/>
          </Route>
          <Route exact path={"/forgot"}>
            <Forgot/>
          </Route>
       
        </Router>
    )
}
export default Navigations;