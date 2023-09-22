import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFmZLZk5T5qf2H8IGApmLc7YKhk3RakZ0",
  authDomain: "painel-aeroporto-lmb.firebaseapp.com",
  projectId: "painel-aeroporto-lmb",
  storageBucket: "painel-aeroporto-lmb.appspot.com",
  messagingSenderId: "999830542367",
  appId: "1:999830542367:web:b7402279452cc3ba75dd2a",
  measurementId: "G-89WLG8ZC79"
};

firebase.initializeApp(firebaseConfig);
export const admin = firebase.admin;
export const auth = firebase.auth;
export const Firestore = firebase.firestore();
export const Storage = firebase.storage();