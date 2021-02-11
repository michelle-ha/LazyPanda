import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import SignIn from "./greeting/signin"


class App extends React.Component {
  render() {

    return (
        <Switch>
         <Route exact path="/" component={SignIn } />
         <Route render={() => <Redirect to="/"/>}/>
        </Switch>
    )
  }

}

export default App;

