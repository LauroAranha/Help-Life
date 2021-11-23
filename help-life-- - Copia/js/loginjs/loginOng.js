auth.onAuthStateChanged(ong => {
  if (ong) {
    db.collection('guides').onSnapshot(snapshot => {
      setupGuides(snapshot.docs);
      setupUI(ong);
    }, err => console.log(err.message));
  } else {
    setupUI();
    setupGuides([]);
  }
});

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    loginForm.reset();
    alert("Logado como: " + email);
    document.location.href="../loggedOng/index.html";
  }).catch((error) => {
    alert("Login inválido! Verifique os campos e tente novamente");
  });
});