import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

auth.languageCode = 'en';

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential ? credential.accessToken : null;

        const user = result.user;
        console.log("User signed in: ", user);
        console.log("User ID: ", user.uid);
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email || "Email not available";
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.error("Error during sign-in:");
        console.error(`Code: ${errorCode}`);
        console.error(`Message: ${errorMessage}`);
        console.error(`Email: ${email}`);
        console.error(`Credential: ${credential}`);
    }
};

export { auth, db, signInWithGoogle };
