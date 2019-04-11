import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getAuth } from './api/user';
import configureStore from './store';
import './App.css';

import RouteControl from './views/control';
import RouteRoot from './views/root';
import RouteOverview from './views/overview'

const store = configureStore()

class App extends React.Component {

  public componentDidMount () {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.setItem('token', 'sdkfsdlf');
      getAuth();
    }
  }
  
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={RouteRoot} exact/>
            <Route path="/control-19941212" component={RouteControl}/>
            <Route path="/overview" component={RouteOverview}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
