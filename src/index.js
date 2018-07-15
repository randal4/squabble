import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reducers from "./reducers";


let store = createStore(reducers);

console.log(store.getState());


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
