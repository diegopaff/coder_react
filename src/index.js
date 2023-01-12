import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

///////////////////////////// FIREBASEE //////////////////////////
import { initializeApp } from "firebase/app";

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

reportWebVitals();
