function menu(){

  let menuOption = event.target.id

  fetch("https://amerigopassaro.github.io/Galax/assets/js/riassunti/riassunti.json")
    .then(response => response.json())
    .then(commits => alert(commits[0]))

  alert(menuOption)
}
