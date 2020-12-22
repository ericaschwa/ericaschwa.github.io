// JavaScript
console.log("?");
console.log("loaded");

async function testModel() {
    const model = await tf.loadLayersModel('model.json');
    state = [];
	for (i = 0; i < 1240; i++) {
		state.push(0);
	}
	possible_actions = [];
	for (i = 0; i < 180; i++) {
		possible_actions.push(0);
	}
	console.log("will make prediction");
}

testModel();

// prediction = m.predict([state, possible_actions]);
