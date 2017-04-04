var Basket = function(){
  this.contents = [];
}

Basket.prototype = {

  numberOfItems: function(){
    return this.contents.length;
  }

}


module.exports = Basket; 