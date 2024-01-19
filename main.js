async function poke() {

  try {
    const tipoPokemonSelect = document.getElementById('tipoSelector');

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=14`);
    let data = await response.json()

    //console.log(data)

    data.results.forEach(async element => {
      const resp = await fetch(element.url);
      const poke = await resp.json();

      /*const img = document.createElement('img');
      const div = document.createElement('div');
      const caminho = img.src = poke.sprites.front_default;
      let nome = poke.name

      let types = poke.types.map((ele) => ele.type.name);

      div.innerHTML += `
      <h1>${nome}</h1>
      <img src="${caminho}" alt="${nome}">
      <p>Types: ${types}</p>
      
      `
      teste.appendChild(div);*/

    });
  } catch (error) {
    alert("Erro", error)
  }finally {

  }

}

poke();


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

async function buscar() {

  try {
    const tipoPokemonSelect = document.getElementById('tipoSelector');
    //console.log(tipoPokemonSelect.value)

    const response = await fetch(`https://pokeapi.co/api/v2/type/` + tipoPokemonSelect.value);
    let data = await response.json()

    data.pokemon.forEach(async ele => {
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
      <h1>${nome}</h1>
      <img src="${caminho}" alt="${nome}">
      <p>Types: ${types}</p>
      
      `
      teste.appendChild(div);
    })
  } catch (error) {
    alert('Erro', error)
  } finally {

  }

}