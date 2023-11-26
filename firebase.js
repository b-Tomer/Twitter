// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { env } from "./next.config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "twitter-next-ca088.firebaseapp.com",
    projectId: "twitter-next-ca088",
    storageBucket: "twitter-next-ca088.appspot.com",
    messagingSenderId: "427063642984",
    appId: "1:427063642984:web:c0996aa37f4f23d15364dd",
    measurementId: "G-MYJ5YG0R89"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const storage = getStorage(app)
export { app, db, storage }