let total = 0;

function addToCart(name, price){

  const cartItems = document.getElementById("cartItems");

  const li = document.createElement("li");

  li.innerHTML = `
    ${name} - ₹${price}
    <button class="remove-btn">
      Remove
    </button>
  `;

  cartItems.appendChild(li);

  total += price;

  document.getElementById("total").innerText = total;

  // Remove item
  li.querySelector("button").onclick = function(){

    li.remove();

    total -= price;

    document.getElementById("total").innerText = total;
  };
}
