import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOqgswHUlQ9tvGI-OWAqbbjSNe4Zd6QCI",
  authDomain: "emowall-df43f.firebaseapp.com",
  projectId: "emowall-df43f",
  storageBucket: "emowall-df43f.appspot.com",
  messagingSenderId: "342776216511",
  appId: "1:342776216511:web:a8df7a0b200d1333fa7f0a",
  measurementId: "G-NYVBS6RHYZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;