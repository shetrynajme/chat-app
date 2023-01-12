import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAan2CU8sXcRm0YOVDIeq3l4lMQo6dAXpg",
    authDomain: "chat-app-217a1.firebaseapp.com",
    projectId: "chat-app-217a1",
    storageBucket: "chat-app-217a1.appspot.com",
    messagingSenderId: "588437484644",
    appId: "1:588437484644:web:33ec7afc0335d6c365db71",
    measurementId: "G-11RH8C7XFP"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
