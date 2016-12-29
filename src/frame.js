// manages a single frame
function Frame() {
  this.rollsComplete = 0;
  this.firstRollPins = 0;
  this.secondRollPins = 0;
  this.totalPinsDown = 0;
  this.MAXPINS = 10;
  this.MAXROLLS = 2;
}

Frame.prototype.increaseRollNumber = function() {
  if(this.rollsComplete >= this.MAXROLLS) {
    throw `${this.MAXROLLS} rolls maximum.`
  } else {
  this.rollsComplete += 1;
}
}

Frame.prototype.rollFirstBall = function(pins){
  this.firstRollPins = pins;
}

Frame.prototype.rollSecondBall = function(pins){
  this.secondRollPins = pins;
}
