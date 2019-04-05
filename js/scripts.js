// Business logic
function count(userNumber) {
  var result = [""];
  for (var i = 0; i <= userNumber; i++) {
    if (i.toString().includes("3")) {
        alert("there's a 3");
    }
    else if (i.toString().includes("2")) {
        alert("there's a 2");
    }
    else if (i.toString().includes("1")) {
        alert("there's a 1");
    }
    else {
      result += i;
    }
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
