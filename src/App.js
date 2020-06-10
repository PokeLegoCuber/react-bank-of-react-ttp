import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27
    }
  }
  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    return (
      <Router>
        <Switch>
          {/* This was doesn't work cause Route components expect us to pass a "reference" to a component as our component= prop.
          This means we can't pass an already-built component */}
          {/* <Route exact path="/" component={<Home accountBalance={this.state.accountBalance}/>}/> */}
          
          {/* If you need to pass props at the Router level, you must use render */}
          <Route exact path="/" render={HomeComponent}/>
        </Switch>
      </Router>
    );
  }
}

export default App;