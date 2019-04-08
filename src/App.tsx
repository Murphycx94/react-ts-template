import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import RouteRoot from './views/root';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Route path="/" component={RouteRoot} exact={true}/>
      </Router>
    );
  }
}

export default App;
