import {it, expect} from "./test_lib";

// Constructors
// Only add code to *THIS* section!


function Human (options) {
  let opts = options || {};
  this.hasCoffee = false;
  this.needsCoffee = true;
  this.alertness = opts.alertness || false;
  // if (opts.alertness > 0.2) {this.alertness = true}
  // else {this.alertness = false};
}

function Coffee(options) {
  let opts = options || {};
  this.full = true;
  this.empty = false;
}

Human.prototype.buy = function () {
  this.hasCoffee = true;
  this.needsCoffee = false;
  this.empty = false
  this.alertness = false;

}
Human.prototype.drink = function () {
  this.alertness = true;
  // this.empty = false;
  this.full = false;
}


// Human.prototype.drink = function (drank) {
//   let drank = options ;
//   if (drank.full = false) {drank.full = drank.full};
  // drank.hasCoffee= false;
  // drank.needsCoffee= true;
// };

///
///
///
///

// Do not ADD or MODIFY code below this line :D

it("should be sleepy at first", function () {
  let barry = new Human("Barry");
  expect(barry.alertness < 0.1).toBe(true);
});

it("needs coffee to wake up", function () {
  let marie = new Human("Marie");
  expect(marie.hasCoffee).toBe(false);
  expect(marie.needsCoffee).toBe(true);
});

it("can drink coffee to become more alive", function () {
  let ben = new Human("Ben");
  let omf = new Coffee("Orange Mocha Frappucino");
  expect(omf.full).toBe(true);

  ben.buy(omf);
  ben.drink();
  expect(ben.alertness > 0.3 && ben.alertness < 0.4).toBe(true);
  expect(omf.full).toBe(false);
  expect(omf.empty).toBe(false);
});

it("has coffee after buying it", function () {
  let daqunda = new Human("DaQunda");
  let cuban_blend = new Coffee("Fancy Cuban Blend");
  expect(daqunda.hasCoffee).toBe(false);
  daqunda.buy(cuban_blend);
  expect(daqunda.hasCoffee).toBe(true);
});

it("can drink all the coffee", function () {
  let kenny = new Human("Rodney");
  let tsmf = new Coffee("Triple Shot Mocha Frappucino");
  kenny.buy(tsmf);
  for(let i = 0; i < 3; i++) {
    kenny.drink();
  }
  expect(tsmf.empty).toBe(true);
  expect(kenny.alertness > 0.9).toBe(true);
});
