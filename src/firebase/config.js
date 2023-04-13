import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDf7h6fQvQ4H_9NUj-KEsnvEZp-tWYnj5k",
    authDomain: "todo-9de03.firebaseapp.com",
    projectId: "todo-9de03",
    storageBucket: "todo-9de03.appspot.com",
    messagingSenderId: "943037771886",
    appId: "1:943037771886:web:5bdb295f9c78235128f67f"
  };

  firebase.initializeApp(firebaseConfig);
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  export { projectFirestore, projectAuth }