for (var number = 1; number <= 100; number++){
	if (number%3 == 0 && number%5 == 0) {
		document.write("<p> fizzbuzz </p>");
	}
	else if (number % 5 ==0) {
		document.write("<p> buzz </p>");
	}
	else if (number % 3 ==0) {
		document.write("<p> fizz </p>");
	}
	else {
		document.write("<p>" + number + "</p>");
	}
}

