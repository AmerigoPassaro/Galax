let mySection = document.querySelector("#main-section");

function menu(){

  mySection.innerHTML = "Sono vuoto!" ;

  let menuOption = event.target.id

  fetch(`https://amerigopassaro.github.io/Galax/assets/js/riassunti/${menuOption}.json`)
    .then(response => response.json())
    .then(commits => alert(commits))

}
