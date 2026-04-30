window.addService = function () {

  const file = document.getElementById("imageFile").files[0];
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;

  if (!file) {
    alert("Please select image");
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

      alert("Service Added ✔");

    });

  });

};
