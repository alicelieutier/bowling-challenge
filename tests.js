var tests = [
  function testingNewRoll(){
    var roll = new Roll(4);
    assert(roll.nb_of_pins === 4);
  },
  function newFrame(){
    var frame = new Frame(1);
    assert(frame.rolls.length === 0);
    assert(frame.score === 0);
    assert(frame.bonus === 0);
    assert(frame.number === 1);
    assert(frame.previous_frame === undefined);
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
    assert(game.getScore() === 6);
  },
  function addSecondRoll(){
    var game = new Game();
    game.addRoll(6);
    game.addRoll(3);
    assert(game.past_frames.length === 0);
    assert(game.getScore() === 9);
  },
];

testAndDisplay(tests);
