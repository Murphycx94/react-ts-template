import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import RouteControl from './views/control';
import RouteRoot from './views/root';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Route path="/" component={RouteRoot} exact/>
        <Route path="/control-19941212" component={RouteControl}/>
      </Router>
    );
  }
}

export default App;
