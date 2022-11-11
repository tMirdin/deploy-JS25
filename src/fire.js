import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDESvTVaT09IcF4srJiOTQOqHLFC7ahiBE",
  authDomain: "js25-online-project.firebaseapp.com",
  projectId: "js25-online-project",
  storageBucket: "js25-online-project.appspot.com",
  messagingSenderId: "469160298954",
  appId: "1:469160298954:web:a48c9188336c3d47352733",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
