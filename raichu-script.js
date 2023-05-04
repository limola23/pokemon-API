function printStats(data) {
    console.log(data);

    const forms = data.forms;
    const stats = data.stats;
    const type = data.types;

    let arrayOfStats = `
    <section id="printer">
    <h1 class="section-title d-flex justify-content-center pt-5">THE POKEMON PROJECT</h1>
      <div class="main-container ms-5">
        <div class="pokemon-image d-flex justify-content-center alignt-items-center ms-5 mt-5">
          <img src="https://veekun.com/dex/media/pokemon/dream-world/26.svg" alt="" class="pokemon-img d-flex">
        </div>
        <div class="pokemon-stats d-flex flex-column justify-content-center alignt-items-center ms-4 mt-5">
          <h1 class="stats-title mt-4">STATS</h1>
          <h2 class="pokemon-name ms-4">${forms[0].name}</h2>
          <div class="stats-hp d-flex flex-column mt-2 ms-4">
            <span class="stats-type">HP:</span>
            <span class="stats-characteristic"> ${stats[0].base_stat} </span>
          </div>
  
          <div class="stats-attack d-flex flex-column mt-3 ms-4">
            <span class="stats-type">Attack</span>
            <span class="stats-characteristic"> ${stats[1].base_stat}  </span>
          </div>
  
          <div class="stats-defense d-flex flex-column mt-3 ms-4">
            <span class="stats-type">Defense</span>
            <span class="stats-characteristic"> ${stats[2].base_stat}  </span>
          </div>
  
          <div class="stats-speed d-flex flex-column mt-3 ms-4">
            <span class="stats-type">Speed</span>
            <span class="stats-characteristic"> ${stats[3].base_stat}  </span>
          </div>
  
          <div class="stats-type d-flex flex-column mt-3 ms-4">
            <span class="stats-type">Type</span>
            <span class="stats-characteristic"> ${type[0].type.name}  </span>
          </div>
        </div>
        </section>       
    `;

    document.querySelector("#printer").innerHTML = arrayOfStats;
}

function getPokemon() {
    // Define la URL
    let url = "https://pokeapi.co/api/v2/pokemon/26/";

    // Consumir la URL con fetch
    fetch(url)
        .then(response => {
            // Convertir la respuesta a JSON
            response.json()
                .then(data => {
                    printStats(data);
                })
                .catch(error => {
                    console.log(error);
                });
        })
        .catch(error => {
            console.log(error);
        });
}

getPokemon();