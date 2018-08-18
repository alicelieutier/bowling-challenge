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
    this.current_roll = undefined;
    this.score = 0;
    this.bonus = 0;
  }
}
