data={
"products": [
    {
      "id": "cheerios",
      "title": "Cheerios",
      "price": 8.43
    },
    {
      "id": "cornflakes",
      "title": "Cornflakes",
      "price": 4.99
    },
    {
      "id": "frosties",
      "title": "Frosties",
      "price": 5.99
    },
    {
      "id": "shreddies",
      "title": "Shreddies",
      "price": 6.49
    },
    {
      "id": "weetabix",
      "title": "Weetabix",
      "price": 7.29
    }
  ]
}

cart={}
def product_find(product_id):
  for p in data["products"]:
    if p["id"]== product_id:
        return p
  return None

while True:
   product_name=input("Enter the product name(cheerios,cornflakes,frosties,shreddies,weetabix)or 'done' to finish:")

   if product_name=="done":
      break
   quantity=int(input("Enter the quantity :"))

   product=product_find(product_name)


   if product:
    if product_name in cart:
      cart[product_name]["quantity"]+=quantity
    else:
        cart[product_name]={
           "title":product["title"],
           "price":product["price"],
           "quantity": quantity
            
        }
    print(f"{quantity} x {product['title']} added to the cart")
   else:
      print("Product not found")

sub_total=sum(item["price"]*item["quantity"] for item in cart.values())

print("Cart Summary")
for item in cart.values():
   item_total=(item["price"]*item["quantity"])
   print(f"{item['quantity']} x {item['title']}(each ${item['price']}) = ${item_total } ")
print(f"Sub total :${sub_total:.2f}")

tax_payable = sub_total*0.125
print(f"Tax = ${tax_payable:.2f}")

print(f"Total_price = ${sub_total + tax_payable:.2f}")

