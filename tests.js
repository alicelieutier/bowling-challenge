/* testing helpers */
function appendResult(div, name, passed, error) {
  if (passed) {
    var title = document.createElement('p');
    title.className = 'pass';
    title.innerText = "Test " + name + " passed";
    div.appendChild(title);
  } else {
    var title = document.createElement('p');
    title.innerText = "Test " + name + " failed with " + error;
    title.className = 'fail';
    div.appendChild(title);
    var stack = document.createElement('p');
    stack.innerText = error.stack;
    div.appendChild(stack);
  }
  var sep = document.createElement('hr');
  div.appendChild(sep);
}


function testAndDisplay(tests) {
  var results = document.getElementById('tests');
  var sep = document.createElement('hr');
  results.appendChild(sep);
  for (var i = 0; i < tests.length; i++) {
    var passing = true;
    try {
      tests[i]();
    } catch (e) {
      passing = false;
      appendResult(results, tests[i].name, false, e);
    } finally {
      if (passing === true) {
        appendResult(results, tests[i].name, true);
      }
    }
  }
}

function assert(assertion) {
  if (!assertion) {
    throw new Error("expected " + assertion.toString() + " to be true.");
  }
}

var tests = [
  function testingNewRoll(){
    /* testing rolls */
    // I can create a roll with a number of nb_of_pins
    var roll = new Roll(4);
    assert(roll.nb_of_pins === 4);
  },
  function testingNewFrame(){
    /* testing rolls */
    // I can create a roll with a number of nb_of_pins
    var frame = new Frame(23);
    assert(frame.id === 23);
    assert(frame.past_rolls.length === 0);
    assert(frame.current_roll === undefined)
    assert(frame.score === 0);
    assert(frame.bonus === 0);
  },
];
testAndDisplay(tests);
