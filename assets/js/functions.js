let mySection = document.querySelector("#main-section");
let myTable = document.querySelector("#main-table-body");

function menu(){

  mySection.innerHTML = "" ;

  let menuOption = event.target.id

  myTable.insertAdjacentHTML("beforeend",
  `<tr id="prova"><td>Prova</td><td>Prova</td><td>Prova</td></tr>`)


  fetch(`https://amerigopassaro.github.io/Galax/assets/js/riassunti/${menuOption}.json`)
    .then(response => response.json())
    .then(commits => {

      }

    })

}
