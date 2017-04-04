var assert = require('assert');
var Basket = require('../basket.js');
var Item = require('../item.js');

describe('Basket', function(){

  var basket;
  var item1;
  var item2;
  var item3;

  beforeEach(function(){
    basket = new Basket();
    item1 = new Item("Milk", 100, true);
    item2 = new Item("Bread", 150, false);
    item3 = new Item("Mince", 500, false);
  })

  it('should start empty', function(){
    assert.strictEqual(0, basket.numberOfItems());
  })

  it('should be able to add items', function(){
    basket.addItem(item1);
    basket.addItem(item2);
    assert.strictEqual(2, basket.numberOfItems());
  })

})