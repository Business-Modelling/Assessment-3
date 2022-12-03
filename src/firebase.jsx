import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUd3ZYrD9kwihuY8UEpPbRV4eT7jW2Bas",
  authDomain: "assessment-d19b6.firebaseapp.com",
  projectId: "assessment-d19b6",
  storageBucket: "assessment-d19b6.appspot.com",
  messagingSenderId: "629454823844",
  appId: "1:629454823844:web:9c002cfa94d30d81e9a131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);