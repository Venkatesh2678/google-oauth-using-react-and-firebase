import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyAslEnKOZDNBJzrD3eg1uFksfJayBpYOtY",
    authDomain: "auth-react-d0460.firebaseapp.com",
    projectId: "auth-react-d0460",
    storageBucket: "auth-react-d0460.appspot.com",
    messagingSenderId: "830128778479",
    appId: "1:830128778479:web:c188a72637b45ddbed3f1a",
    measurementId: "G-68LHQMT4XV",
};
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
export {auth , provider};