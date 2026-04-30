firebase.firestore().collection("services")
  .onSnapshot(snapshot => {

    let html = "";

    snapshot.forEach(doc => {
      let data = doc.data();

      html += `
        <div style="
          width:200px;
          border:1px solid #ddd;
          padding:10px;
          border-radius:10px;
          box-shadow:0 2px 5px rgba(0,0,0,0.1);
        ">
          <img src="${data.image}" width="100%" style="border-radius:8px;"><br>
          <h3>${data.title}</h3>
          <p>₹ ${data.price}</p>
        </div>
      `;
    });

    document.getElementById("servicesList").innerHTML = html;
  });
