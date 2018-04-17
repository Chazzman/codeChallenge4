const fs = require('fs');

fs.readFile('./input.txt', (error, rawData) => {
	if (!error) {
		console.time('funchallenge'); 
		let total = 0;
		const rawLen = rawData.length;
		for (let ix = 0; ix < rawLen; ix++) {
			rawData[ix] === 40 ? total++ : total--
		};
		console.timeEnd('funchallenge');
		// console.log(`Santa must climb ${total} floors!`);
	} else {
		console.error(`ERROR: ${error}`);
	}
});