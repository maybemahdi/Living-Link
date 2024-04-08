// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKZikc4HkxF3TKNQ7bPNou8QnYViOvGbE",
  authDomain: "living-link-4f5d5.firebaseapp.com",
  projectId: "living-link-4f5d5",
  storageBucket: "living-link-4f5d5.appspot.com",
  messagingSenderId: "972957635021",
  appId: "1:972957635021:web:d74969a2b416174a9db484"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)