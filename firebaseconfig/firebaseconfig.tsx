import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdZHDX_HI0iPDDdMt1ZW8M46oI1Xk4Kb8",
    authDomain: "mobile-chat-app-d3723.firebaseapp.com",
    projectId: "mobile-chat-app-d3723",
    storageBucket: "mobile-chat-app-d3723.appspot.com",
    messagingSenderId: "393309941903",
    appId: "1:393309941903:web:fd5d4f51fd8ff97f2380fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Set auth language (optional)
// auth.languageCode = 'en';

// const provider = new GoogleAuthProvider();

// const signInWithGoogle = async () => {
//     try {
//         const result = await signInWithPopup(auth, provider);
//         // This gives you a Google Access Token. You can use it to access Google APIs.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;

//         // The signed-in user info
//         const user = result.user;
//         console.log("User signed in: ", user);
//         // You can save user info like the UID, email, etc. here
//         console.log("User ID: ", user.uid);
//     } catch (error) {
//         // Handle Errors here
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.customData?.email;
//         const credential = GoogleAuthProvider.credentialFromError(error);

//         console.error("Error during sign-in: ", errorMessage);
//     }
// };

export { auth, db };
