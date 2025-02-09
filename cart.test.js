const axios = require('axios');
const { addProductToCart, showCart, getProductPrice } = require('./cart'); // Assuming the code is in cart.js

// Mocking axios.get for unit tests
jest.mock('axios');

// Reset the cart before each test
beforeEach(() => {
  global.cart = []; // Reset the cart to an empty array before each test
});

// Test for getProductPrice
describe('getProductPrice', () => {
  it('should return the product price if the API call is successful', async () => {
    axios.get.mockResolvedValue({ data: { price: 5.99 } });
    const price = await getProductPrice('cheerios');
    expect(price).toBe(5.99);
  });

  it('should return null if the API call fails', async () => {
    axios.get.mockRejectedValue(new Error('Product not found'));
    const price = await getProductPrice('nonexistent');
    expect(price).toBeNull();
  });
});

  it('should not add a product if the price is not available', async () => {
    axios.get.mockResolvedValue({ data: { price: null } });

    await addProductToCart('nonexistent', 2);
    expect(global.cart).toEqual([]); 
  });
