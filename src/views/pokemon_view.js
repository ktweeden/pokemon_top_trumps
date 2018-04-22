const PokeView = function(pokemonContainer) {
  this.pokemonContainer = pokemonContainer;

}

PokeView.prototype.renderIndividualPokemon = function (player) {
  const card = player.currentHand;
  console.dir(player.currentHand);
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

  player.playArea.appendChild(pokemon);
};

PokeView.prototype.renderWinner = function (winnerString, pokemon) {
  const winnerContainer = document.querySelector('#winner');
  winnerContainer.textContent = `${winnerString} wins with ${pokemon.name}`;
};

module.exports = PokeView;
