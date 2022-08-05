import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" 

const firebaseConfig = {
    apiKey: "AIzaSyDV5JZx7X3yORZZRLXOM6cIR69X289nZUw",
    authDomain: "movie-app-81902.firebaseapp.com",
    projectId: "movie-app-81902",
    storageBucket: "movie-app-81902.appspot.com",
    messagingSenderId: "466355809367",
    appId: "1:466355809367:web:e3d0f653adf43953d50712",
    measurementId: "G-KB2E3KSP0Z"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)