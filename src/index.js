import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import {applyMiddleware, createStore} from 'redux'
import { BrowserRouter as Router } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { fetchCharacterInfo} from "./actions";
import NetworkService from "./networkService";

const loggerMiddleware = createLogger();
const store = createStore(rootReducer,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
));
NetworkService.setupInterceptors(store);
store.dispatch(fetchCharacterInfo());

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router>
              <App />
          </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
