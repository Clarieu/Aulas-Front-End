script.js
// Aguarde até que o documento HTML seja totalmente carregado
document.addEventListener("DOMContentLoaded", function() {
  // Obtenha uma referência para o elemento da imagem de perfil
  var profileImage = document.querySelector(".profile-resume-image");

  // Adicione um ouvinte de evento de clique à imagem de perfil
  profileImage.addEventListener("click", function() {
    // Faça algo quando a imagem de perfil for clicada
    alert("A imagem de perfil foi clicada!");
  });

  // Obtenha referências para os elementos de navegação
  var githubLink = document.querySelector(".profile-nav-link:nth-child(1)");
  var portfolioLink = document.querySelector(".profile-nav-link:nth-child(2)");
  var contatoLink = document.querySelector(".profile-nav-link:nth-child(3)");

  // Adicione ouvintes de evento de clique aos links de navegação
  githubLink.addEventListener("click", function() {
    // Faça algo quando o link do GitHub for clicado
    alert("Link do GitHub foi clicado!");
  });

  portfolioLink.addEventListener("click", function() {
    // Faça algo quando o link do Portfolio for clicado
    alert("Link do Portfolio foi clicado!");
  });

  contatoLink.addEventListener("click", function() {
    // Faça algo quando o link de Contato for clicado
    alert("Link de Contato foi clicado!");
  });
});
