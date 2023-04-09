// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCxD2ztG_C7NRgouS68YaXRxXvUP87ZS6U',
  authDomain: 'real-estate-3de9f.firebaseapp.com',
  projectId: 'real-estate-3de9f',
  storageBucket: 'real-estate-3de9f.appspot.com',
  messagingSenderId: '1075925641939',
  appId: '1:1075925641939:web:e98c1d7a43f802b5a04226',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export const db = getFirestore();

export const signUpUserWithEmailAndPassword = async (name, email, password) => {
  if (!email || !password) return;
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  updateProfile(auth.currentUser, { displayName: name });
  return userCredential;
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if ((!email, !password)) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const resetPassword = async (email) => {
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for
    // this URL must be whitelisted in the Firebase Console.
    url: 'http://127.0.0.1:5173/',
    // This must be true for email link sign-in.
  };
  const info = await sendPasswordResetEmail(auth, email, actionCodeSettings);
  console.log(info);
  // await confirmPasswordReset('user@example.com', code);
};

export const addUserToDatabase = async (userAuth, additionalData = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        name: displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message);
      console.log(error);
    }
  }

  return userDocRef;
};

const googleProvider = new GoogleAuthProvider();

export const signUpWithGooglePopup = () => signInWithPopup(auth, googleProvider);
