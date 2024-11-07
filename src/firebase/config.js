
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDxkBzzMnSj5OaM3fp7IZTAu2I9lgHncQM",
    authDomain: "tomishop-88054.firebaseapp.com",
    projectId: "tomishop-88054",
    storageBucket: "tomishop-88054.firebasestorage.app",
    messagingSenderId: "512276457907",
    appId: "1:512276457907:web:f7e60ae90f1062b57043c6"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);