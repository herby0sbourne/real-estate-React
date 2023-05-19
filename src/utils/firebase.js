// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCJlfot39UqPknm4Ql4WAEqt7Of8YlXsrM',
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

export const updateUserProfile = async (name) => {
  if (auth.currentUser.displayName !== name) {
    //update displayName in firebase auth
    await updateProfile(auth.currentUser, { displayName: name });

    // update name in the firestore database
    const docRef = doc(db, 'users', auth.currentUser.uid);
    await updateDoc(docRef, { name: name });
  }
};

export const createListing = async (property = {}) => {
  const docRef = await addDoc(collection(db, 'listings'), {
    userId: auth.currentUser.uid,
    ...property,
  });
  return docRef;
};

export const userListing = async () => {
  const listingRef = collection(db, 'listings');

  const q = query(
    listingRef,
    where('userId', '==', auth.currentUser.uid),
    orderBy('createdAt', 'desc')
  );

  const listings = [];

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    listings.push({ id: doc.id, ...doc.data() });
  });

  return listings;
};

export const deleteListing = async (id) => {
  await deleteDoc(doc(db, 'listings', id));
};

export const imageUpload = (file, progressCallback) => {
  return new Promise((resolve, reject) => {
    const fileName = `${auth.currentUser.uid}-${Date.now()}`;
    const storage = getStorage();
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        progressCallback(progress);
      },
      (error) => {
        // Handle unsuccessful uploads
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          progressCallback(100);
          resolve(downloadURL);
        });
      }
    );
  });
};

// get user Promise Version
export const getAuthState = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        resolve(user);
        unsubscribe();
      },
      (error) => {
        reject(error);
        unsubscribe();
      }
    );
  });
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// get user CallBack Version
export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback);

const googleProvider = new GoogleAuthProvider();

export const signUserOut = async () => await signOut(auth);

export const signUpWithGooglePopup = () => signInWithPopup(auth, googleProvider);
