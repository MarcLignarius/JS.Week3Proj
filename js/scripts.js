// Business logic

// User Interface Logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#userNumber").val());
    console.log(userNumber);
    $("#output").text(userNumber);
  });
});
