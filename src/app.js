const PokeData = require('./models/pokemon_data.js');
const PokeView = require('./views/pokemon_view.js');
const Player = require('./models/player.js');
const Card = require('./models/card.js');

document.addEventListener('DOMContentLoaded', () => {
  const pokeData = new PokeData();

  const player1Select = document.querySelector('#player-1-select')
  const player2Select = document.querySelector('#player-2-select')
  const pokemonChoiceContainer = document.querySelector("#choices");
  const player1 = new Player();
  const player2 = new Player();


  const pokeView = new PokeView(pokemonChoiceContainer, player1Select, player2Select);
  pokeData.getData(data => {
    pokeView.renderSelects(data);
  });

  player1Select.addEventListener('change', (event) => {
    const url = event.target.value;
    const parentContainer = document.querySelector('#player1-pokemon');
    pokeData.getIndividualPokemonData(url, (data) => {
      parentContainer.innerHTML = '';
      const pokemonCard = new Card(data);
      pokeView.renderIndividualPokemon(pokemonCard, parentContainer);
      player1.currentHand = pokemonCard;
    });
  });

  player2Select.addEventListener('change', (event) => {
    const url = event.target.value;
    const parentContainer = document.querySelector('#player2-pokemon');
    pokeData.getIndividualPokemonData(url, (data) => {
      parentContainer.innerHTML = '';
      const pokemonCard = new Card(data);
      pokeView.renderIndividualPokemon(pokemonCard, parentContainer);
      player2.currentHand = pokemonCard;
    });
  });

  const weightButton = document.querySelector('#weight');
  const heightButton = document.querySelector('#height');
  const speedButton = document.querySelector('#speed');
  const specialAttackButton = document.querySelector('#special-attack');
  const specialDefenseButton = document.querySelector('#special-defense');
  const attackButton = document.querySelector('#attack');
  const defenseButton = document.querySelector('#defense');
  const hpButton = document.querySelector('#hp');

  const compare = function(attribute, onComplete) {
    if (player1.currentHand[attribute] > player2.currentHand[attribute]) {
      onComplete('Player 1', player1.currentHand);
    }
    else {
      onComplete('Player 2', player2.currentHand);
    }
  };

  heightButton.addEventListener('click', () => {
    compare('height', pokeView.renderWinner);
  });

  weightButton.addEventListener('click', () => {
    compare('weight', pokeView.renderWinner);
  });

  speedButton.addEventListener('click', () => {
    compare('speed', pokeView.renderWinner);
  });

  specialAttackButton.addEventListener('click', () => {
    compare('specialAttack', pokeView.renderWinner);
  });

  specialDefenseButton.addEventListener('click', () => {
    compare('specialDefense', pokeView.renderWinner);
  });

  attackButton.addEventListener('click', () => {
    compare('attack', pokeView.renderWinner);
  });

  defenseButton.addEventListener('click', () => {
    compare('defense', pokeView.renderWinner);
  });

  hpButton.addEventListener('click', () => {
    compare('hp', pokeView.renderWinner);
  });
});
