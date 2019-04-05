// Business logic
// var beepException = [1];
// var boopException = [2];
// var userNameException = [3];
//
//
function count(userNumber) {
  var userNumber = parseInt($("input#userNumber").val());
  var userName = $("input#userName").val();
  var result = [];
  for (var i = 0; i <= userNumber; i++) {
    if (i.toString().includes("32")) {
      result.push(" I'm sorry " + userName + ", I'm afraid I can't do that");
    }
    else if (i.toString().includes ("21")) {
      result.push(" Boop!");
    }
    else if (i.toString().includes("13")) {
      result.push(" I'm sorry " + userName + ", I'm afraid I can't do that");
    }
    else if (i.toString().includes("3")) {
      result.push(" I'm sorry " + userName + ", I'm afraid I can't do that");
    }
    else if (i.toString().includes ("2")) {
      result.push(" Boop!");
    }
    else if (i.toString().includes("1")) {
      result.push(" Beep!");
    }
    else result.push(" " + i);
  }
  return result;
};

// User Interface Logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var output = count(userNumber);
    $("#output").text(output);
  });
});
