import {HungryBear } from './../js/hungrybear.js'

describe('HungryBear', function() {
  let fuzzy = new HungryBear('Fuzzy');

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual('Fuzzy')
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 millisenconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
      fuzzy.foodLevel = 0;
      expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function () {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });


});

// import { Calculator } from './../js/calculator.js';
// var sample = new Calculator(10);
//
// describe('Calculator', function () {
//
//   it('should have an age in seconds', function () {
//     expect(sample.ageSecondsRough).toEqual(315360000);
//   });
//
//   it('should be able to make a date with moment', function () {
//     sample.makeBirthday('2/24/1989')
//     // console.log(sample.birthDate)
//     expect(sample.birthDate).toEqual('02/24/1989');
//   });
// // makeDate(day, month, year)
//
//
// });
//
// // describe('Band', function () {
// //   it('should have a name', function () {
// //     expect(bandito.name).toEqual("Bandito");
// //   });
//
//   // it('characters to equal empty array', function() {
//   //   expect(bandito.characters).toEqual([]);
//   // });
//   //
//   // it('should add a character to a band', function() {
//   //   bandito.addCharacters("Lilly");
//   //   expect(bandito.characters).toEqual(['Lilly']);
//   // });
//   //
//   // it('should return a number when band rolls', function() {
//   //   expect(bandito.roll()).toEqual(jasmine.any(Number));
//   // });
//   //
//   // it('should alert and set fans to zero when a 1 is rolled', function() {
//   //   bandito.level = 1;
//   //   bandito.roll();
//   //   expect(bandito.fans).toEqual(0);
//   // });
//   //
//   // it('should add a groupie for every 10 fans', function() {
//   //   bandito.fans = 20;
//   //   bandito.groupie();
//   //   console.log(bandito.characters);
//   //   expect(bandito.characters).toEqual(['Lilly',"groupie"]);
//   // });
