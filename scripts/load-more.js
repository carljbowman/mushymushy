$(document).ready(function(){
  $(".load-element").slice(0, 16).show();
  $("#load-more").on("click", function(e){
    e.preventDefault();
    $(".load-element:hidden").slice(0, 8).fadeIn(800);
    $("#load-more").blur();
    if($(".load-element:hidden").length == 0) {
      $("#load-more").text("Loaded").addClass("loaded");
    }
  });
})
