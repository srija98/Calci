function getOutput() {
	return document.getElementById("output_value").innerText;

}

function printHistory(num) {
	document.getElementById("history_value").innerText = num;

}
// printHistory("9*67");

function getHistory() {
	return document.getElementById("history_value").innerText;

}

function getformatedNumber(num) {
	if (num == "-")
		return "";
	var x = Number(num);
	var y = x.toLocaleString("en");
	return y;
}

function printOutput(num) {
	if (num == "") {
		document.getElementById("output_value").innerText = num;
	} else {
		document.getElementById("output_value").innerText = getformatedNumber(num);
	}
}
//printOutput("9939");

function rev_number_format(num) {
	return Number(num.replace(/,/g, ''));
}


// When u click an operator...............................
var operator = document.getElementsByClassName("operator");

for (var i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click', function() {
		// alert("clicked"+this.id);
		if (this.id == "clear") {
			printOutput("");
			printHistory("");
		} else if (this.id == "backspace") {
			var output = rev_number_format(getOutput()).toString();
			// alert("clicked"+this.id+output);
			output = output.substr(0, output.length - 1);
			printOutput(output);
		} else {
			var output = getOutput();
			var history = getHistory();
			if (output != "") {
				output = rev_number_format(output);
				history = history + output;
				if (this.id == "=") {
					var x = eval(history);
					printOutput(x);
					printHistory("");
				} else {
					history = history + this.id;
					printHistory(history);
					printOutput("");
				}
			}

		}

	});
}

//When u click a number...............................
var number = document.getElementsByClassName("number");

for (var i = 0; i < number.length; i++) {
	number[i].addEventListener('click', function() {
		var output = rev_number_format(getOutput());
		if (output != NaN) {
			output = output + this.id;
			printOutput(output);

		}
	});
}
