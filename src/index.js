import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './App';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';

//Installed logger middleware to help debug our code
const logger = createLogger();

//Combining reducers
const rootReducer = combineReducers({ searchRobots, requestRobots });

//Created Redux store and the Provider component that passes down the store to the components
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
