function menu(){

  let menuOption = event.target.id

  fetch(`https://www.amerigopassaro.it/projects/galax/riassunti/${menuOption}.json`,
    {
      headers: {
        Origin: 'https://www.amerigopassaro.it/'
      }
    })
    .then(response => response.json())
    .then(commits => console.log(commits[0]));


  alert(menuOption)
}
