// $(document).ready(function() {
//
// var animal = $("#animalChooser").val();
//
// if (animal === "0") {
//   $("#turtleInfo").show();
// } else if (animal === "1") {
//   $("#snakeInfo").show();
// } else (animal === "2") {
//   $("#cheetahInfo").show();
// }
// });


$(document).ready(function() {
$("form#animalChooser").submit(function(event) {

    event.preventDefault();

  var animal = parseInt($("select").val());
  console.log(animal);

  if (animal === 1) {
    $("#turtle").show();
  } else if (animal === 2) {
    $("#snake").show();
  } else if (animal === 3) {
    $("#cheetah").show();
  } else {
    alert("Something has gone wrong.  Try again, please.")
  }

  });
});
