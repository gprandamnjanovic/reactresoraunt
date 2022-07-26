//  Your web app's Firebase configuration
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyBcljI3s3JPbNLpYlcOomvCKxENIvlMwWw',
  authDomain: 'restorauntapp.firebaseapp.com',
  databaseURL: 'https://restorauntapp-default-rtdb.firebaseio.com',
  projectId: 'restorauntapp',
  storageBucket: 'restorauntapp.appspot.com',
  messagingSenderId: '496877811783',
  appId: '1:496877811783:web:b531fc4abe4607d5741962',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
