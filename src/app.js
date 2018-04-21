const PokeData = require('./models/pokemon_data.js');
const PokeView = require('./views/pokemon_view.js');
const Player = require('./models/player.js')

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
      pokeView.renderIndividualPokemon(data, parentContainer);
      player1.currentHand = data;
    });
  });

  player2Select.addEventListener('change', (event) => {
    const url = event.target.value;
    const parentContainer = document.querySelector('#player2-pokemon');
    pokeData.getIndividualPokemonData(url, (data) => {
      parentContainer.innerHTML = '';
      pokeView.renderIndividualPokemon(data, parentContainer);
      player2.currentHand = data;
    });
  });

  const baseExperienceButton = document.querySelector('#base-experience');
  const weightExperienceButton = document.querySelector('#weight');
  const heightExperienceButton = document.querySelector('#height');

  const compare = function(attribute, onComplete) {
    if (player1.currentHand[attribute] > player2.currentHand[attribute]) {
      onComplete('Player 1', player1.currentHand);
    }
    else {
      onComplete('Player 2', player2.currentHand);
    }
  };

  baseExperienceButton.addEventListener('click', () => {
    compare('base_experience', pokeView.renderWinner);
  });

  weightExperienceButton.addEventListener('click', () => {
    compare('height', pokeView.renderWinner);
  });

  heightExperienceButton.addEventListener('click', () => {
    compare('weight', pokeView.renderWinner);
  });
});
