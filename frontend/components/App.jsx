import React from 'react';
import { Route, Switch} from 'react-router-dom';
import SignIn from "./greeting/signin"
import { Redirect } from 'react-router';


class App extends React.Component {
  render() {

    return (
        <Switch>
         <Route exact path="/" component={SignIn} />
         <Route render={() => <Redirect to="/"/>}/>
        </Switch>
    )
  }

}


export default App;

