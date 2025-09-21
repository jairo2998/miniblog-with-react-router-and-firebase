import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDETcu3nhwVoqNXd0Vji2O_4aNqECjZu5w",
  authDomain: "miniblog-8f6c8.firebaseapp.com",
  projectId: "miniblog-8f6c8",
  storageBucket: "miniblog-8f6c8.firebasestorage.app",
  messagingSenderId: "322308501142",
  appId: "1:322308501142:web:5e9d11a934c714c1f1dcb7"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };