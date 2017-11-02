import {bear} from './../js/hungrybear.js';
let fuzzy = bear;

$(document).ready(function() {
  $('#feedBear').click(function() {
    fuzzy.setHunger()
  });

  $('#theFoodSmall').click(function() {
    fuzzy.eatSmall();
    console.log(fuzzy.foodLevel);
    if (fuzzy.FoodLevel == 0) {
      console.log('shit')
    }
  });

});
