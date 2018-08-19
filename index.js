var sum = (array) => array.reduce((a, b) => a + b, 0);

class Roll {
  constructor(nb_of_pins) {
    if (nb_of_pins < 0 || nb_of_pins > 10) {
      throw new Error("Wrong number of pins for roll");
    }
    this.nb_of_pins = nb_of_pins
  }
}

class Frame {
  constructor(number, previous_frame = undefined) {
    this.number = number;
    this.rolls = [];
    this.expectedBonus = 0;
    this.bonusRolls = [];
    this.previous_frame = previous_frame;
  }

  addRoll(roll) {
    this.rolls.push(roll);
    // is the previous frame expecting a bonus?
    if (this.previous_frame && this.previous_frame.expectedBonus > 0) {
      this.previous_frame.__addBonus(roll);
    }

    if (this.isFinished() && this.__getScore() == 10) {
      // 2 for a strike, 1 for a spare
      this.expectedBonus = 3 - this.rolls.length;
    }
  }

  isFinished() {
    return (
      this.__getScore() >= 10 ||
      this.rolls.length == 2
    )
  }

  getScoreForGame() {
    if (this.number > 10) {
      return 0;
    }
    return this.__getScore();
  }

  __getScore() {
    var scores = this.rolls.map((roll) => roll.nb_of_pins);
    var bonuses = this.bonusRolls.map((roll) => roll.nb_of_pins);
    var score = sum(scores.concat(bonuses));
    return score;
  }

  __addBonus(roll) {
    this.bonusRolls.push(roll);
    this.expectedBonus -= 1;
    // is the previous frame also expecting a bonus?
    if (this.previous_frame && this.previous_frame.expectedBonus > 0) {
      this.previous_frame.__addBonus(roll);
    }
  }
}

class Game {
  constructor() {
    this.current_frame = new Frame(1)
    this.frames = [this.current_frame];
  }

  addRoll(nb_of_pins) {
    if (this.current_frame.isFinished()) {
      var newFrame = new Frame(
        this.frames.length + 1,
        this.current_frame
      );
      this.current_frame = newFrame;
      this.frames.push(this.current_frame);
    }

    var roll = new Roll(nb_of_pins);
    this.current_frame.addRoll(roll);
  }

  getScore() {
    var scores = this.frames.map((frame) => frame.getScoreForGame());
    return sum(scores);
  }

  isFinished() {
    return (
      this.frames.length >= 10 &&
      this.frames[9].isFinished() &&
      this.frames[9].expectedBonus == 0
    );
  }
}
