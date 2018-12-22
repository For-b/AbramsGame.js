const brain = require('brain.js');

const network = new brain.NeuralNetwork();

network.train([
    { input: [1, 2], output: [1] }, //Team 2 wins
    { input: [1, 3], output: [1] }, //Team 3 wins
    { input: [2, 3], output: [0] }, //Team 2 wins
    { input: [2, 4], output: [1] }  //Team 4 wins
])

const output = network.run([0, 0]);

console.log(`Prob: ${output}`);
