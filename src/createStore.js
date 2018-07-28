import { applyMiddleware, createStore, compose } from 'redux'
import { reduxFirestore } from 'redux-firestore'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/firestore'
import { fb_config } from './config/config'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

export default function configureStore(initialState, history) {
  const enhancers = [];
  const  middleware = [
      thunk,
      logger
  ]

  firebase.initializeApp(fb_config)

  // Provide timestamp settings to silence warning about deprecation
  firebase.firestore().settings({ 
      timestampsInSnapshots: true, 
  })

  // Dev tools store enhancer
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }

  const createStoreWithMiddleware = compose(
    applyMiddleware(...middleware),
    // Add redux firestore store enhancer
    reduxFirestore(firebase),
    ...enhancers
  )(createStore)

  const store = createStoreWithMiddleware(rootReducer)

  return store
}