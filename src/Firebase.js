// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBT3it-mDhORoU0dhNxbpX_fXldsJOHJ5k",
    authDomain: "jobapplicationtracker-24b35.firebaseapp.com",
    databaseURL: "https://jobapplicationtracker-24b35-default-rtdb.firebaseio.com",
    projectId: "jobapplicationtracker-24b35",
    storageBucket: "jobapplicationtracker-24b35.appspot.com",
    messagingSenderId: "886728996106",
    appId: "1:886728996106:web:35c5875601d8b183d5f6f3",
    measurementId: "G-3L6F7PLHG3"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);