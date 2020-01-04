let output = document.getElementById('output');
let lbsInput = document.getElementById('lbsInput');
let gramsOutput = document.getElementById('gramsOutput');
let kgOutput = document.getElementById('kgOutput');
let ozOutput = document.getElementById('ozOutput');

output.style.visibility = 'hidden';

lbsInput.addEventListener('input', function(e) {
    let lbs = e.target.value;

    gramsOutput.innerHTML = lbs / 0.0022046;
    kgOutput.innerHTML = lbs / 2.2046;
    ozOutput.innerHTML = lbs * 16;
    output.style.visibility = 'visible';
});