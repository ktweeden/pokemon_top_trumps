const PokeView = function(pokemonContainer, select1, select2) {
  this.select1 = select1;
  this.select2 = select2;
  this.pokemonContainer = pokemonContainer;

}


PokeView.prototype.renderSelects = function (pokeData) {
  pokeData.forEach(pokemon => {
    const pokeOption1 = document.createElement('option');
    const pokeOption2 = document.createElement('option');
    pokeOption1.textContent = pokemon.name;
    pokeOption1.value = pokemon.url;
    pokeOption2.textContent = pokemon.name;
    pokeOption2.value = pokemon.url;
    this.select1.appendChild(pokeOption1);
    this.select2.appendChild(pokeOption2);
  });
};

PokeView.prototype.renderIndividualPokemon = function (pokemonData) {
  console.dir(pokemonData);
  const pokemon = document.createElement('div');

  const name = document.createElement('h3');
  name.textContent = `Name: ${pokemonData.name}`;
  pokemon.appendChild(name);

  const exp = document.createElement('h3');
  exp.textContent = `Base experience: ${pokemonData.base_experience}`;
  pokemon.appendChild(exp);

  const height = document.createElement('h3');
  height.textContent = `Height: ${pokemonData.height}`;
  pokemon.appendChild(height);

  const weight = document.createElement('h3');
  weight.textContent = `Weight: ${pokemonData.weight}`;
  pokemon.appendChild(weight);

  this.pokemonContainer.appendChild(pokemon);
};

PokeView.prototype.renderWinner = function (winnerString, pokemon) {
  const winnerContainer = document.querySelector('#winner');
  winnerContainer.textContent = `${winnerString} wins with ${pokemon.name}`;
};

module.exports = PokeView;
