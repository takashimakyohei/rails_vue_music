import firebase from "firebase"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuv3Gus1IO2711zmvasz8A_nPa_oUMZhY",
  authDomain: "auth-test2-a03ee.firebaseapp.com",
  databaseURL: "https://auth-test2-a03ee.firebaseio.com",
  projectId: "auth-test2-a03ee",
  storageBucket: "auth-test2-a03ee.appspot.com",
  messagingSenderId: "416663882892",
  appId: "1:416663882892:web:16efd82f64635106a8bfa9",
  measurementId: "G-Z2GT7S3S47"
};
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase