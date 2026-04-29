
const firebaseConfig = {
  apiKey: "AIzaSyAcElCId4770Q7wV70WfmG8m0CTF__KJbY",
  authDomain: "nicks-design-hube.firebaseapp.com",
  projectId: "nicks-design-hube",
  storageBucket: "nicks-design-hube.appspot.com",
  messagingSenderId: "361289302201",
  appId: "1:361289302201:web:e238156e92777c39e5db68"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

/* ---------------- SIGNUP ---------------- */
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Email & Password required");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Signup Successful ✔");
    })
    .catch((error) => {
      alert(error.message);
    });
};

/* ---------------- LOGIN ---------------- */
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Enter Email & Password");
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login Successful ✔");
    })
    .catch((error) => {
      alert(error.message);
    });
};

/* ---------------- LOGOUT ---------------- */
window.logout = function () {
  auth.signOut().then(() => {
    alert("Logged out ✔");
  });
};
