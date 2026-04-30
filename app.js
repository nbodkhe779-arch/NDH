firebase.firestore().collection("services")
  .onSnapshot(snapshot => {

    let html = "";

    snapshot.forEach(doc => {
      let data = doc.data();

      html += `
        <div style="border:1px solid #ccc; padding:10px; margin:10px;">
          <img src="${data.image}" width="150"><br>
          <h4>${data.title}</h4>
          <p>₹ ${data.price}</p>
        </div>
      `;
    });

    document.getElementById("servicesList").innerHTML = html;
  });
