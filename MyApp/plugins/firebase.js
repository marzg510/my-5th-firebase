/* eslint-disable */
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/firestore'
// import { firebaseConfig } from './firebaseProd'
// import { firebaseConfig } from './firebaseDev'
const firebaseConfig = {
  apiKey: "AIzaSyA7yUki_N0wMdGARmNGLo7FNUC_vJBCCbE",
  authDomain: "my-5th-firebase.firebaseapp.com",
  projectId: "my-5th-firebase",
  storageBucket: "my-5th-firebase.appspot.com",
  messagingSenderId: "422446364504",
  appId: "1:422446364504:web:1f6ae22c8417b3f5c8d72d",
  measurementId: "G-Z2KZVDTWCF"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
}
const db = firebase.firestore()

export const authProviders = {
  // 使うものだけ定義しておきましょう
  // Email: firebase.auth.EmailAuthProvider.PROVIDER_ID,
  Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID
  // Facebook: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  // Twitter: firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  // Github: firebase.auth.GithubAuthProvider.PROVIDER_ID
}
export default firebase
export { db }

