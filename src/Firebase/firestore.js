import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCI7CQhW3qJH00TcnLw0JAETTExljqqaqQ",
    authDomain: "skinscsgoapp.firebaseapp.com",
    projectId: "skinscsgoapp",
    storageBucket: "skinscsgoapp.appspot.com",
    messagingSenderId: "700197040592",
    appId: "1:700197040592:web:3bb2c241004e873f8589d5"
  };
 
  initializeApp(firebaseConfig);
  
  export const db = getFirestore(app);
