import * as firebase from "firebase";

export const DB_CONFIG = {
    apiKey: "AIzaSyBmz6zQuFKbpTawmBy_KiKigIgQvAZlc7A",
    authDomain: "argument-react.firebaseapp.com",
    databaseURL: "https://argument-react.firebaseio.com",
    projectId: "argument-react",
    storageBucket: "argument-react.appspot.com",
    messagingSenderId: "384412958091"
  };

firebase.initializeApp(DB_CONFIG);

export default firebase;
