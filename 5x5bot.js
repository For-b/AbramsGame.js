const brain = require('brain.js');

const network = new brain.NeuralNetwork();

network.train([
    { input: [1, 1, 1, 1, 1], output: [5] },
    { input: [1, 1, 1, 1, 0], output: [4] },
    { input: [1, 1, 1, 0, 0], output: [3] },
    { input: [1, 1, 0, 0, 0], output: [2] },
    { input: [1, 0, 0, 0, 0], output: [1] },
    { input: [0, 0, 0, 0, 0], output: [0] }
])

const output = network.run([1, 1, 1, 1, 1]);

console.log(`Output: ${output}`);
