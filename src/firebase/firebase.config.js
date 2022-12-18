// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzQ67ZRlX7jZgidHv8SoU0pBICuQoToQY",
    authDomain: "wild-shot.firebaseapp.com",
    projectId: "wild-shot",
    storageBucket: "wild-shot.appspot.com",
    messagingSenderId: "735909479668",
    appId: "1:735909479668:web:332c5e02027482fd618aa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;