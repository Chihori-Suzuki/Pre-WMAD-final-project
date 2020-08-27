let products = {

  'p01': {
    id: 'p01',
    name: 'Lounge Chair',
    price: 999,
    description: 'a comfy chair'
  },

  'p02': {
    id: 'p02',
    name: 'Stuffed Teddy Bear',
    price: 10000,
    description: 'Standing 9 feet tall, this teddy is sure to impress.'
  },

  'p03': {
    id: 'p03',
    name: 'Funny Hat',
    price: 150,
    description: 'a really funny hat'
  },


  getProductByID: function(productID) {
    // should return a sentence containing all of the info about the product (name price, and description)
  },

  getProductByName: function(productName) {
     // should return a sentence containing all of the info about the product (name price, and description)
  },

  addProduct: function(name, price, desc) {
    //will need a random id as well when creating a new product. console log the products to confirm it was added. 
  },

  cartTotal: function(arrayOfIDs) {
    // this function will take in an array of product Ids, and using this, will add together the total cost of all the items. 
  }


}