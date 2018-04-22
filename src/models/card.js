const Card = function(pokemonData) {
  this.name = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
  this.height = pokemonData.height;
  this.weight = pokemonData.weight;
  this.speed = pokemonData.stats[0].base_stat;
  this.specialAttack = pokemonData.stats[2].base_stat;
  this.specialDefense = pokemonData.stats[1].base_stat;
  this.attack = pokemonData.stats[4].base_stat;
  this.defense = pokemonData.stats[3].base_stat;
  this.hp = pokemonData.stats[5].base_stat;
  this.image = pokemonData.sprites.front_default;
}

module.exports = Card;
