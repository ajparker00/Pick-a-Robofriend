import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import 'tachyons';
import { searchRobots } from './reducers';

const store = createStore(searchRobots);

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App store={store} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
