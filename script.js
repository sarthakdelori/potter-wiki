const container = document.querySelector(".container");
// const character = document.querySelector(".character");
const characterName = document.querySelectorAll(".name");
const img = document.querySelector("#img");
const url = "https://hp-api.herokuapp.com/api/characters";

function fetchCharacters(){
  let promise = fetch(url);

  promise.then(res => res.json())
  .then(data => 
    {data.forEach(d => {
      let character = document.createElement("div")
      character.classList.add("character")
      let img = document.createElement("img");
      img.classList.add("char-img")
      img.src = d.image;
      let h3 = document.createElement("h3");
      h3.classList.add("name")
      h3.appendChild(document.createTextNode(`${d.name}`));
      let p = document.createElement("p");
      p.classList.add("house")
      p.appendChild(document.createTextNode(`${d.house}`));
      character.appendChild(img)    
      character.appendChild(h3)    
      character.appendChild(p)
      container.appendChild(character)    
  })})
}

window.addEventListener('load', fetchCharacters)