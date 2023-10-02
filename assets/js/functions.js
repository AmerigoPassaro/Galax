let mySection = document.querySelector("#main-section");
let myTable = document.querySelector("#main-table-body");

function menu(){

  // Cancellazione elementi nella section
  mySection.innerHTML = "" ;
  // Individuazione elemento menu cliccato
  let menuOption = event.target.id
  // Collegamento al Json
  fetch(`https://amerigopassaro.github.io/Galax/assets/js/riassunti/${menuOption}.json`)
    .then(response => response.json())
  // Estrapolazione e visualizzazione dei "record"
    .then(commits => {
      for(var i = 0; commits.number_chapter >= i; i++){
        myTable.insertAdjacentHTML("beforeend",
        `<tr id="prova">
          <td>${i+1}</td>
          <td>${commits.chapters[i].name}</td>
          <td>${commits.chapters[i].num_episodes}</td>
        </tr>`)
      }
    })

    
}
