const Player = function(playArea) {
  this.currentHand = undefined;
  this.deck = [];
  this.score = 0;
  this.playArea = playArea
}

module.exports = Player;
