$(document).ready(function () {
  $(".title").click(function () {
    console.log("clicked");
    $(".container").addClass("open");
  });

  $(".close").click(function () {
    $(".container").removeClass("open");
  });
});
