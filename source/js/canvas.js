$(document).ready(function() {
  // show phase 1 on pg load
  $("#phase-1").show();

  // title-slider handler
  $('body').on('click', '.title-slider-nav', function() {
    var phaseTarget = $(this).attr("data-target");
    $('.phase-wrapper').hide();
    $(phaseTarget).show();
  });

});