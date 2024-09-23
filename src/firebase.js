import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAngDgiCAtbiPxhfD3WZ8SHzTpHKpedCE",
    authDomain: "asset-monitoring-d3183.firebaseapp.com",
    databaseURL: "https://asset-monitoring-d3183-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "asset-monitoring-d3183",
    storageBucket: "asset-monitoring-d3183.appspot.com",
    messagingSenderId: "816544330466",
    appId: "1:816544330466:web:b86aeffa710e919096a4bb",
    measurementId: "G-ELEQ3VWMNM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = getMessaging(app);