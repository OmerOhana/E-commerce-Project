import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDEIIMey58ha3ZUANRMRHQWUbENrzBxdm8",
    authDomain: "e-commerce-db-bf163.firebaseapp.com",
    databaseURL: "https://e-commerce-db-bf163.firebaseio.com",
    projectId: "e-commerce-db-bf163",
    storageBucket: "e-commerce-db-bf163.appspot.com",
    messagingSenderId: "625336503957",
    appId: "1:625336503957:web:66328c380b0416595f559c",
    measurementId: "G-NGLS7VFRWZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;