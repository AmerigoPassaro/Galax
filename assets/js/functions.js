function menu(){

  let menuOption = event.target.id

  fetch(`riassunti/${menuOption}.json`)
    .then(response => response.json())
    .then(commits => console.log(commits[0]));


  alert(menuOption)
}
