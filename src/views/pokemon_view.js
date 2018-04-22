const PokeView = function(pokemonContainer) {
  this.pokemonContainer = pokemonContainer;

}

PokeView.prototype.renderIndividualPokemon = function (player, onComplete) {
  const card = player.currentHand;
  console.dir(player.currentHand);
  const pokemon = document.createElement('div');
  pokemon.classList.add('pokemon-card');

  const name = document.createElement('h2');
  name.textContent = `${card.name}`;
  pokemon.appendChild(name);
  name.classList.add('pokemon-name');

  const image = document.createElement('img');
  image.src = card.image;
  pokemon.appendChild(image);

  const height = document.createElement('h3');
  height.textContent = `Height: ${card.height}`;
  height.id = 'height';
  pokemon.appendChild(height);

  const weight = document.createElement('h3');
  weight.textContent = `Weight: ${card.weight}`;
  weight.id = 'weight';
  pokemon.appendChild(weight);

  const speed = document.createElement('h3');
  speed.textContent = `Speed: ${card.speed}`;
  speed.id = 'speed'
  pokemon.appendChild(speed);

  const specialAttack = document.createElement('h3');
  specialAttack.textContent = `Special Attack: ${card.specialAttack}`;
  specialAttack.id = 'special-attack';
  pokemon.appendChild(specialAttack);

  const specialDefense = document.createElement('h3');
  specialDefense.textContent = `Special Defense: ${card.specialDefense}`;
  specialDefense.id = 'special-defense';
  pokemon.appendChild(specialDefense);

  const attack = document.createElement('h3');
  attack.textContent = `Attack: ${card.attack}`;
  attack.id = 'attack';
  pokemon.appendChild(attack);

  const defense = document.createElement('h3');
  defense.textContent = `Defense: ${card.defense}`;
  defense.id = 'defense';
  pokemon.appendChild(defense);

  const hp = document.createElement('h3');
  hp.textContent = `Hp: ${card.hp}`;
  hp.id = 'hp';
  pokemon.appendChild(hp);

  player.playArea.appendChild(pokemon);

  onComplete();
};

PokeView.prototype.renderWinner = function (winnerString, pokemon, loser) {
  const winnerContainer = document.querySelector('#message');
  if (!winnerString) {
    winnerContainer.textContent = "It's a draw!";
  }
  else {
    winnerContainer.textContent = `${winnerString} wins with ${pokemon.name}. ${loser.name} fainted!`;
  }
};

module.exports = PokeView;
