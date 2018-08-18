var tests = [
  function testingNewRoll(){
    var roll = new Roll(4);
    assert(roll.nb_of_pins === 4);
  },
  function newFrame(){
    var frame = new Frame(23);
    assert(frame.id === 23);
    assert(frame.past_rolls.length === 0);
    assert(frame.score === 0);
    assert(frame.bonus === 0);
  },
  function newGame(){
    var game = new Game();
    assert(game.past_frames.length === 0);
    assert(game.getScore() === 0);
  },
  function addFirstRoll(){
    var game = new Game();
    game.addRoll(6);
    assert(game.past_frames.length === 0);
    assert(game.current_frame.score === 6);
    assert(game.getScore() === 6);
  },
];

testAndDisplay(tests);
