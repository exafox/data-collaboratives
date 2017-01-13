$(document).ready(function() {

  $(".api").on('click', function() {
    window.location.href = '/explorer.html?#api';
  });

  $(".trusted-intermediary").on('click', function() {
    window.location.href = '/explorer.html?#trusted-intermediary';
  });

  $(".data-pooling").on('click', function() {
    window.location.href = '/explorer.html?#data-pooling';
  });

  $(".prizes-challenges").on('click', function() {
    window.location.href = '/explorer.html?#prizes-challenges';
  });

  $(".research-partnerships").on('click', function() {
    window.location.href = '/explorer.html?#research-partnerships';
  });

  $(".intelligence-product").on('click', function() {
    window.location.href = '/explorer.html?#intelligence-product';
  });

  $("h2#data-filter-container span").on('click', function() {
    var elm = $(this).children();
    var elmClass = elm.attr("class");
    window.location.href = '/explorer.html?#' + elmClass;
  });

})
