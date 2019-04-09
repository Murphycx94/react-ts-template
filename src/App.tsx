import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import configureStore from './store';
import './App.css';

import RouteControl from './views/control';
import RouteRoot from './views/root';

const store = configureStore()

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={RouteRoot} exact/>
          <Route path="/control-19941212" component={RouteControl}/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
