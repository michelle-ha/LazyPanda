import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import SignIn from "./greeting/signin"
import PostFormContainer from "./post/post_form_container"
import {ProtectedRoute } from '../util/route_util';




class App extends React.Component {
  render() {

    return (
        <Switch>
         <Route exact path="/" component={SignIn } />
         <ProtectedRoute exact path="/add-new-post" component={PostFormContainer} />
         <Route render={() => <Redirect to="/"/>}/>
        </Switch>
    )
  }

}

export default App;

