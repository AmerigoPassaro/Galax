let mySection = document.querySelector("#main-section");
let myTable = document.querySelector("#main-table-body");

function openChapterList(){
  fetch(`https://amerigopassaro.github.io/Galax/assets/js/riassunti/${menuOption}.json`)
    .then(response => response.json())
    .then(commits => {
      for(var i = 0; commits.number_chapter >= i; i++){
        myTable.insertAdjacentHTML("beforeend",
        `<tr id="prova"><td>${i+1}</td><td>${commits.chapters[i].name}</td><td>${commits.chapters[i].num_episodes}</td></tr>`)
      }
    }
  )
}


function menu(){

  mySection.innerHTML = "" ;

  let menuOption = event.target.id

  openChapterList()

}
