import * as firebase from "firebase";

export const DB_CONFIG = {
  apiKey: "AIzaSyDuHDXzwj0jBTgjRhWDmyH7rZYxH2-zF2Y",
  authDomain: "squabbles-123.firebaseapp.com",
  databaseURL: "https://squabbles-123.firebaseio.com",
  projectId: "squabbles-123",
  storageBucket: "squabbles-123.appspot.com",
  messagingSenderId: "821120054358"
};

firebase.initializeApp(DB_CONFIG);

export default firebase;
