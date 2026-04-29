window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Signup clicked", email);
  alert("Signup working");
};

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Login clicked", email);
  alert("Login working");
};
