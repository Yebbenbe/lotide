const head = require('../head');
const assertEqual = require('../assertEqual');


// test cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([4,6,7]), 5);
assertEqual(head(["banan", "Lighthouse", "Labs"]), "Hello");