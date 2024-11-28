// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 
import {getAuth} from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyBDC29v_3fisi3u83iVkuxn591GZC7wA8Y",
  authDomain: "yummyfood-d4ba0.firebaseapp.com",
  projectId: "yummyfood-d4ba0",
  storageBucket: "yummyfood-d4ba0.firebasestorage.app",
  messagingSenderId: "1050878479544",
  appId: "1:1050878479544:web:74b5f8ed682a96c67fb84d"
};

 
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export{app,auth}