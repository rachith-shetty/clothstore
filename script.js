// script.js

const items = [
  {
    name: "Idli",
    price: 40,
    image: "images/idli.jpg"
  },
  {
    name: "Dosa",
    price: 60,
    image: "images/dosa.jpg"
  },
  {
    name: "Poori",
    price: 50,
    image: "images/poori.jpg"
  },
  {
    name: "Upma",
    price: 45,
    image: "images/upma.jpg"
  }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const foodList = document.getElementById("foodList");

if(foodList){

  items.forEach((item,index)=>{

    const div = document.createElement("div");

    div.classList.add("card");

    div.innerHTML = `
      <img src="${item.image}">
      <h2>${item.name}</h2>
      <p>₹${item.price}</p>

      <div class="controls">

        <button onclick="decrease(${index})">-</button>

        <span class="count" id="count-${index}">
          ${getQuantity(item.name)}
        </span>

        <button onclick="increase(${index})">+</button>

      </div>
    `;

    foodList.appendChild(div);

  });

}

function getQuantity(name){

  const found = cart.find(item => item.name === name);

  return found ? found.quantity : 0;
}

function increase(index){

  const item = items[index];

  const found = cart.find(p => p.name === item.name);

  if(found){
    found.quantity++;
  }else{
    cart.push({
      ...item,
      quantity:1
    });
  }

  saveCart();

  updateCount(index);
}

function decrease(index){

  const item = items[index];

  const found = cart.find(p => p.name === item.name);

  if(found){

    found.quantity--;

    if(found.quantity <= 0){
      cart = cart.filter(p => p.name !== item.name);
    }

  }

  saveCart();

  updateCount(index);
}

function updateCount(index){

  document.getElementById(`count-${index}`).innerText =
    getQuantity(items[index].name);
}

function saveCart(){

  localStorage.setItem("cart",JSON.stringify(cart));
}
