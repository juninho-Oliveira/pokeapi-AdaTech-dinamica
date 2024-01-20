async function poke() {

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
    let data = await response.json()

    //console.log(data)

    data.results.forEach(async (element , index) => {
      const resp = await fetch(element.url);
      const poke = await resp.json();

      const img = document.createElement('img');
      const div = document.createElement('div');

      let caminho =  poke.sprites.front_default;
      let nome = poke.name
      let types = poke.types.map((ele) => ele.type.name);

      //console.log(poke.sprites.front_shiny)

      //console.log(caminho)

      div.innerHTML += `
      <section class="cards-container">
      <button onclick="troca(${index})"><img src= "/seta-lado-esquerdo.jpg" style="width: 20px;"></button>
      <section class="label">
        <h1>${nome}</h1>
          <img id="imagem-${index}" src="${caminho}" alt="${nome}">
        <p>Types: ${types}</p>
      </section>
      <button onclick="troca(${index})"><img src= "/seta-lado-direito.jpg" style="width: 20px;"></button>
      </section>
      `
      teste.appendChild(div);

    });
  } catch (error) {
    alert("Erro", error)
  } finally {

  }

}

poke();


async function troca(index) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=`);
  let data = await response.json()

  data.results.forEach(async (element) => {
    const resp = await fetch(element.url);
    const poke = await resp.json()
    
    let imagem = document.getElementById(`imagem-${index}`)
    
    if (imagem.src === poke.sprites.front_default) {
      imagem.src = poke.sprites.front_shiny;
    } else if (imagem.src === poke.sprites.front_shiny) {
      imagem.src = poke.sprites.front_default;
    } 

  })
}

async function obterInfo() {

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/`);
    let data = await response.json()

    const tipoPokemonSelect = document.getElementById('tipoSelector');

    data.results.forEach(type => {
      const option = document.createElement('option');
      option.value = type.name;
      option.textContent = type.name;
      tipoPokemonSelect.appendChild(option);
    });

  } catch (error) {
    alert('Erro', error)
  } finally {

  }
}


obterInfo()

async function buscar(index) {

  try {

    const tipoPokemonSelect = document.getElementById('tipoSelector');
    //console.log(tipoPokemonSelect.value)

    const response = await fetch(`https://pokeapi.co/api/v2/type/` + tipoPokemonSelect.value);
    let data = await response.json()


    teste.innerHTML = 'Carregando....';


    setTimeout(() => {

      teste.innerHTML = '';

      data.pokemon.forEach(async (ele, index) => {
        //console.log(ele)

        const resp = await fetch(ele.pokemon.url);
        const poke = await resp.json();

        //console.log(poke)

        const img = document.createElement('img');
        const div = document.createElement('div');
        const caminho = img.src = poke.sprites.front_default;
        let nome = poke.name

        let types = poke.types.map((ele) => ele.type.name);

        div.innerHTML += `
        <section class="cards-container">
        <button onclick="troca(${index})"><img src= "/seta-lado-esquerdo.jpg" style="width: 20px;"></button>
        <section class="label">
          <h1>${nome}</h1>
            <img id="imagem-${index}" src="${caminho}" alt="${nome}">
          <p>Types: ${types}</p>
        </section>
        <button onclick="troca(${index})"><img src= "/seta-lado-direito.jpg" style="width: 20px;"></button>
        </section>
        `
        teste.appendChild(div);
      })
    }, 1000);
  } catch (error) {
    alert('Erro', error)
  } finally {

  }

}