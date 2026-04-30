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
const db = firebase.firestore();

/* SIGNUP */
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      db.collection("users").doc(user.uid).set({
        email: email,
        role: role
      });

      alert("Signup Success ✔");
    })
    .catch(e => alert(e.message));
};

/* LOGIN */
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => alert("Login Success ✔"))
    .catch(e => alert(e.message));
};

/* LOGOUT */
window.logout = function () {
  auth.signOut();
  alert("Logged out ✔");
};

/* SHOW SERVICES */
firebase.firestore().collection("services")
  .onSnapshot(snapshot => {

    let html = "";

    snapshot.forEach(doc => {
      let data = doc.data();

      html += `
        <div style="border:1px solid #ddd; padding:10px; margin:10px; width:200px;">
          <img src="${data.image}" width="100%" style="border-radius:8px;"><br>
          <h3>${data.title}</h3>
          <p>₹ ${data.price}</p>
        </div>
      `;
    });

    document.getElementById("servicesList").innerHTML = html;
  });
window.addService = function () {

  const file = document.getElementById("imageFile").files[0];
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;

  if (!file) {
    alert("Select image");
    return;
  }

  const storageRef = firebase.storage().ref("services/" + file.name);

  storageRef.put(file).then(() => {

    storageRef.getDownloadURL().then((url) => {

      firebase.firestore().collection("services").add({
        title: title,
        price: price,
        image: url
      });

      alert("Service Uploaded ✔");

    });

  });

};
