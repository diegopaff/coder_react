import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

///////////////////////////////////FIREBASEE//////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIB3XDdlFGNQMbWGdHeg5j4cLVMzWPmho",
  authDomain: "online-store-coder.firebaseapp.com",
  projectId: "online-store-coder",
  storageBucket: "online-store-coder.appspot.com",
  messagingSenderId: "609981289786",
  appId: "1:609981289786:web:cfdbbafee25d96d977ac03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
///////////////////////////////////////////////////////////////////////

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
