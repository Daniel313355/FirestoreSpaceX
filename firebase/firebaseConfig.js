// firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDV8mRPnFFldImN2-RAiq-niZCfUI0QFNU",
  authDomain: "fir-spacex-455e9.firebaseapp.com",
  projectId: "fir-spacex-455e9",
  storageBucket: "fir-spacex-455e9.appspot.com",
  messagingSenderId: "1055652573541",
  appId: "1:1055652573541:web:89805cd917f723e96ab18c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };