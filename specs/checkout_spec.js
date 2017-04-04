var assert = require('assert');
var Checkout = require('../checkout.js');
var Basket = require('../basket.js');
var Item = require('../item.js');

describe('Checkout', function(){

  var item1;
  var item2;
  var item3;
  var basket;
  var checkout;

  beforeEach(function(){
    item1 = new Item("Milk", 100, true);
    item2 = new Item("Milk", 100, true);
    item3 = new Item("Champagne", 3200, false);
    basket = new Basket();
    checkout = new Checkout(basket);
  })

  it('can get value of basket before discounts', function(){
    basket.addItem(item1);
    basket.addItem(item2);
    basket.addItem(item3);
    assert.strictEqual(3400, checkout.getRawTotal());
  })

it('can start to count the number of each item in the shopping basket', function(){
  basket.addItem(item1);
  basket.addItem(item2);
  basket.addItem(item3);
  checkout.applyBogoF();


}) 


})