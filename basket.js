var Basket = function(){
  this.contents = [];
}

Basket.prototype = {

  numberOfItems: function(){
    return this.contents.length;
  },

  addItem: function(item){
    this.contents.push(item);
  }

}


module.exports = Basket; 