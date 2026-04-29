import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { 
  getFirestore, 
  doc, 
  setDoc,
  getDoc,
  collection,
  addDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* 🔥 YOUR FIREBASE CONFIG */
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

/* INIT */
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

    alert("Signup Successful!");
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
    alert("Login Successful!");
  } catch (error) {
    alert(error.message);
  }
};

/* ---------------- LOGOUT ---------------- */
window.logout = function () {
  signOut(auth);
};

/* ---------------- AUTH STATE ---------------- */
onAuthStateChanged(auth, async (user) => {
  if (user) {
    document.getElementById("authSection").style.display = "none";
    document.getElementById("dashboard").classList.remove("hidden");
  }
});

/* ---------------- ADD SERVICE ---------------- */
window.addService = async function () {
  await addDoc(collection(db, "services"), {
    title: document.getElementById("title").value,
    price: document.getElementById("price").value,
    image: document.getElementById("image").value,
    description: document.getElementById("description").value,
    creatorId: auth.currentUser.uid,
    creatorName: auth.currentUser.email
  });

  alert("Service Added!");
};

/* ---------------- LOAD SERVICES ---------------- */
function loadServices() {
  onSnapshot(collection(db, "services"), (snapshot) => {
    const list = document.getElementById("servicesList");
    list.innerHTML = "";

    snapshot.forEach((doc) => {
      const s = doc.data();

      list.innerHTML += `
        <div class="card">
          <img src="${s.image}" />
          <h3>${s.title}</h3>
          <p>₹${s.price}</p>
          <p>${s.creatorName}</p>
        </div>
      `;
    });
  });
}
