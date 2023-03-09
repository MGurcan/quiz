




import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyC0QiINzKbUQft4XGsSUZ5WgHrKnI2UYKQ",
    authDomain: "quiz-app-9caf1.firebaseapp.com",
    projectId: "quiz-app-9caf1",
    storageBucket: "quiz-app-9caf1.appspot.com",
    messagingSenderId: "700084987413",
    appId: "1:700084987413:web:be8546eac80846d596101c",
    measurementId: "G-5S99TJBEY4"
  };

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)