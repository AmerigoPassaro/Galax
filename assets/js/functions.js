let mySection = document.querySelector("#main-section");
let myTable = document.querySelector("#main-table-body");

function menu(){

  // Cancellazione elementi nella section
  mySection.innerHTML = "";
  // Comparsa tabella
  myTable.parentElement.style.display = "inline";
  // Individuazione elemento menu cliccato
  let menuOption = event.target.id
  // Collegamento al Json
  fetch(`https://amerigopassaro.github.io/Galax/assets/js/riassunti/${menuOption}.json`)
    .then(response => response.json())
  // Estrapolazione e visualizzazione dei "record"
    .then(commits => {
      for(var i = 0; commits.number_chapter >= i; i++){
        myTable.insertAdjacentHTML("beforeend",
        `<tr id="${commits.chapters[i].id}">
          <td>${i+1}</td>
          <td><button onclick="chapters()">${commits.chapters[i].name}</button></td>
          <td>${commits.chapters[i].num_episodes}</td>
        </tr>`)
      }
    })

}

function chapters(){

  // Cancellazione elementi nella section
  myTable.innerHTML = "";
  // Comparsa tabella
  myTable.parentElement.style.display = "inline";
  // // Individuazione elemento menu cliccato
  let chapterOption = event.target.parentElement.parentElement.id;
  // Collegamento al Json
  fetch(`https://amerigopassaro.github.io/Galax/assets/js/riassunti/${chapterOption}.json`)
    .then(response => response.json())
  // Estrapolazione e visualizzazione dei "record"
    .then(commits => {
      for(var j = 0; commits.number_sessions >= j; j++){
        myTable.insertAdjacentHTML("beforeend",
        `<tr id="${commits.sessions[j].id}" title="${commits.name}">
          <td>${j+1}</td>
          <td><button onclick="openDes()">${commits.sessions[j].name}</button></td>
          <td>${commits.sessions[j].description}</td>
        </tr>`)
      }
    })

}

function openDes(){

  // Cancellazione elementi nella section
  myTable.parentElement.innerHTML = "";
  // // Individuazione elemento menu cliccato
  let sessionOrigin = event.target.parentElement.parentElement.title;
  alert(sessionOrigin)
  // Collegamento al Json
  fetch(`https://amerigopassaro.github.io/Galax/assets/js/riassunti/${sessionOrigin}.json`)
    .then(response => response.json())
  // Estrapolazione e visualizzazione dei "record"
    .then(commits => {
      mySection.insertAdjacentHTML("beforeend",
      `<article>
        <h2 class="paragraph-title">
          ${commits.sessions.name}
        </h2>
        <p id="${commits.sessions.id}">
          ${commits.sessions.description}
        </p>
      </article>`)})

}
