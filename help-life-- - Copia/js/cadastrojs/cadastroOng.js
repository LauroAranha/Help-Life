const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const accountDetails = document.querySelector(".account-details");

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
        return db.collection("ong").doc(cred.user.uid).set({
          nome: signupForm["signup-nome"].value,
          responsavel: signupForm["responsavel"].value,
          telefone: signupForm["telefone"].value,
          zap: signupForm["zap"].value,
          endereco: signupForm["endereco"].value,
          cnpj: signupForm["cnpj"].value,
          email: signupForm["signup-email"].value,
          website: signupForm["website"].value,
          introducao: signupForm["introducao"].value,
        });
      })
      .then(() => {
        // close the signup modal & reset form
        signupForm.reset();
        alert("Ong cadastrada com sucesso!");
        document.location.href="../form/logOng.html";
      });
  }); 