//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBFteUMyoFr8R9iC9q54joVLA1DM4p0LPY",
    authDomain: "fir-comp1800-ca6ac.firebaseapp.com",
    projectId: "fir-comp1800-ca6ac",
    storageBucket: "fir-comp1800-ca6ac.appspot.com",
    messagingSenderId: "197343923410",
    appId: "1:197343923410:web:f37be563150101ac4f710b"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();