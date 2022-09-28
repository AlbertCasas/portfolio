import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyClufkE4P8V7ANc6nL3CV6FBCPSyy_kCGs",
    authDomain: "portfolio-albertcasas.firebaseapp.com",
    projectId: "portfolio-albertcasas",
    storageBucket: "portfolio-albertcasas.appspot.com",
    messagingSenderId: "541588445274",
    appId: "1:541588445274:web:27a2208e19d8eee629e063"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();