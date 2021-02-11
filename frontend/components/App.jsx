import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';
import { Route, Switch, Link} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from "./modal/modal";
import { NavLink } from 'react-router-dom';
import logo from "../../app/assets/images/PngItem_2512217.png"
import NotFound from "./error_messages/not_found"
import SignIn from "./greeting/signin"

class App extends React.Component {
  render() {

    return (
        <Switch>
         <Route exact path="/" component={SignIn} />
         <Route component={NotFound} />
        </Switch>
    )
  }

}


export default App;

