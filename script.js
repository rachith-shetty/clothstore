let total = 0;

function addToCart(item, price) {

  const cartItems = document.getElementById("cartItems");

  const li = document.createElement("li");

  li.textContent = `${item} - ₹${price}`;

  cartItems.appendChild(li);

  total += price;

  document.getElementById("total").innerText = total;
}

function checkout() {

  if(total === 0){
    alert("Cart is empty!");
    return;
  }

  alert("Order placed successfully!");

  location.reload();
}
