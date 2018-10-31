/* testing helpers */
const appendResult = function (div, name, passed, error) {
    let title;
    if (passed) {
        title = document.createElement('p');
        title.className = 'pass';
        title.innerText = 'Test ' + name + ' passed';
        div.appendChild(title);
    } else {
        title = document.createElement('p');
        title.innerText = 'Test ' + name + ' failed with ' + error;
        title.className = 'fail';
        div.appendChild(title);
        const stack = document.createElement('p');
        stack.innerText = error.stack;
        div.appendChild(stack);
    }
    const sep = document.createElement('hr');
    div.appendChild(sep);
};


const testAndDisplay = function(tests) {
    const results = document.getElementById('tests');
    const sep = document.createElement('hr');
    results.appendChild(sep);
    for (let i = 0; i < tests.length; i++) {
        let passing = true;
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
};

const assert = function(assertion) {
    if (!assertion) {
        throw new Error('expected ' + assertion.toString() + ' to be true.');
    }
};
