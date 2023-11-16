let http = new XMLHttpRequest();
let jogos = []; // Array que armazena todos os jogos

// Função para exibir os jogos com base no filtro
function exibirJogos(jogosFiltrados) {
   let jogosLimitados = jogosFiltrados.slice(0, 15);
   let output = "";
   for (let jogo of jogosLimitados) {
      output += `
         <tr>
            <td>${jogo.name}</td>
            <td>${jogo.all_reviews}</td>
            <td>${jogo.release_date}</td>
            <td>${jogo.developer}</td>
            <td>${jogo.achievements}</td>
            <td>${jogo.genre}</td>
            <td>${jogo.original_price}</td>
         </tr>
      `;
   }
   document.getElementById("tabelaJogos").innerHTML = output;
}

// Função para filtrar jogos com base no nome
function filtrarJogos() {
   let termoPesquisa = document.querySelector("#barraPesquisa").value.toLowerCase();
   let jogosFiltrados = jogos.filter(jogo => jogo.name.toLowerCase().includes(termoPesquisa));
   exibirJogos(jogosFiltrados);
}

http.open('get', '../js/SteamGames.json', true);
http.send();

http.onload = function () {
   if (this.readyState == 4 && this.status == 200) {
      jogos = JSON.parse(this.responseText);
      exibirJogos(jogos); // Exibe todos os jogos inicialmente
   }
}