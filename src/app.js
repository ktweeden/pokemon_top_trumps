const PokeData = require('./models/pokemon_data.js');
const PokeView = require('./views/pokemon_view.js');
const Player = require('./models/player.js');
const Card = require('./models/card.js');
const _ = require('lodash');

document.addEventListener('DOMContentLoaded', () => {
  const pokeData = new PokeData();


  const pokemonChoiceContainer = document.querySelector("#choices");
  const player1 = new Player('Player 1', document.querySelector('#player1-pokemon'));
  const player2 = new Player('Player 2', document.querySelector('#player2-pokemon'));
  let currentPlayer = player1;
  let otherPlayer = player2;


  const pokeView = new PokeView(pokemonChoiceContainer);

  pokeData.getData(data => {
    dealCards(data);
    play();
  });

  const play = function() {
    populatePlayerHands(() => {
      pokeView.renderIndividualPokemon(currentPlayer, addCompareButtons)
    });
    document.querySelector('#message').textContent = `${currentPlayer.name}'s turn. Chose an attribute to compare.`
  }

  const dealCards = function(data) {
    const shuffledDeck = _.shuffle(data);
    halfLength = Math.ceil(data.length / 2);
    player1.deck = shuffledDeck.splice(0, halfLength);
    player2.deck = shuffledDeck;
  }

  const populatePlayerHands = function(onComplete) {
    pokeData.getIndividualPokemonData(currentPlayer.deck.pop().url, (data) => {
      currentPlayer.currentHand = new Card(data);
      onComplete()
    });
    pokeData.getIndividualPokemonData(otherPlayer.deck.pop().url, (data) => {
      otherPlayer.currentHand = new Card(data);
    });
  }

  const switchPlayerRoles = function() {
    const player = currentPlayer;
    currentPlayer = otherPlayer;
    otherPlayer = player;
  }

  const clearPlayArea = function() {
    document.querySelector('#player1-pokemon').innerHTML = '';
    document.querySelector('#player2-pokemon').innerHTML = '';
    document.querySelector('#message').innerHTML = '';
  }

  const compare = function(attribute, onComplete) {
    pokeView.renderIndividualPokemon(otherPlayer, () => {});
    if (player1.currentHand[attribute] > player2.currentHand[attribute]) {
      player1.score += 1;
      onComplete('Player 1', player1.currentHand);
      document.querySelector('#player1-score').textContent = `Player 1: ${player1.score}`;
    }
    else {
      player2.score += 1;
      onComplete('Player 2', player2.currentHand);
      document.querySelector('#player2-score').textContent = `Player 2: ${player2.score}`;
    }
    const winner = isWon();
    if(isWon() != null) {
      document.querySelector('#message').textContent = `${winner.name} has won!`
    }
    else {
      setTimeout(() => {
        clearPlayArea();
        switchPlayerRoles();
        play();
      }, 5000);
    }
  };

  const isWon = function() {
    if (player1.score === 10){
      return player1;
    }
    else if(player2.score === 10) {
      return player2;
    }
    else {
      return null;
    }
  }

  const addCompareButtons = function() {
    const weightButton = document.querySelector('#weight');
    const heightButton = document.querySelector('#height');
    const speedButton = document.querySelector('#speed');
    const specialAttackButton = document.querySelector('#special-attack');
    const specialDefenseButton = document.querySelector('#special-defense');
    const attackButton = document.querySelector('#attack');
    const defenseButton = document.querySelector('#defense');
    const hpButton = document.querySelector('#hp');

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
  }
});
