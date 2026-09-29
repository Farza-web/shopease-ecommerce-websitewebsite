function displayCart() {

    const box = document.getElementById("cartItems");
    const totalBox = document.getElementById("cartTotal");
    const subtotalBox = document.getElementById("cartSubtotal");
    const itemCountBox = document.getElementById("itemCount");
    const emptyCart = document.getElementById("emptyCart");

    if (!box) {
        return;
    }

    const cart = getCart();

    box.innerHTML = "";

    let total = 0;
    let itemCount = 0;
    if (cart.length === 0) {

        if (emptyCart) {
            emptyCart.style.display = "block";
        }

        totalBox.textContent = "0.00";

        if (subtotalBox) {
            subtotalBox.textContent = "0.00";
        }

        if (itemCountBox) {
            itemCountBox.textContent = "0";
        }

        return;
    }
    if (emptyCart) {
        emptyCart.style.display = "none";
    }
    cart.forEach(function(item) {

        const product = products.find(function(p) {
            return p.id === item.id;
        });
        if (!product) {
            return;
        }


        const subtotal = product.price * item.quantity;

        total += subtotal;

        itemCount += item.quantity;


        box.innerHTML += `

            <div class="cart-item">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >


                <div class="cart-item-info">

                    <h3>${product.name}</h3>

                    <p>
                        $${product.price.toFixed(2)} each
                    </p>


                    <div class="quantity">

                        <button
                            onclick="changeQuantity(${product.id}, -1)"
                        >
                            -
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="changeQuantity(${product.id}, 1)"
                        >
                            +
                        </button>

                    </div>

                </div>


                <div class="cart-item-price">

                    $${subtotal.toFixed(2)}

                </div>


                <button
                    class="remove-btn"
                    onclick="removeItem(${product.id})"
                    title="Remove item"
                >

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        `;
    });
    totalBox.textContent = total.toFixed(2);
    if (subtotalBox) {
        subtotalBox.textContent = total.toFixed(2);
    }
    if (itemCountBox) {
        itemCountBox.textContent = itemCount;
    }
}
function changeQuantity(id, change) {

    const cart = getCart();

    const item = cart.find(function(item) {
        return item.id === id;
    });


    if (!item) {
        return;
    }


    item.quantity += change;
    if (item.quantity <= 0) {

        const index = cart.indexOf(item);

        cart.splice(index, 1);
    }


    saveCart(cart);

    displayCart();
}

function removeItem(id) {

    let cart = getCart();

    cart = cart.filter(function(item) {
        return item.id !== id;
    });


    saveCart(cart);

    displayCart();
}

if (document.getElementById("cartItems")) {

    displayCart();

}

const checkout = document.getElementById("checkoutForm");


if (checkout) {

    checkout.onsubmit = function(e) {

        e.preventDefault();

        localStorage.removeItem("cart");

        alert("Order placed successfully!");

        location.href = "index.html";
    };

}
