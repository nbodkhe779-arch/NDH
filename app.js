window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {

      const user = userCredential.user;

      firebase.firestore().collection("users").doc(user.uid).get()
        .then((doc) => {

          if (!doc.exists) {
            alert("User profile missing!");
            return;
          }

          const role = doc.data().role;

          if (role === "creator") {
            alert("Creator Login ✔");
            window.location.href = "creator.html";
          } else {
            alert("Customer Login ✔");
            window.location.href = "index.html";
          }

        });

    })
    .catch(e => alert(e.message));
};
