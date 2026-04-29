window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => alert("Signup Success"))
    .catch(e => alert(e.message));
};

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => alert("Login Success"))
    .catch(e => alert(e.message));
};
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcElCId4770Q7wV70WfmG8m0CTF__KJbY",
  authDomain: "nicks-design-hube.firebaseapp.com",
  projectId: "nicks-design-hube",
  storageBucket: "nicks-design-hube.firebasestorage.app",
  messagingSenderId: "361289302201",
  appId: "1:361289302201:web:e238156e92777c39e5db68",
  measurementId: "G-HTTZ5ZSV78"
};
