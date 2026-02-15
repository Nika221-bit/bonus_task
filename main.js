let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

window.onload = () => {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  renderCart();
}

function renderCart(){
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "კალათა :";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `${item.name} – ${item.price}ლ 
      <button class = "removebtn" onclick="removeItem(${index})">კალათიდან ამოღება</button>`;
    cartList.appendChild(li);
    
   if(cart.length > 10){
    const d = new Date();
    d.setTime(d.getTime() + 20*1000); // 20 წამი
    document.cookie = "discount=true; expires=" + d.toUTCString();
    document.getElementById("discountMsg").innerText = "🎉 10% ფასდაკლება!";
  } else {
    document.getElementById("discountMsg").innerText = "";
  }
}
);

  const totalLi = document.createElement("li");
  totalLi.innerText = "სულ: " + total + "ლ";
  cartList.appendChild(totalLi);
}
function removeItem(index){
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}
function clearCart(){
  cart = [];
  localStorage.removeItem("cart");
  renderCart();
}
