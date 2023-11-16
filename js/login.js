document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const senha = document.getElementById("senha").value;
  
    const validUsername = "admin";
    const validSenha = "admin";
  
    if (username === validUsername && senha === validSenha) {
      localStorage.setItem("isLogged", "true");
      window.location.href = "../index.html";
    } else {
      alert("Usuário ou senha incorretos");
    }
  });
  
  document.getElementById("ignorarLogin").addEventListener("click", function() {
    alert("Continuando sem login...");
    localStorage.setItem("isLogged", "false");
    window.location.href = "../index.html";
  });

  // script.js
  // script.js
document.addEventListener("DOMContentLoaded", function() {
  
  const elementoExistente = document.getElementById('usuario');

  // Criar um elemento <p>
  const novoParagrafo = document.createElement('p');

  // Definir o conteúdo do novo parágrafo
  novoParagrafo.textContent = `${username}`;

  // Adicionar o novo parágrafo ao elemento existente
  elementoExistente.appendChild(novoParagrafo);
});


  