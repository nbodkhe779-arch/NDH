<!DOCTYPE html>
<html>
<head>
  <title>NDH - Nicks Design Hub</title>
</head>

<body>

<h2>NDH Login</h2>

<input id="email" type="email" placeholder="Email"><br><br>
<input id="password" type="password" placeholder="Password"><br><br>

<select id="role">
  <option value="customer">Customer</option>
  <option value="creator">Creator</option>
</select>

<br><br>

<button onclick="signup()">Signup</button>
<button onclick="login()">Login</button>
<button onclick="logout()">Logout</button>

<hr>

<h3>Services</h3>
<div id="servicesList"></div>

<!-- Firebase CDN (IMPORTANT) -->
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js"></script>

<script src="app.js"></script>

</body>
</html>
