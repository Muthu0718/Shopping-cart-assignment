Shopping Cart Application
This project is a simple shopping cart system that allows users to add products to their cart, view the cart, and calculate totals including tax. It retrieves product prices from an external API and handles basic cart operations.

Table of Contents
•	Overview
•	Technologies Used
•	How It Works
•	Functions
o	getProductPrice
o	addProductToCart
o	showCart
o	promptUser
•	API Integration
•	How to Run
•	Testing
•	License
________________________________________
Overview
This application simulates a shopping cart system where users can:
1.	Add products to their cart.
2.	View the current cart with item details.
3.	View the subtotal, tax, and total amount.
The application makes an API call to retrieve product prices, adds products to the cart, and calculates the total price based on user input. It then displays the updated cart with totals and tax.
________________________________________
Technologies Used
•	Node.js: The backend is written in JavaScript using Node.js.
•	Axios: For making HTTP requests to fetch product prices from the API.
•	Readline: For interacting with the user through the command line.
________________________________________
How It Works
1.	The user is prompted to enter a product name and its quantity.
2.	The system fetches the price of the product from a local API (at http://localhost:3001/products/{productName}).
3.	If the product price is found, the product is added to the shopping cart. If the product already exists in the cart, its quantity is updated.
4.	After adding items, the user can view the cart, including the product names, quantities, and prices, along with the subtotal, tax, and total.
________________________________________
Functions
getProductPrice(productName)
Fetches the price of a product from the API.
•	Parameters:
o	productName (string): The name of the product whose price is being fetched.
•	Returns:
o	The price of the product (number) if successful.
o	null if there was an error fetching the price.
addProductToCart(productName, quantity)
Adds a product to the shopping cart. If the product already exists in the cart, its quantity is updated.
•	Parameters:
o	productName (string): The name of the product to add.
o	quantity (number): The quantity of the product to add to the cart.
•	Returns:
o	undefined
•	Actions:
o	Checks if the product is already in the cart.
o	If found, updates the quantity of that product.
o	If not found, adds the product with the given quantity and price.
showCart()
Displays the current cart, including all products, their quantities, individual prices, and total costs.
•	Parameters: None
•	Returns: None
•	Actions:
o	Iterates over the cart array and prints each product's details.
o	Calculates and prints the subtotal, tax (12.5%), and total.
promptUser()
Prompts the user for input to add products to the cart and displays the cart when the user exits.
•	Parameters: None
•	Returns: None
•	Actions:
o	Continuously asks the user for a product name and quantity.
o	If the user enters "exit", the cart is displayed, and the application ends.
________________________________________
API Integration
The system assumes there is an API running locally at http://localhost:3001/products/{productName}, where {productName} is a valid product like "cheerios", "cornflakes", etc. The API is expected to return the price of the product in the following format:
json
CopyEdit
{
  "price": 5.99
}
Example Request:
bash
CopyEdit
GET http://localhost:3001/products/cheerios
Example Response:
json
CopyEdit
{
  "price": 5.99
}
________________________________________

How to run this from Starting?
1. First pull the code from my repository to the local.
2. Then you have to install Typescript, npm, Node.js and then install dependancies:
npm install axios
3. Then implement npm i in terminal
4. To run the backend:
npm run serve-products
5. Then run the cart:
npm cart.js
6. Add products to your cart: Enter product names such as cheerios, cornflakes, etc., followed by their quantity. You can type "exit" at any time to view the cart and quit.
7.	View the Cart: The cart will be printed out with the subtotal, tax, and total.

How to run testing?
1.You can run tests for this application using Jest to ensure everything works as expected.
1.	Install Jest:
npm install --save-dev jest
2.	Run test files in a separate test file (e.g., cart.test.js).
3.	Run the tests:
   npx jest






