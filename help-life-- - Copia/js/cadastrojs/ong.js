// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBXIkjF58K7SIwmbb5oinqhPmEFVnfPLo",
  authDomain: "help-life-96b28.firebaseapp.com",
  databaseURL: "https://help-life-96b28-default-rtdb.firebaseio.com",
  projectId: "help-life-96b28",
  storageBucket: "help-life-96b28.appspot.com",
  messagingSenderId: "333592759358",
  appId: "1:333592759358:web:1df02da30a91fd1c35956f",
};
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();

// Set up our register function
function register() {
  let cnome = document.getElementById("nome").value;
  let cresponsavel = document.getElementById("responsavel").value;
  let cendereco = document.getElementById("endereco").value;
  let ctelefone = document.getElementById("telefone").value;
  let ccnpj = document.getElementById("cnpj").value;
  let cemail = document.getElementById("email").value;
  let csenha = document.getElementById("senha").value;
  let cwebsite = document.getElementById("website").value;
  let cintroducao = document.getElementById("introducao").value;
  

  // Validate input fields
  if (validate_email(cemail) == false || validate_senha(csenha) == false) {
    alert("Informações do email estão incompletas");
    return;
    // Don't continue running the code
  }
  if (validate_field(cnome) == false) {
    alert("Informações incompletas");
    return;
  }

  var db = firebase.firestore();
  /*nao remover essa variavel div ela faz com que a seta aparece depois de concluir o cadastro*/ 
  var div = document.getElementById("seta3");
  div.style.display = "block";

  db.collection("ong")
    .add({
      nome: cnome,
      responsavel: cresponsavel,
      endereco: cendereco,
      telefone: ctelefone,
      cnpj: ccnpj,
      email: cemail,
      senha: csenha,
      website: cwebsite,
      introducao: cintroducao,
    })

    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
  alert("ONG cadastrada com sucesso!");
}

function login() {}

function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }
}

function validate_senha(senha) {
  // Firebase only accepts lengths greater than 6
  if (senha < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}
