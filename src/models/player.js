const Player = function(name, playArea) {
  this.currentHand = undefined;
  this.deck = [];
  this.score = 0;
  this.playArea = playArea
  this.name = name;
}

module.exports = Player;
