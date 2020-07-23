import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB3uGXLZ0F5yPpc5YUuTACz0b4ZoumNwdM",
    authDomain: "ghost-store-chad.firebaseapp.com",
    databaseURL: "https://ghost-store-chad.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;