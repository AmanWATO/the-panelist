import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { FirebaseApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID!,
};

const app: FirebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

const db = getFirestore(app);

let analytics: ReturnType<typeof getAnalytics> | null = null;

if (typeof window !== "undefined") {
  isSupported().then((yes: boolean): void => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics, db };