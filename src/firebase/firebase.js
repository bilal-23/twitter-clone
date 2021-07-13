import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDWudtdqJBf9w1dqmYTmPmiAjbk5pII-yQ",
    authDomain: "twitter-clone-23.firebaseapp.com",
    projectId: "twitter-clone-23",
    storageBucket: "twitter-clone-23.appspot.com",
    messagingSenderId: "283194457172",
    appId: "1:283194457172:web:094b475f05f24af37741c1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;