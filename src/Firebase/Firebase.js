import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage'
// import { auth, storage } from './Firebase';

var firebaseConfig = {
//------------------------ add config here-----------------------

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth();
export var firestore = firebase.firestore();

export var serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp()

export default firebase;

