import { FirebaseOptions, initializeApp, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
export const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDMqWtXK1m1gRCii0DZ4xMKB8gvjqL_w3U",
  authDomain: "superfoodvn-73e0d.firebaseapp.com",
  projectId: "superfoodvn-73e0d",
  storageBucket: "superfoodvn-73e0d.appspot.com",
  messagingSenderId: "623263718868",
  appId: "1:623263718868:web:1d174299e89d2bdaec4a41",
  measurementId: "G-J9YZ5ESSNZ",
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};
const app: FirebaseApp = initializeApp(firebaseConfig);
export const authFirebase = getAuth(app);
export default app;
