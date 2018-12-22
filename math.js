const brain = require('brain.js');
const data = require('./team.json');

const network = new brain.NeuralNetwork();

const trainingData = data.map(item => ({
    input: item.input,
    output: item.output
}));

network.train(trainingData, {
    iterations: 2000
})

const output = network.run([1, 1]);

console.log(`Output: ${output}`);
