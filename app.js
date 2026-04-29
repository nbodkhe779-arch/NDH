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
