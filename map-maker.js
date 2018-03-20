var inquirer = require("inquirer");

let X = 25;
let Y = 25;

let horizontal = 2;
let vertical = 2;

let output = [];

function drawMap() {
	for (var iY = 0; iY < Y; iY++) {
		for (var iX = 0; iX < X; iX++) {
			if (iY === horizontal && iX === vertical) {
				// horizontal.splice(ix, 0, 1);
				output.push("O ");
			}else {
				output.push("- ");
			};
		};

		console.log(output.join(""));
		output = [];
	};

	inquirer.prompt([

		{
			type: "input",
			name: "name",
			message: "What is your name?"
		},
		{
			type: "list",
			name: "direction",
			message: "What direction would you like to go? (ASWD)",
			choices: [
				"North",
				"East",
				"South",
				"West"
			]
		}

	]).then(function(input) {

		console.log(input);
		switch (input.direction) {
			case "w":
				horizontal--;
				break;
			case "s":
				horizontal++;
				break;
			case "a":
				vertical--;
				break;
			case "d":
				vertical++;
				break;
			default:
				console.log("Oops, no input detected.");
			};
			// drawMap()
	});
};

drawMap();