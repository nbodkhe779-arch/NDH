const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

/* INIT */
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

/* ---------------- SIGNUP ---------------- */
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      db.collection("users").doc(user.user.uid).set({
        email: email,
        role: role
      });

      alert("Signup Successful ✔");
    })
    .catch(e => alert(e.message));
};

/* ---------------- LOGIN ---------------- */
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => alert("Login Successful ✔"))
    .catch(e => alert(e.message));
};

/* ---------------- LOGOUT ---------------- */
window.logout = function () {
  auth.signOut();
  alert("Logged out");
};
