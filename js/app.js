for (var number = 1; number <= 100; number++){
	if (number % 3 != 0) {
		console.log("fizz")
	}
	else if (number % 5 !=0) {
		console.log("buzz")
	}
	else if (number % 3 !=0, number % 5 !=0) {
		console.log("fizzbuzz")
	}
	else {
		console.log(number)
	}
}


// I need to somehow get the first IF statement
// and the first ELSE IF statement to only print
// when the number is divisible by 3 or 5, not
// both. (Copy code into Console to see the issue)