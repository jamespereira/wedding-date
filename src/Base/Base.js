import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const app = firebase.initializeApp({
      apiKey: "AIzaSyBkGjvVIj4NC3YgFRMAhmOADo53MZqy4Kc",
    authDomain: "our-wedding-a8bf9.firebaseapp.com",
    databaseURL: "https://our-wedding-a8bf9-default-rtdb.firebaseio.com/",
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;