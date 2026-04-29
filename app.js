import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { 
  getFirestore, 
  doc, 
  setDoc 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* 🔥 YOUR FIREBASE CONFIG (READY) */
const firebaseConfig = {
  apiKey: "AIzaSyAcElCId4770Q7wV70WfmG8m0CTF__KJbY",
  authDomain: "nicks-design-hube.firebaseapp.com",
  projectId: "nicks-design-hube",
  storageBucket: "nicks-design-hube.firebasestorage.app",
  messagingSenderId: "361289302201",
  appId: "1:361289302201:web:e238156e92777c39e5db68"
};

/* INIT FIREBASE */
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

/* ---------------- SIGNUP ---------------- */
window.signup = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", userCred.user.uid), {
      email,
      role
    });

    alert("Signup Successful ✔");
  } catch (error) {
    alert(error.message);
  }
};

/* ---------------- LOGIN ---------------- */
window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login Successful ✔");
  } catch (error) {
    alert(error.message);
  }
};

/* ---------------- LOGOUT ---------------- */
window.logout = function () {
  signOut(auth);
};
