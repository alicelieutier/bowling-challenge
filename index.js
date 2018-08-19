class Roll {
  constructor(nb_of_pins) {
    if (nb_of_pins < 0 || nb_of_pins > 10) {
      throw new Error("Wrong number of pins");
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
      this.rolls[0].nb_of_pins == 10 ||
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
    var score = 0;
    for (var i = 0; i < this.rolls.length; i++) {
      score += this.rolls[i].nb_of_pins;
    }
    for (var j = 0; j < this.bonusRolls.length; j++) {
      score += this.bonusRolls[j].nb_of_pins;
    }
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
    this.past_frames = [];
  }

  addRoll(nb_of_pins) {
    var roll = new Roll(nb_of_pins);
    if (this.current_frame === undefined) {
      this.current_frame = new Frame(1);

    } else if (this.current_frame.isFinished()) {
      this.past_frames.push(this.current_frame);
      var newFrame = new Frame(
        this.past_frames.length + 1,
        this.current_frame
      );
      this.current_frame = newFrame;
    }
    this.current_frame.addRoll(roll);
  }

  getScore() {
    var score = 0;
    for (var i = 0; i < this.past_frames.length; i++) {
      score += this.past_frames[i].getScoreForGame();
    }
    if (this.current_frame != undefined) {
      score += this.current_frame.getScoreForGame();
    }
    return score;
  }

  isFinished() {
    return (
      (
        this.past_frames.length === 9 &&
        this.current_frame.isFinished() &&
        this.current_frame.expectedBonus == 0
      ) || (
        this.past_frames.length >= 10 &&
        this.past_frames[9].expectedBonus == 0
      )
    );
  }
}
