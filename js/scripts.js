// Business logic
function count(userNumber) {
  var result = "";
  for (var i = 0; i <= userNumber; i++) {
    result += i;
  }
  return result;
};
// User Interface Logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#userNumber").val());
    console.log("userNumber", userNumber);
    var output = count(userNumber)
    console.log("output", output);
    $("#output").text(output);
  });
});
