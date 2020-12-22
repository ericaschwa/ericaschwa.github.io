// JavaScript

import * as tf from '@tensorflow/tfjs';
console.log("?")

const m = await tf.loadLayersModel('model.json');
console.log("loaded")

state = []
for (i = 0; i < 1240; i++) {
	state.push(0)
}
possible_actions = []
for (i = 0; i < 180; i++) {
	possible_actions.push(0)
{
console.log("will make prediction")
const prediction = m.predict([state, possible_actions]);
