import {bear} from './../js/hungrybear.js';
let fuzzy = bear;

$(document).ready(function() {
  $('#feedBear').click(function() {
    // console.log(fuzzy.foodLevel);
    fuzzy.setHunger()
  });

  $('#theFoodSmall').click(function() {
    fuzzy.feed(5)();
    // fuzzy.feedSmall();
    console.log(fuzzy.foodLevel);
  });

});
