document.getElementById("update").onclick = function () {
    event.preventDefault();
  
    // passar os dados de acesso (email e senha) para autorizar a edição
    var emailAtual = "ongnova@gmail.com";
    var passwordAtual = "ongnova123";
  
    var newEmail = document.getElementById("email").value;
    var newName = document.getElementById("name").value;
  
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAtual, passwordAtual)
      .then(function (ongCredential) {
        ongCredential.user.updateEmail(newEmail);
      });
  
    var db = firebase.firestore();
    var ag = db.collection("ong").where("email", "==", emailAtual);
  
    ag.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var dados = db.collection("ong").doc(doc.id);
        return dados.update({
          email: newEmail,
          nome: newName,
          responsavel: newRespName,
          endereco: newEndereco,
          telefone: newTel,
          zap: newZap,
          cnpj: newCnpj,
          website: newSite,
          introducao: newIntro
        });
      });
    });
  };
  