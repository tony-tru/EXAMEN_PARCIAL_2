
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCC_kiTVR9REaosdcwnjc8ATdvGmvUybzg",
  authDomain: "app-web-heroes.firebaseapp.com",
  projectId: "app-web-heroes",
  storageBucket: "app-web-heroes.appspot.com",
  messagingSenderId: "1086029421640",
  appId: "1:1086029421640:web:88136de29b3ebce0f48c7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)