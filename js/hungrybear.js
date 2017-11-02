export let bear = {
  foodLevel: 10,
  // setHunger: function() {
  //   const hungerInterval = setInterval(() => {
  //     this.foodLevel--;
  //     if (this.didYouGetEaten() == true) {
  //       clearInterval(hungerInterval);
  //       return 'You got eaten';
  //     }
  //   }, 1000);
  // },

  setHunger: function() {
    console.log(this.foodLevel);
    if (this.foodLevel <= 10) {
      // console.log('the one');
      const hungerInterval = setInterval(() => {
        this.foodLevel--;
        if (this.didYouGetEaten() == true) {
          clearInterval(hungerInterval);
          console.log('You got eaten')
          return 'You got eaten';
        }
      }, 1000);
    } else {
      console.log('the two');
      const hungerInterval2 = setInterval(() => {
        this.foodLevel-=1;
        if (this.didYouGetEaten() == true) {
          clearInterval(hungerInterval2);
          return 'You got eaten...slowly'
        }
      }, 2000);
    }
  },


  didYouGetEaten: function() {
    if (this.foodLevel > 0) {
      console.log(this.foodLevel, 'Hmm, the bear should be fed more')
      return false;
    } else {
      console.log('Feed the bear self!!!')
      return true;
    }
  },
  feed: function(amount) {
    let that = this;
    return function(food) {
      that.foodLevel += amount
      return `The bear ate the ${food}! Food level goes up ${amount}!`
    }
  }
  // ,
  //
  // eatSmall: function(food) {
  //   this.foodLevel += 5
  //   return `The bear ate the ${food}! Food level goes up by 5`
  // }
  // bear.feed(5);


};
// bear.eatSmall = bear.feed(5);
bear.eatHuge = bear.feed(15);

bear.eatSmall = function(food) {
      this.foodLevel += 5
      return `The bear ate the ${food}! Food level goes up 5!`
    };



// the old good code is below in es6 style
// export class HungryBear {
//   constructor(name) {
//     this.name = name;
//     this.foodLevel = 10;
//   }
//
//   setHunger() {
//     setInterval(() => {
//       this.foodLevel--;
//     }, 1000);
//   }
//
//   didYouGetEaten() {
//     if (this.foodLevel > 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//
//   feed() {
//     this.foodLevel = 10;
//   }
//
//   function welcome(salutation) {
//     return function(yourName) {
//       return `${salutation}, nice to meet you, ${yourName}`
//     }
//   }
//
// }
