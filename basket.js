var Basket = function(){
  this.contents = [];
}

Basket.prototype = {

  numberOfItems: function(){
    return this.contents.length;
  },

  addItem: function(item){
    this.contents.push(item);
  },

  removeItem: function(item){
    var index = this.contents.indexOf(item);
    this.contents.splice(index, 1)
  }

}


module.exports = Basket; 