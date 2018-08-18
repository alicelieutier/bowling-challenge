/* testing helpers */
function appendResult(div, number, passed, error) {
  if (passed) {
    var title = document.createElement('p');
    title.className = 'pass';
    title.innerText = "Test #" + number + " passed";
    div.appendChild(title);
  } else {
    var title = document.createElement('p');
    title.innerText = "Test #" + number + " failed with " + error;
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
      appendResult(results, i, false, e);
    } finally {
      if (passing == true) {
        appendResult(results, i, true);
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
  function(){
    /* testing rolls */
    // I can create a roll with a number of nb_of_pins
    var roll = new Roll(0);
    assert(roll.nb_of_pins == 2);
  },
  function(){
    /* testing rolls */
    // I can create a roll with a number of nb_of_pins
    var roll = new Roll(10);
    assert(roll.nb_of_pins == 10);
  },
];
testAndDisplay(tests);
