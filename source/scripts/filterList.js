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

  $("h2#data-filter-container span").on('click', function() {
    var elm = $(this).children();
    var elmClass = elm.attr("class");
    window.location.href = '/cases.html?#' + elmClass;
  });

})
