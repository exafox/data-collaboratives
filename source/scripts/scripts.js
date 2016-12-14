$(document).ready(function() {
  // FUZZY SEARCH
  var fuzzyOptions = {
    searchClass: "fuzzy-search",
    location: 0,
    distance: 100,
    threshold: 0.4,
    multiSearch: true
    };

  var options = {
    valueNames: [ "case__title", "case__region", "case__sector", "case__type", "case__data-type" ],
    plugins: [ ListFuzzySearch() ]
  };

  var caseList = new List('case_data', options);

  //SORT LIST ON DOC READY
  caseList.sort('case__title', { order: "asc" });

  // SEARCH RESET
  function searchReset() {
    $(".fuzzy-search").val("");
    // clearTextSearch();
    caseList.search();
  }

  // DROPDOWN FILTERS
  var allFilters = $(".dropdown-wrapper select");
  var searchQueries = {};

  allFilters.on("change", function() {
    filterList();
  });

  function filterList() {
    allFilters.each(function(idx, selection) {
      $(selection).each(function(idx, option) {
        var filterSelection = $(this).attr("data-filter");
        var option = $(this).children(":selected").attr("id");
        // searchQueries[filterSelection] = option;
      });
    });
    // FILTER WITH DROPDOWNS
    caseList.filter(function(item) {

      // if (item.values()["case__region"] !== null && item.values()["case__type"] !== null && item.values()["case__sector"] !== null && item.values()["case__type"].includes(searchQueries["case_type"])) {
      //   return true;
      // } else {
      //   return false;
      // }
    })
  };

  // if (item.values()["company__provinces"] !== null && item.values()["company__provincial-sources"] !== null && item.values()["company__other-sources"] !== null && item.values()["company__data-sectors"] !== null && item.values()["company__federal-sources"] !== null && item.values()["company__provincial-sources"].includes(searchQueries["company__provincial-sources"]) && item.values()["company__other-sources"].includes(searchQueries["company__data-sources"]) && item.values()["company__data-sectors"].includes(searchQueries["company__data-sectors"]) && item.values()["company__federal-sources"].includes(searchQueries["company__federal-sources"]) && item.values()["filter"].includes(searchQueries["company__provinces"])) {
  //                   return true;
  //               } else {
  //                   return false;
  //               }

  // CLEAR ALL FILTERS
  $(".clear_filters").on("click", function() {
    allFilters.each(function(idx,filter) {
      $('#'+filter.id).prop('selectedIndex',0);
    });
    caseList.filter();
    searchReset();
    caseList.sort('case__title', { order: "asc" });
  });

  // SORT ICON UP/DOWN SWITCH
  var sortClickButtons = $(".table-sortable__control > i:contains('keyboard_arrow_down')");
  sortClickButtons.on("click", function() {
    $(this).text() == "keyboard_arrow_down" ? $(this).text("keyboard_arrow_up") : $(this).text("keyboard_arrow_down");
  });

});
