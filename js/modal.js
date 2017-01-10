$(document).ready(function(){
  var currentScroll = 0;

  function lockscroll(){
    $(window).scrollTop(currentScroll);
  }
  // Modal Click Behavior
  $('.js-open-modal').click(function () {
      $(this).find('.js-target-modal').addClass('js-active');
      currentScroll=$(window).scrollTop();
      $(window).bind('scroll',lockscroll);
      $('#overlay').addClass('js-active');
      $('body').addClass('js-body-modal-active');
  });

  // Prevent default on footer close
  $('footer .js-close-modal').on('click', function(e) {
    e.preventDefault();
  })

  $('body').on("click", '.js-close-modal', function () {
      currentScroll=$(window).scrollTop();
      $(window).unbind('scroll');
      $('.js-target-modal').removeClass('js-active');
      $('#overlay').removeClass('js-active');
      $('body').removeClass('js-body-modal-active');
  });

  // General Click Behavior for Overlay
  $('#overlay').click(function () {
      $('.js-active').removeClass('js-active');
      currentScroll=$(window).scrollTop();
      $(window).unbind('scroll');
      $('.js-active-menu').removeClass('js-active-menu');
      $('body').removeClass('js-body-modal-active');
  });

});
