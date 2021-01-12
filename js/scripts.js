$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  })
  $(".click").click(function() {
    $("#cat-showing").toggle();
    $("#cat-hidden").toggle();
  }); 
});