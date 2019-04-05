// Business logic
var beepException = [1];
var boopException = [2];
var userNameException = [3];


function count(userNumber) {
  var result = [];
  for (var i = 0; i <= userNumber; i++) {
    if (i.toString().includes("32")) {
      result.push(i + " I'm sorry Dave. I'm afraid I can't do that");
    }
    else if (i.toString().includes ("21")) {
      result.push(i + " Boop!");
    }
    else if (i.toString().includes("13")) {
      result.push(i + " I'm sorry Dave. I'm afraid I can't do that")
    }
    if (i.toString().includes("3")) {
      result.push(i + " I'm sorry Dave. I'm afraid I can't do that");
    }
    else if (i.toString().includes ("2")) {
      result.push(i + " Boop!");
    }
    else if (i.toString().includes("1")) {
      result.push(i + " Beep!")
    }
    else result.push(" " + i);
  }
  return result;
};

// User Interface Logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#userNumber").val());
    var output = count(userNumber);
    $("#output").text(output);
  });
});
