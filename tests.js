var tests = [

  function testingNewRoll(){
    var roll = new Roll(4);
    assert(roll.nb_of_pins === 4);
  },

  function newFrame(){
    var frame = new Frame(1);
    assert(frame.rolls.length === 0);
    assert(frame.getScore() === 0);
    assert(frame.expectedBonus === 0);
    assert(frame.bonusRolls.length === 0);
    assert(frame.number === 1);
    assert(frame.previous_frame === undefined);
  },

// Games
  function newGame(){
    var game = new Game();
    assert(game.getScore() === 0);
  },
  function addFirstRoll(){
    var game = new Game();
    game.addRoll(6);
    assert(game.getScore() === 6);
  },
  function addSecondRoll(){
    var game = new Game();
    game.addRoll(6);
    game.addRoll(3);
    assert(game.getScore() === 9);
  },
  function addThirdRoll(){
    var game = new Game();
    game.addRoll(6);
    game.addRoll(3);

    game.addRoll(3);
    assert(game.getScore() === 12);
  },
  function normalGame(){
    var game = new Game();
    // 1
    game.addRoll(6);
    game.addRoll(3);
    // 2
    game.addRoll(6);
    game.addRoll(3);
    // 3
    game.addRoll(6);
    game.addRoll(3);
    // 4
    game.addRoll(6);
    game.addRoll(3);
    // 5
    game.addRoll(6);
    game.addRoll(3);
    // 6
    game.addRoll(6);
    game.addRoll(3);
    // 7
    game.addRoll(6);
    game.addRoll(3);
    // 8
    game.addRoll(6);
    game.addRoll(3);
    // 9
    game.addRoll(6);
    game.addRoll(3);
    // 10
    game.addRoll(6);
    game.addRoll(3);

    assert(game.getScore() === 90);
    assert(game.isFinished() === true);
  },
  function strikeOnLastFrame(){
    var game = new Game();
    // 1
    game.addRoll(6);
    game.addRoll(3);
    // 2
    game.addRoll(6);
    game.addRoll(3);
    // 3
    game.addRoll(6);
    game.addRoll(3);
    // 4
    game.addRoll(6);
    game.addRoll(3);
    // 5
    game.addRoll(6);
    game.addRoll(3);
    // 6
    game.addRoll(6);
    game.addRoll(3);
    // 7
    game.addRoll(6);
    game.addRoll(3);
    // 8
    game.addRoll(6);
    game.addRoll(3);
    // 9
    game.addRoll(6);
    game.addRoll(3);
    // 10
    game.addRoll(10);
    // bonus frame
    game.addRoll(3);
    game.addRoll(3);

    assert(game.getScore() === 97);
    assert(game.isFinished() === true);
  },
  function strikeOnLastFrameUnfinished(){
    var game = new Game();
    // 1
    game.addRoll(6);
    game.addRoll(3);
    // 2
    game.addRoll(6);
    game.addRoll(3);
    // 3
    game.addRoll(6);
    game.addRoll(3);
    // 4
    game.addRoll(6);
    game.addRoll(3);
    // 5
    game.addRoll(6);
    game.addRoll(3);
    // 6
    game.addRoll(6);
    game.addRoll(3);
    // 7
    game.addRoll(6);
    game.addRoll(3);
    // 8
    game.addRoll(6);
    game.addRoll(3);
    // 9
    game.addRoll(6);
    game.addRoll(3);
    // 10
    game.addRoll(10);

    assert(game.getScore() === 91);
    assert(game.isFinished() === false);
  },
  function spareOnLastFrameUnfinished(){
    var game = new Game();
    // 1
    game.addRoll(6);
    game.addRoll(3);
    // 2
    game.addRoll(6);
    game.addRoll(3);
    // 3
    game.addRoll(6);
    game.addRoll(3);
    // 4
    game.addRoll(6);
    game.addRoll(3);
    // 5
    game.addRoll(6);
    game.addRoll(3);
    // 6
    game.addRoll(6);
    game.addRoll(3);
    // 7
    game.addRoll(6);
    game.addRoll(3);
    // 8
    game.addRoll(6);
    game.addRoll(3);
    // 9
    game.addRoll(6);
    game.addRoll(3);
    // 10
    game.addRoll(7);
    game.addRoll(3);

    assert(game.getScore() === 91);
    assert(game.isFinished() === false);
  },
  function strikeScoring(){
    var game = new Game();
    // 1
    game.addRoll(10);
    // 2
    game.addRoll(3);
    game.addRoll(3);

    assert(game.getScore() === 22);
  },
  function multipleStrikeScoring(){
    var game = new Game();
    // 1
    game.addRoll(10);
    // 2
    game.addRoll(10);
    // 3
    game.addRoll(3);
    game.addRoll(3);

    assert(game.getScore() === 23 + 16 + 6);
  },
  function perfectGame(){
    var game = new Game();
    // 1
    game.addRoll(10);
    // 2
    game.addRoll(10);
    // 3
    game.addRoll(10);
    // 4
    game.addRoll(10);
    // 5
    game.addRoll(10);
    // 6
    game.addRoll(10);
    // 7
    game.addRoll(10);
    // 8
    game.addRoll(10);
    // 9
    game.addRoll(10);
    // 10
    game.addRoll(10);

    game.addRoll(10);
    game.addRoll(10);

    console.log(game.getScore());
    console.log(game);
    window.game = game;

    assert(game.getScore() === 300);
    assert(game.isFinished() === true);
  },
];

testAndDisplay(tests);
