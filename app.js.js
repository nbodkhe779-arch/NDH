import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, setDoc, getDoc, onSnapshot, query, where } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXX",
  appId: "XXX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.signup = async function(){
  const email = emailInput.value;
  const password = passwordInput.value;
  const role = roleSelect.value;

  const userCred = await createUserWithEmailAndPassword(auth,email,password);
  await setDoc(doc(db,"users",userCred.user.uid),{email,role});
};

window.login = function(){
  signInWithEmailAndPassword(auth,emailInput.value,passwordInput.value);
};

window.logout = function(){ signOut(auth); };

onAuthStateChanged(auth, async (user)=>{
  if(user){
    document.getElementById("authSection").style.display="none";
    document.getElementById("dashboard").classList.remove("hidden");
  }
});
