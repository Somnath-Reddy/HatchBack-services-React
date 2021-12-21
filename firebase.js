// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBLDncTiJnUGUWySh1mCwakofrdITaXqI0',
  authDomain: 'hatchback-services.firebaseapp.com',
  projectId: 'hatchback-services',
  storageBucket: 'hatchback-services.appspot.com',
  messagingSenderId: '944407955050',
  appId: '1:944407955050:web:779cd217839ba7d4e26c13',
  measurementId: 'G-2RSFKYBD96',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
