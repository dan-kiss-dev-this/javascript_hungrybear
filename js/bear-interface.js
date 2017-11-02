import {bear} from './../js/hungrybear.js';
let fuzzy = bear;

$(document).ready(function() {
  $('#feedBear').click(function() {
    // console.log(fuzzy.foodLevel);
    fuzzy.setHunger()
  });

  $('#theFoodSmall').click({function() {
    fuzzy.eatHuge('x');
    console.log(fuzzy.foodLevel);
  }

  })



});
