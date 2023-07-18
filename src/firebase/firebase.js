// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhPLeudWrlYPP18ubyj6E40Y5f1ubPG8o",
  authDomain: "skyfitness-9edcd.firebaseapp.com",
  databaseURL:
    "https://skyfitness-9edcd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "skyfitness-9edcd",
  storageBucket: "skyfitness-9edcd.appspot.com",
  messagingSenderId: "144611273888",
  appId: "1:144611273888:web:b05fb622a131940498adc5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
