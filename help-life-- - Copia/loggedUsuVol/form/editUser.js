/* // update user

document.getElementById("update").onclick = function () {
  event.preventDefault();

  // passar os dados de acesso (email e senha) para autorizar a edição
  var emailAtual = "lauro2@lauro.com";
  var passwordAtual = "lauro1";

  var newEmail = document.getElementById("email").value;
  var newName = document.getElementById("name").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(emailAtual, passwordAtual)
    .then(function (userCredential) {
      userCredential.user.updateEmail(newEmail);
    });

  var db = firebase.firestore();
  var ag = db.collection("users").where("email", "==", emailAtual);

  ag.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var dados = db.collection("users").doc(doc.id);
      return dados.update({
        email: newEmail,
        nome: newName,
      });
    });
  });
}; */
