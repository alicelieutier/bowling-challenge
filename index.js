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
    this.score = 0;
    this.bonus = 0;
    this.previous_frame = previous_frame;
  }

  addRoll(roll) {
    this.rolls.push(roll);
    this.score += roll.nb_of_pins;
  }

  isFinished() {
    if (this.number != 10) {
      return (
        this.rolls[0].nb_of_pins == 10 ||
        this.rolls.length == 2
      )
    }
    // strike or spare?
    if (this.score >= 10) {
      return this.rolls.length === 3
    }
    return this.rolls.length === 2
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

    } else if (this.current_frame.isFinished() == false) {
      // if the current frame is not finished
    } else {
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
      score += this.past_frames[i].score;
    }
    if (this.current_frame != undefined) {
      score += this.current_frame.score;
    }
    return score;
  }

  isFinished() {
    return (
      this.past_frames.length === 9 &&
      this.current_frame.isFinished()
    );
  }
}
