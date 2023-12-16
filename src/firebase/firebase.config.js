import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCiz6fuoT0HzO2xdCaw7r93dFZQpOoO87M",
    authDomain: "auth-firebase-context-ta-26d55.firebaseapp.com",
    projectId: "auth-firebase-context-ta-26d55",
    storageBucket: "auth-firebase-context-ta-26d55.appspot.com",
    messagingSenderId: "1019155251116",
    appId: "1:1019155251116:web:ed50a49bc8c598eaad8409"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;