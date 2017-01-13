$(document).ready(function() {
  // show phase 1 on pg load
  $("#phase-1").show();

  // title-slider handler
  $('body').on('click', '.title-slider-nav', function() {
    var phaseTarget = $(this).attr("data-target") || "#phase-1";
    displayPhases(phaseTarget);
  });

  // next handler
  $('body').on('click', '.next-phase', function(e) {
    var phaseTarget = $(this).attr("data-phase-target") || "#phase-1";
    displayPhases(phaseTarget);
  });

  // // touch next handler
  $('.next-phase').on('click touchend', function() { 
    var phaseTarget = $(this).attr("data-phase-target") || "#phase-1";
    displayPhases(PhaseTarget); 
  });  
  
  // Canvas arrows
  $('.title-slider').on("afterChange", function() {
    var phaseTarget = $(this).find('.slick-current').attr('data-target') || "#phase-1";
    displayPhases(phaseTarget);
  });

  // url map to phase
  if (window.location.hash !== '') {
    var urlPhaseTarget = window.location.hash;
    displayPhases(urlPhaseTarget);
  }

  function displayPhases(target) {
    $('.phase-wrapper').hide();
    $(target).show();
    window.location.hash = target;
    $(document).scrollTop(0);
  }

});
