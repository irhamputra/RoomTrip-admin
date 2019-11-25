import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyASZvub05_Uw_PnITBGV5aAnScRpwtGlXk',
    authDomain: 'roomtrip-dev.firebaseapp.com',
    databaseURL: 'https://roomtrip-dev.firebaseio.com',
    projectId: 'roomtrip-dev',
    storageBucket: 'roomtrip-dev.appspot.com',
    messagingSenderId: '983319638912',
    appId: '1:983319638912:web:600cce0bf6f71661c38765'
};

// Initialize Firebase
export const FB = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

export const FireBase = firebase;
export const db = firebase.firestore();
export const storage = firebase.storage();
