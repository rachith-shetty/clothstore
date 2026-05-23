let items = [
  { name:"Idli", price:40, img:"images/idli.jpg" },
  { name:"Dosa", price:60, img:"images/dosa.jpg" },
  { name:"Upma", price:50, img:"images/upma.jpg" },
  { name:"Puri", price:55, img:"images/puri.jpg" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// SAVE CART
function save(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

// GET QTY
function getQty(name){
  let item = cart.find(i => i.name === name);
  return item ? item.qty : 0;
}

// SHOW MENU
const menu = document.getElementById("menu");

items.forEach((item, index)=>{

  menu.innerHTML += `
    <div class="card">
      <img src="${item.img}">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>

      <button onclick="add(${index})">+</button>

      <span class="count" id="count-${index}">
        ${getQty(item.name)}
      </span>

      <button onclick="remove(${index})">-</button>
    </div>
  `;
});

// ADD
function add(i){
  let item = items[i];

  let found = cart.find(c => c.name === item.name);

  if(found){
    found.qty++;
  }else{
    cart.push({...item, qty:1});
  }

  save();
  update(i);
}

// REMOVE
function remove(i){
  let item = items[i];

  let found = cart.find(c => c.name === item.name);

  if(found){
    found.qty--;

    if(found.qty <= 0){
      cart = cart.filter(c => c.name !== item.name);
    }
  }

  save();
  update(i);
}

// UPDATE DISPLAY COUNT
function update(i){
  document.getElementById("count-"+i).innerText =
    getQty(items[i].name);
}
