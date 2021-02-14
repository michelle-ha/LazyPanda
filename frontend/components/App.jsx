import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import SignIn from "./greeting/signin"
import PostFormContainer from "./post/post_form_container"
import {ProtectedRoute } from '../util/route_util';
import PostShowContainer from './post/post_show_container'

class App extends React.Component {
  render() {

    return (
        <Switch>
         <Route exact path="/" component={SignIn } />
         <ProtectedRoute exact path="/add-new-post" component={PostFormContainer} />
         <Route exact path="/:postId" component={PostShowContainer} />
         <Route render={() => (<Redirect to="/" />)}/>
        </Switch>
    )
  }

}

export default App;

