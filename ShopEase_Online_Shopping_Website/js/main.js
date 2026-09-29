function getCart(){return JSON.parse(localStorage.getItem("cart"))||[]}
function saveCart(cart){localStorage.setItem("cart",JSON.stringify(cart));updateCartCount()}
function addToCart(id){
  const cart=getCart();
  const item=cart.find(x=>x.id===id);
  if(item)item.quantity++;
  else cart.push({id:id,quantity:1});
  saveCart(cart);
  alert("Product added to cart!");
}
function updateCartCount(){
  document.querySelectorAll(".cart-count").forEach(x=>{
    x.textContent=getCart().reduce((sum,item)=>sum+item.quantity,0);
  });
}
function loginUser(e){e.preventDefault();alert("Login successful!");location.href="index.html"}
function registerUser(e){e.preventDefault();alert("Account created successfully!");location.href="login.html"}
updateCartCount();