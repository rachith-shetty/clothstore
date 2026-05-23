let menuItems = [
  { name:"Idli", price:40, img:"images/idli.jpg" },
  { name:"Dosa", price:60, img:"images/dosa.jpg" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const menuDiv = document.getElementById("menu");

// show menu
if(menuDiv){
  menuItems.forEach((item, index)=>{
    menuDiv.innerHTML += `
      <div class="card">
        <img src="${item.img}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>

        <button onclick="add(${index})">+</button>
        <button onclick="remove(${index})">-</button>
      </div>
    `;
  });
}

// add item
function add(i){
  let item = menuItems[i];

  let found = cart.find(c => c.name === item.name);

  if(found){
    found.qty++;
  } else {
    cart.push({...item, qty:1});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

// remove item
function remove(i){
  let item = menuItems[i];

  let found = cart.find(c => c.name === item.name);

  if(found){
    found.qty--;

    if(found.qty <= 0){
      cart = cart.filter(c => c.name !== item.name);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}
