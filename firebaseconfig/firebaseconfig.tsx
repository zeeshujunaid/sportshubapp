import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAdZHDX_HI0iPDDdMt1ZW8M46oI1Xk4Kb8",
    authDomain: "mobile-chat-app-d3723.firebaseapp.com",
    projectId: "mobile-chat-app-d3723",
    storageBucket: "mobile-chat-app-d3723.appspot.com",
    messagingSenderId: "393309941903",
    appId: "1:393309941903:web:fd5d4f51fd8ff97f2380fa"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


const db = getFirestore(app);


export { auth, db };
