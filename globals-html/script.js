function cadastrar() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let senha = document.getElementById('senha').value;
    let senhaConfirm = document.getElementById('senhaConfirm').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    
    if (nome == "" || email == "" || telefone == "" || senha == "" || senhaConfirm == "" || dataNascimento == "") {
      alert("Preencha todos os campos");
      return false; // Impede o envio do formulário
    } else if (senha !== senhaConfirm) {
      alert("As senhas devem ser iguais");
      return false; // Impede o envio do formulário
    } else {
      alert("Conta criada com sucesso");
      console.log(nome, email, telefone, senha, senhaConfirm,dataNascimento);
      let infoLogin = email + senha;
      console.log(infoLogin);
      return true; // Permite o envio do formulário
    }
  }
  
    document.getElementById("form").addEventListener("submit", function(event) {
    if (!cadastrar()) {
      event.preventDefault(); // Impede o envio do formulário
    }
});





function entrar() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
  
    if (email === "" || senha === "") {
      alert("Preencha todos os campos");
      return; // Interrompe a execução da função
    } else{
      alert("Acesso concedido");
    }
}
  


  
  
  
  

