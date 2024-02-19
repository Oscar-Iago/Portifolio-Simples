function carregarVideos(){
  document.getElementById("carregar").innerHTML = "Estamos sem vídeos mané, rala"
}

function gerarListaInteresse() {
  let interesses = ["Tudo","Musicas","CS GO","League of Legends","OSU!","Danganronpa","Aim Lab","Formula 1","Hardware","Esportes","Podcast","Boku no Hero Academia","JoJo","Doki Doki Literture Club","Shingeki no Kyojin"]
  for(let it = 0; it < interesses.lenght; it++);
   let btn = document.createElement("button")
   btn.innerHTML = interesses[it]
   btn.setAttribute("class", "btn btn-outline-light rounded-pill bg-secondary")
   document.getElementById("list-it").appendChild(btn)
}