var Checkout = function(basket){
  this.basket = basket;
}

Checkout.prototype = {
  getRawTotal: function(){
    var totalPrice = 0;
    for(i = 0; i < this.basket.numberOfItems(); i++){
      var item = this.basket.contents[i];
      totalPrice += item.price;
    }
    return totalPrice;
  }
}

module.exports = Checkout;