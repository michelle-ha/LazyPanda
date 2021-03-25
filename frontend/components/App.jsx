import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import SignIn from "./greeting/signin"
import PostFormContainer from "./post/post_form_container"
import {ProtectedRoute } from '../util/route_util.jsx';
import PostShowContainer from './post/post_show_container'
import PostEditContainer from './post/post_edit_form_container'
import UserEditContainer from "./user/user_edit_container"

class App extends React.Component {
  render() {

    return (
        <Switch>
          <Route exact path="/" component={SignIn } />
          <ProtectedRoute exact path="/add-new-post" component={PostFormContainer} />
          <Route exact path="/:postId" component={PostShowContainer} />
          <ProtectedRoute exact path="/:postId/edit" component={PostEditContainer} />
          <ProtectedRoute exact path="/:userId/edit" component={UserEditContainer} />
          <Route render={() => (<Redirect to="/" />)}/>
        </Switch>
    )
  }
}

export default App;

