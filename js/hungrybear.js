export class HungryBear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }


}

// var moment = require('moment');
//
// export class Calculator {
//   constructor(age) {
//     this.age = age;
//     this.ageSecondsRough = age*365*24*60*60;
//     this.birthDate = null;
//     this.timePassed = null;
//     this.timePassedSeconds = null;
//     this.dateNow = null;
//   }
//
//   makeBirthday(date) {
//
//
//     var start = moment(date).format("MM/DD/YYYY");
//     this.birthDate = start;
//     console.log(this.ageSecondsRough);
//   }
//
//
//
// }
