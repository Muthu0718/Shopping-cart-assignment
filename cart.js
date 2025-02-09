const axios = require('axios');

// This cart stores the product names, their quantities, and prices.
let cart = [];

// Base URL for the Price API
const baseURL = 'http://localhost:3001/products/';

// Function to get the price of a product
async function getProductPrice(productName) {
  try {
    const response = await axios.get(`${baseURL}${productName}`);
    return response.data.price;
  } catch (error) {
    console.error('Error fetching product price:', error);
    return null;
  }
}

async function addProductToCart(productName, quantity) {
  const price = await getProductPrice(productName);
  if (price !== null) {
    const existingProductIndex = cart.findIndex(item => item.name === productName);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({ name: productName, price: price, quantity: quantity });
    }

    console.log(`${quantity} ${productName}(s) added to the cart.`);
    
  } else {
    console.log("Product not found.");
  }
}

function showCart() {
  console.log('\nCurrent Cart:');
  let subtotal = 0;
  cart.forEach(item => {
    console.log(`- ${item.name}: ${item.quantity} x $${item.price.toFixed(2)} = $${(item.quantity * item.price).toFixed(2)}`);
    subtotal += item.quantity * item.price;
  });

  const tax = subtotal * 0.125;
  const total = subtotal + tax;

  console.log('\nCart Totals:');
  console.log(`- Subtotal: $${subtotal.toFixed(2)}`);
  console.log(`- Tax (12.5%): $${tax.toFixed(2)}`);
  console.log(`- Total: $${total.toFixed(2)}\n`);
}

// Function to prompt the user for input
async function promptUser() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Function to handle user input for product name and quantity
  function askQuestion() {
    rl.question('Enter product name (cheerios, cornflakes, frosties, shreddies, weetabix) to add to cart, or "exit" to quit: ', (productName) => {
      if (productName.toLowerCase() === 'exit') {
        rl.close();
        showCart();
        return;
      }

      rl.question('Enter quantity: ', async (quantity) => {
        if (isNaN(quantity) || quantity <= 0) {
          console.log('Invalid quantity. Please enter a valid number.');
        } else {
          await addProductToCart(productName, parseInt(quantity));
        }
        askQuestion(); // Prompt user again
      });
    });
  }

  askQuestion();
}

// Start the shopping cart process
promptUser();
module.exports = {
    addProductToCart,
    getProductPrice,
    showCart
  };