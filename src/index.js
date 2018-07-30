import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './createStore';


const store = createStore();

console.log(store.getState());


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
