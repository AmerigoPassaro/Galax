let mySection = document.querySelector("#main-section");
let myTable = document.querySelector("#main-table-body");

function menu(){

  mySection.innerHTML = "" ;

  let menuOption = event.target.id

  fetch(`https://amerigopassaro.github.io/Galax/assets/js/riassunti/${menuOption}.json`)
    .then(response => response.json())
    .then(commits => {
      for (let i = 0; i < commits.length; i++){
        bodyTable.insertAdjacentHTML("beforeend",
        `<tr id="${i}">
        <td>${i+1}</td>
        <td>${comits[i]}</td>
        <td>${i+1}</td>
        </tr>`)}
    })

}
