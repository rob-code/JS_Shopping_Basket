var assert = require('assert');
var Item = require('../item.js');  //its the export file that is being exposed 

describe('Item', function() {

var item1;
var item2;

beforeEach(function(){
 item1 = new Item("bread", 130, true);
 item2 = new Item("milk", 85, false);
})

it('Should have a name', function() {
  assert.strictEqual("bread", item1.name); 
})







});