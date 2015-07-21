function testerFunc() {
  var inputBox = document.getElementById("num_input");
  var userInput = inputBox.value;
  if(userInput === "") {
    alert("Please enter a number.");
  } else if (userInput > 10000) {
    mathFunc(userInput, diviFunc);
  } else if (userInput < 10000) {
    mathFunc(userInput, multiFunc);
  } else {
    writeFunc("<span class='party'>You found the edge case!<br>WOOO PARTY!</span>");
  }
  inputBox.value = "";
}

var diviFunc = function(sentArg) {
  return sentArg + " divided by ten is " + sentArg / 10;
}

var multiFunc = function(sentArg) {
  return sentArg + " multiplied by 5 is " + sentArg * 5;
}

var mathFunc = function(sentValue, sentFunc) {
    writeFunc(sentFunc(sentValue));
}

var writeFunc = function(sentValue) {
  document.getElementById("content").innerHTML = sentValue;
}

var calcButton = document.getElementById("calculate");

calcButton.onclick = testerFunc;