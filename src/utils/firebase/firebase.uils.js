import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
 } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCNgtLSIYi0jdcTlao-yoHL_d0dV4NxFdo",
    authDomain: "react-course-crown-db-859b1.firebaseapp.com",
    projectId: "react-course-crown-db-859b1",
    storageBucket: "react-course-crown-db-859b1.appspot.com",
    messagingSenderId: "1049802808971",
    appId: "1:1049802808971:web:c8a1126449a7435d59be8e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (e) {
            console.log(e);
        }
    }

    return userDocRef
}