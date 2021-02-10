import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';
import { Route, Switch, Link} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from "./modal/modal";
import { NavLink } from 'react-router-dom';
import logo from "../../app/assets/images/PngItem_2512217.png"

class App extends React.Component {
  render() {
    return(
      <div>
    <Modal />
    <header>
      <h1 className="logo">
        <img src={logo} />
        <NavLink to="/" activeClassName="active">lazypanda</NavLink>
      </h1>
      <GreetingContainer/>
    </header>
    <Switch>
      {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
    </Switch>
  </div>
    )
  }
}

// const App = () => (
//   <div>
//     <Modal />
//     <header>
//       <h1 className="logo">
//         <img src={require('../../app/assets/images/PngItem_2512217.png')}/>
//         <NavLink to="/" activeClassName="active">lazypanda</NavLink>
//       </h1>
//       <GreetingContainer/>
//     </header>
//     <Switch>
//       {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
//       <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
//     </Switch>
//   </div>
// );

export default App;
