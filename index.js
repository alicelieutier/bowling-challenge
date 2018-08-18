class Roll {
  constructor(nb_of_pins) {
    if (nb_of_pins < 0 || nb_of_pins > 10) {
      throw new Error("Wrong number of pins");
    }
    this.nb_of_pins = nb_of_pins
  }
}

class Frame {
  constructor(id, previous_id = undefined) {
    this.id = id;
    this.past_rolls = [];
    this.score = 0;
    this.bonus = 0;
  }

  addRoll(roll) {
    this.past_rolls.push(roll);
    this.score += roll.nb_of_pins;
  }
}

class Game {
  constructor() {
    this.past_frames = [];
  }

  addRoll(nb_of_pins) {
    var roll = new Roll(nb_of_pins);
    // is this the first frame
    if (this.current_frame === undefined) {
      this.current_frame = new Frame(0);
      this.current_frame.addRoll(roll);
    }
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
}
