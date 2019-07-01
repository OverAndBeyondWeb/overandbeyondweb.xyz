var calcScreen, clear, divide, multiply, backSpace, seven, eight, nine, minus, four, five, six, plus, one, two, three, parentheses, zero, decimal, posNeg, equals;

$(document).ready(function() {

	//get elements
	var i = 0;
	
	calcScreen = $("#calcScreen");
	numWindow1 = $("#numWindow1");
	numWindow2 = $("#numWindow2");
	opWindow = $("#operationWin");
	operator = $(".operator");
	numbers = $(".numbers");
	clear = $("#clear");
	divide = $("#divide");
	multiply = $("#multiply");
	backSpace = $("#backSpace");
	seven = $("#seven");
	eight = $("#eight");
	nine = $("#nine");
	minus = $("#minus");
	four = $("#four");
	five = $("#five");
	six = $("#six");
	plus = $("#plus");
	one = $("#one");
	two = $("#two");
	three = $("#three");
	parentheses = $("#parentheses");
	zero = $("#zero");
	decimal = $("#decimal");
	posNeg = $("#posNeg");
	equals = $("#equals");
	var currentNum = "";
	var firstNum = "";
	var operation;
	numWindow1.text("0");
	
	$(numbers).click(function(){
		var buttonText = $(this).text();
		var buttonNumber = Number(buttonText);
		currentNum += buttonNumber;
		//console.log(currentNum);
		if(firstNum == ""){
			numWindow1.text(currentNum);
		}else{
			numWindow2.text(currentNum);
		};
	});
	
	$(decimal).click(function(){
		if(currentNum.indexOf(".") >= 0){
			alert("error, no more than 1 decimal per entry");
		}else{
			currentNum += ".";
			if(firstNum == ""){
				numWindow1.text(numWindow1.text() + ".");
			}else{
				numWindow2.text(numWindow2.text() + ".");
			};
		};
	});
	
	$(posNeg).click(function(){
		if(currentNum.indexOf("-") >= 0){
			currentNum = currentNum.slice(1);
			if(firstNum == ""){
				numWindow1.text(currentNum);
			}else{
				numWindow2.text(currentNum);
			};	
		}else{
			currentNum = "-" + currentNum;
			if(firstNum == ""){
			numWindow1.text(currentNum);
			}else{
				numWindow2.text(currentNum);
			};
		};
		
	});
	
	$(operator).click(function(){
		numWindow2.text("0");
		$(opWindow).text($(this).text());
		operation = $(opWindow).text();
		firstNum = currentNum;
		currentNum = "";
		//console.log(operation);
			
	});
	
	$(equals).click(function(){
		var answer
		numWindow2.text("");
		firstNum = Number(firstNum);
		currentNum = Number(currentNum);
		console.log(firstNum);
		console.log(currentNum);
		console.log(operation);
		if(operation.indexOf("+") >= 0){
			answer = firstNum + currentNum;
		}else if(operation.indexOf("-") >= 0){
			answer = firstNum - currentNum	
		}else if(operation.indexOf("×") >= 0){
			answer = firstNum * currentNum
		}else if(operation.indexOf("÷") >= 0){
			answer = firstNum / currentNum
		};
		answer = String(answer);
		currentNum = answer;
		numWindow1.text(answer);
		$(opWindow).text("=");	

	});
	
	$(clear).click(function(){
			numWindow1.text("0");
			numWindow2.text("");
			firstNum = "";
			currentNum ="";
			$(opWindow).text("");
	});
	
	$(backSpace).click(function(){
		currentNum = currentNum.slice(0, currentNum.length-1);
		if(firstNum == ""){
			numWindow1.text(currentNum);
			}else{
				numWindow2.text(currentNum);
			};
	});
	
	
	$(document).keypress(function(event){
		var keycode = (event.keycode ? event.keycode : event.which);
		if(keycode ===49){
			$('#one').click();		
		}else if(keycode ===50){
			$('#two').click();		
		}else if(keycode ===51){
			$('#three').click();	
		}else if(keycode ===52){
			$('#four').click();	
		}else if(keycode ===53){
			$('#five').click();	
		}else if(keycode ===54){
			$('#six').click();	
		}else if(keycode ===55){
			$('#seven').click();	
		}else if(keycode ===56){
			$('#eight').click();	
		}else if(keycode ===57){
			$('#nine').click();	
		}else if(keycode ===48){
			$('#zero').click();		
		}else if(keycode ===61){
			$('#equals').click();	
		}else if(keycode ===43){
			$('#plus').click();	
		}else if(keycode ===45){
			$('#minus').click();	
		}else if(keycode ===42 || keycode ===120){
			$('#multiply').click();	
		}else if(keycode ===47){
			$('#divide').click();	
		}
	});
});