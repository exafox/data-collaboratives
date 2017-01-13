$(window).load(function() {
  var screenWidth = $(window).width();

  if (screenWidth <= 1280) {
    $(".top-section--bg").css("background-image", "url('/images/video/long-img.png')");
  } else if (screenWidth > 1280) {
    $(".top-section--bg").css("background-image", "none");
  }
})

$(window).resize(function() {
  var screenWidth = $(window).width();

  if (screenWidth <= 1280) {
    $(".top-section--bg").css("background-image", "url('/images/video/long-img.png')");
  } else if (screenWidth > 1280) {
    $(".top-section--bg").css("background-image", "none");
  }
});
