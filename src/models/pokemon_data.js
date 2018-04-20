const Request = require('../helpers/request.js');

const PokeData = function() {
  this.url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
  this.data = null;
}

PokeData.prototype.getData = function(onComplete) {
  const request = new Request(this.url);
  request.get(requestData => {
    this.data = requestData.results;
    onComplete(this.data);
  });
};

PokeData.prototype.getIndividualPokemonData = function(pokemonUrl, onComplete) {
  const request = new Request(pokemonUrl);
  request.get(data => {
    onComplete(data)
  });
}

module.exports = PokeData;
