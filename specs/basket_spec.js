var assert = require('assert');
var Basket = require('../basket.js');

describe('Basket', function(){

  var basket;

  beforeEach(function(){
    basket = new Basket();
  })

  it('should start empty', function(){
    assert.strictEqual(0, basket.numberOfItems());
  })

})