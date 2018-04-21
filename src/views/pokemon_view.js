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

PokeView.prototype.renderIndividualPokemon = function (card, parentContainer) {
  console.dir(card);
  const pokemon = document.createElement('div');

  const name = document.createElement('h3');
  name.textContent = `Name: ${card.name}`;
  pokemon.appendChild(name);

  const image = document.createElement('img');
  image.src = card.image;
  pokemon.appendChild(image);

  const height = document.createElement('h3');
  height.textContent = `Height: ${card.height}`;
  pokemon.appendChild(height);

  const weight = document.createElement('h3');
  weight.textContent = `Weight: ${card.weight}`;
  pokemon.appendChild(weight);

  const speed = document.createElement('h3');
  speed.textContent = `Speed: ${card.speed}`;
  pokemon.appendChild(speed);

  const specialAttack = document.createElement('h3');
  specialAttack.textContent = `Special Attack: ${card.specialAttack}`;
  pokemon.appendChild(specialAttack);

  const specialDefense = document.createElement('h3');
  specialDefense.textContent = `Special Defense: ${card.specialDefense}`;
  pokemon.appendChild(specialDefense);

  const attack = document.createElement('h3');
  attack.textContent = `Attack: ${card.attack}`;
  pokemon.appendChild(attack);

  const defense = document.createElement('h3');
  defense.textContent = `Defense: ${card.defense}`;
  pokemon.appendChild(defense);

  const hp = document.createElement('h3');
  hp.textContent = `Hp: ${card.hp}`;
  pokemon.appendChild(hp);

  parentContainer.appendChild(pokemon);
};

PokeView.prototype.renderWinner = function (winnerString, pokemon) {
  const winnerContainer = document.querySelector('#winner');
  winnerContainer.textContent = `${winnerString} wins with ${pokemon.name}`;
};

module.exports = PokeView;
