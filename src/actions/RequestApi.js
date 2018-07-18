import firebase from "../config/config";

export const RequestApi = () => {
  return (dispatch) => {
    console.log("REQUEST API");
    const database = firebase.database();
    const squabbles = database.ref().child('argues');

    squabbles.on('value', (snapshot) => {
      return console.log(snapshot.val());
    })
    }
}
