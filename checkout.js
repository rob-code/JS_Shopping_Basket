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
  },

  applyBogoF: function(){

    var counts = new Object(null);

    for(i = 0; i < this.basket.numberOfItems(); i++){
      var item = this.basket.contents[i];
      if (counts[item.name]) {
          counts[item.name] = counts[item.name] + 1;
      } else {
          counts[item.name] = 1;
      }

    }

      console.log(counts);

      for (var item in counts) {
        console.log(item + " -> " + counts[item]);
      }



    // for(i = 0; i < counts.length; i++){

    //   console.log("hello");      
    // }









  }







}








module.exports = Checkout;