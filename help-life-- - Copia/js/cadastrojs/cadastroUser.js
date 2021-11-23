

 // DOM elements
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const accountDetails = document.querySelector(".account-details"); 

 // Set up our register function
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  const nome = signupForm["signup-nome"].value;
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  // sign up the user & add firestore data
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      return db.collection("users").doc(cred.user.uid).set({
        nome: signupForm["signup-nome"].value,
        email: signupForm["signup-email"].value,
      });
    })
    .then(() => {
      // close the signup modal & reset form
      signupForm.reset();
      alert("Seu usuário foi cadastrado com sucesso!");
      document.location.href="../form/logUsu.html";
    });
}); 

