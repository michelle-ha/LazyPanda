import React from 'react';
import { Route, Switch} from 'react-router-dom';
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

