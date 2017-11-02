import {bear} from './../js/hungrybear.js';
let fuzzy = bear;

$(document).ready(function() {
  $('#feedBear').click(function() {
    fuzzy.setHunger()
    // if (fuzzy.FoodLevel == 0) {
    //   console.log('no food left')
    // }
  });

  $('#theFoodSmall').click(function() {
    fuzzy.eatSmall();
    console.log('Fuzzy has a food level of '+fuzzy.foodLevel);
    // }
  });

});
