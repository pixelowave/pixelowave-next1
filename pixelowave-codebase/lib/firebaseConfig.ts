// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // ✅ Add Firestore


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEYivpK5zl4xwImKwAhkVFwUnx4MBSq9A",
  authDomain: "pixelowave-95945.firebaseapp.com",
  projectId: "pixelowave-95945",
  storageBucket: "pixelowave-95945.firebasestorage.app",
  messagingSenderId: "627201205120",
  appId: "1:627201205120:web:d4e1a217489765b0e1d765",
  measurementId: "G-Z1XYDBHLZN"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);  // ✅ Initialize Firestore
const auth = getAuth(app);  // ✅ FIXED: Correctly initialize auth

// ✅ Prevent Firebase Analytics from running on the server
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, db, auth, analytics };  // ✅ Export Firestore