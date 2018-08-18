var tests = [
  function testingNewRoll(){
    var roll = new Roll(4);
    assert(roll.nb_of_pins === 4);
  },
  function testingNewFrame(){
    var frame = new Frame(23);
    assert(frame.id === 23);
    assert(frame.past_rolls.length === 0);
    assert(frame.current_roll === undefined)
    assert(frame.score === 0);
    assert(frame.bonus === 0);
  },
];

testAndDisplay(tests);
