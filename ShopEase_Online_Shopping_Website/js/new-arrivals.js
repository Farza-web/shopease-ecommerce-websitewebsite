const newProducts = [

    {
        id: 9,
        name: "Smart Fitness Band",
        category: "Accessories",
        price: 34.99,
        rating: 4.8,
        reviews: 25,
        discount: "15%",
        image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=600"
    },

    {
        id: 10,
        name: "Wireless Earbuds",
        category: "Electronics",
        price: 54.99,
        rating: 4.7,
        reviews: 32,
        discount: "10%",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600"
    },

    {
        id: 11,
        name: "Casual Denim Jacket",
        category: "Fashion",
        price: 64.99,
        rating: 4.6,
        reviews: 18,
        discount: "20%",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"
    },

    {
        id: 12,
        name: "Modern Handbag",
        category: "Accessories",
        price: 49.99,
        rating: 4.9,
        reviews: 41,
        discount: "12%",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600"
    },

    {
        id: 13,
        name: "Portable Speaker",
        category: "Electronics",
        price: 44.99,
        rating: 4.5,
        reviews: 27,
        discount: "10%",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600"
    },

    {
        id: 14,
        name: "Running Sneakers",
        category: "Fashion",
        price: 74.99,
        rating: 4.8,
        reviews: 36,
        discount: "15%",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
    },

    {
        id: 15,
        name: "Smart Table Lamp",
        category: "Home",
        price: 39.99,
        rating: 4.4,
        reviews: 16,
        discount: "18%",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600"
    },

    {
        id: 16,
        name: "Premium Sunglasses",
        category: "Accessories",
        price: 29.99,
        rating: 4.7,
        reviews: 29,
        discount: "20%",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
    }

];

const arrivalList =
    document.getElementById("arrivalList");

const arrivalSearch =
    document.getElementById("arrivalSearch");

const arrivalSort =
    document.getElementById("arrivalSort");

const productCount =
    document.getElementById("productCount");

const arrivalEmpty =
    document.getElementById("arrivalEmpty");

function showNewProducts(list) {

    arrivalList.innerHTML = "";

    productCount.textContent = list.length;


    if (list.length === 0) {

        arrivalEmpty.style.display = "block";

        return;
    }


    arrivalEmpty.style.display = "none";


    list.forEach(function(product) {

        const card =
            document.createElement("div");

        card.className = "arrival-card";


        card.innerHTML = `

            <div class="arrival-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <span class="new-badge">
                    NEW
                </span>

                <span class="discount-badge">
                    -${product.discount}
                </span>

            </div>


            <div class="arrival-info">

                <span class="arrival-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>


                <div class="arrival-rating">

                    ${getStars(product.rating)}

                    <span>
                        (${product.reviews})
                    </span>

                </div>


                <div class="arrival-price">
                    $${product.price.toFixed(2)}
                </div>


                <button
                    class="arrival-add-btn"
                    data-id="${product.id}"
                >

                    <i class="fa-solid fa-cart-plus"></i>

                    Add to Cart

                </button>

            </div>

        `;


        arrivalList.appendChild(card);

    });


    addCartEvents();
}


/* ================================
   STAR RATING
================================ */

function getStars(rating) {

    let stars = "";

    for (let i = 1; i <= 5; i++) {

        if (i <= Math.round(rating)) {

            stars +=
                '<i class="fa-solid fa-star"></i>';

        } else {

            stars +=
                '<i class="fa-regular fa-star"></i>';

        }

    }

    return stars;
}


/* ================================
   SEARCH
================================ */

arrivalSearch.addEventListener(
    "input",
    function() {

        const searchText =
            arrivalSearch.value.toLowerCase();

        const filtered =
            newProducts.filter(function(product) {

                return (
                    product.name
                        .toLowerCase()
                        .includes(searchText)
                    ||
                    product.category
                        .toLowerCase()
                        .includes(searchText)
                );

            });


        showNewProducts(filtered);

    }
);


/* ================================
   SORT
================================ */

arrivalSort.addEventListener(
    "change",
    function() {

        let sortedProducts =
            [...newProducts];


        if (arrivalSort.value === "low") {

            sortedProducts.sort(
                function(a, b) {
                    return a.price - b.price;
                }
            );

        }


        if (arrivalSort.value === "high") {

            sortedProducts.sort(
                function(a, b) {
                    return b.price - a.price;
                }
            );

        }


        if (arrivalSort.value === "name") {

            sortedProducts.sort(
                function(a, b) {
                    return a.name.localeCompare(b.name);
                }
            );

        }


        showNewProducts(sortedProducts);

    }
);


/* ================================
   ADD TO CART
================================ */

function addCartEvents() {

    const buttons =
        document.querySelectorAll(
            ".arrival-add-btn"
        );


    buttons.forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const id =
                    Number(button.dataset.id);

                addToCart(id);

            }
        );

    });

}


/* ================================
   INITIAL DISPLAY
================================ */

showNewProducts(newProducts);
