import {bear} from './../js/hungrybear.js';

describe('HungryBear', function() {
  let fuzzy = bear;

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.foodLevel = 10;
    fuzzy.name = 'Fuzzy';
    fuzzy.setHunger();
  });

// })

// code below was the old code that worked
// import {HungryBear } from './../js/hungrybear.js'
//
// describe('HungryBear', function() {
//   let fuzzy = new HungryBear('Fuzzy');
//
//   beforeEach(function() {
//     jasmine.clock().install();
//     fuzzy.setHunger();
//   });
//
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

  // it('should have a food level of ten if it is fed', function() {
  //   jasmine.clock().tick(9001);
  //   fuzzy.feed();
  //   expect(fuzzy.foodLevel).toEqual(10);
  // });
  it('should return that the bear ate blueberries and the food level should go up by 5',function() {
    // expect.fuzzy.eatSmall('blueberries').toEqual('the bear ate the blueberries, food level goes up by 5');
    fuzzy.eatSmall('blueberries');
    expect(fuzzy.foodLevel).toEqual(15);
    alert('ran spec to eat blueberries');
    console.log(fuzzy.foodLevel);
    // debugger;
    fuzzy.eatHuge('you can write whatever here you need paranthesis since this is callback in line 21 of hungrybear.js ');
    expect(fuzzy.foodLevel).toEqual(30);
  });
//
//
});
