import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA0teY3sgZAY7seU5Dyvn-f8YNYik8LB9M",
  authDomain: "haud-test-93276.firebaseapp.com",
  databaseURL: "https://haud-test-93276.firebaseio.com",
  projectId: "haud-test-93276",
  storageBucket: "haud-test-93276.appspot.com",
  messagingSenderId: "965618878506",
  appId: "1:965618878506:web:a357d3a50f4c96204ddb53"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase