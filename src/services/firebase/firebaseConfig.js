import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
//  const firebaseConfig = {
 // apiKey: "AIzaSyD2MP41rGU9W4B3eKm4ku1z_yJicCm-y78",
 // authDomain: "ecommerce-6038c.firebaseapp.com",
 // projectId: "ecommerce-6038c",
 // storageBucket: "ecommerce-6038c.appspot.com",
 // messagingSenderId: "690766549560",
 // appId: "1:690766549560:web:4f9ab8272cc24bee4ecccd"
//  };


const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


