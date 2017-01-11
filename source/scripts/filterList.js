$(document).ready(function() {

  $(".api").on('click', function() {
    window.location.href = '/cases.html?#api';
  });

  $(".trusted-intermediary").on('click', function() {
    window.location.href = '/cases.html?#trusted-intermediary';
  });

  $(".data-pooling").on('click', function() {
    window.location.href = '/cases.html?#data-pooling';
  });

  $(".prizes-challenges").on('click', function() {
    window.location.href = '/cases.html?#prizes-challenges';
  });

  $(".research-partnerships").on('click', function() {
    window.location.href = '/cases.html?#research-partnerships';
  });

  $(".intelligence-product").on('click', function() {
    window.location.href = '/cases.html?#intelligence-product';
  });

  $("#data-type").on('click', function() {
    var elm = $(this);
    var elmClass = elm.attr("class");
    window.location.href = '/cases.html?#' + elmClass;
  });

  $("#data-sector").on('click', function() {
    var elm = $(this);
    var elmClass = elm.attr("class");
    window.location.href = '/cases.html?#' + elmClass;
  });

})
