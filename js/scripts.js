// Business logic
function count(userNumber) {
  var result = [];
  for (var i = 0; i <= userNumber; i++) {
    if (i.toString().includes("3")) {
        result.push(["I'm sorry Dave. I'm afraid I can't do that!"]);
    }
    else result += i;
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
