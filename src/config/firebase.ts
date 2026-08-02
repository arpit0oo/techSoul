/**
 * Firebase Configuration
 *
 * Replace the placeholder values below with your real Firebase project credentials.
 * Never commit real credentials to source control.
 *
 * Environment variables must be prefixed with VITE_ to be exposed to the client.
 * Create a .env.local file in the project root with these values.
 *
 * .env.local example:
 *   VITE_FIREBASE_API_KEY=your_api_key
 *   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
 *   VITE_FIREBASE_PROJECT_ID=your_project_id
 *   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
 *   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
 *   VITE_FIREBASE_APP_ID=your_app_id
 */

import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getFirestore, type Firestore } from 'firebase/firestore'
import { getAuth, type Auth } from 'firebase/auth'
import { getStorage, type FirebaseStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
}

// Initialize Firebase app singleton
const app: FirebaseApp = initializeApp(firebaseConfig)

// Export service instances
export const db: Firestore       = getFirestore(app)
export const auth: Auth          = getAuth(app)
export const storage: FirebaseStorage = getStorage(app)

export default app
