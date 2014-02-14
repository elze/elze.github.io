/*
 * $(document).ready() is a helper function that waits until the jQuery library is fully loaded in your Browser before it tries to use it.
*/
$(document).ready(function() {
  /*
   * This function waits and listens for a "click" to happen on the div with the class name "hackentines-day-card-container"
  */
  $(".hackentines-day-card-container").on("click", function() {
    $(".card").toggle();
    /*
      If you like, Try this instead!
      $(".card").slideToggle();
      or, try this!
      $(".card").fadeToggle();
    */
  });

//animateTheHeart();

$(".happy").hide();
$(".valentines").hide();
$(".day").hide();


$(".happy").show(3000);
$(".valentines").show(2000);
$(".day").show(1000);

//function animateTheHeart() {
  var timer = setInterval(function() {
 $(".heart-picture").fadeOut(1000);
 $(".heart-picture").fadeIn(1000);
}, 3000);
//}
});

