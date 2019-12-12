
function calculator(){
	// parse input
	var num1 = document.getElementById("numberOne").value;
	num1 = parseFloat(num1);
	var operator = document.getElementById("operator").value;
	var num2 = document.getElementById("numberTwo").value;
	num2 = parseFloat(num2);
	var result;
	
	// do math
	if (operator == "+"){
		result = num1 + num2;
	}
	else if (operator == "-"){
		result = num1 - num2;
	}
	else if (operator == "*"){
		result = num1 * num2;
	}
	else if (operator == "/"){
		if (num2==0){
			result = 0;
		}
		else{
			result = num1 / num2;
		}
	}
		
	else {
		result = 0;
	}
	

	// write results
	var currentCalc = num1 + " " + operator + " " + num2 + " = " + result;
	//document.getElementById("one").value = "test";
	
	document.getElementById("five").value = document.getElementById("four").value;
	document.getElementById("four").value = document.getElementById("three").value;
	document.getElementById("three").value = document.getElementById("two").value;
	document.getElementById("two").value = document.getElementById("one").value;
	document.getElementById("one").value = currentCalc;

}



document.getElementById("calculate").onclick = calculator;