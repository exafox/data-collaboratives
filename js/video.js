$(window).load(function() {
  var screenWidth = $(window).width();

  if (screenWidth <= 1200) {
    $(".top-section--bg").css("background-image", "url('/images/video/long-img.png')");
  } else {
    $(".top-section--bg").css("background-image", "none");
    $(".top-section--bg").css("background-color", "transparent");
  }
});

$(window).resize(function() {
  var screenWidth = $(window).width();

  if (screenWidth <= 1200) {
    $(".top-section--bg").css("background-image", "url('/images/video/long-img.png')");
  } else {
    $(".top-section--bg").css("background-image", "none");
    $(".top-section--bg").css("background-color", "transparent");
  }
});
