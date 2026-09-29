const products = [
 {id:1,name:"Smart Watch",price:49.99,category:"Accessories",image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"},
 {id:2,name:"Headphones",price:39.99,category:"Electronics",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"},
 {id:3,name:"Camera",price:299.99,category:"Electronics",image:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600"},
 {id:4,name:"Running Shoes",price:59.99,category:"Fashion",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"},
 {id:5,name:"Backpack",price:44.99,category:"Fashion",image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"},
 {id:6,name:"Sunglasses",price:24.99,category:"Accessories",image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"},
 {id:7,name:"Sneakers",price:69.99,category:"Fashion",image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600"},
 {id:8,name:"Laptop",price:599.99,category:"Electronics",image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"}
];

function showProducts(list=products){
  const box=document.getElementById("productList");
  if(!box)return;
  box.innerHTML="";
  list.forEach(p=>{
    box.innerHTML += `<div class="card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3><p>$${p.price.toFixed(2)}</p>
      <p>${p.category}</p>
      <button class="btn add-btn" data-id="${p.id}">Add to Cart</button>
    </div>`;
  });
  document.querySelectorAll(".add-btn").forEach(b=>b.onclick=()=>addToCart(Number(b.dataset.id)));
}
if(document.getElementById("productList"))showProducts();
const search=document.getElementById("search");
if(search)search.oninput=()=>showProducts(products.filter(p=>p.name.toLowerCase().includes(search.value.toLowerCase())));