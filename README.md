# ShopEase - E-Commerce Website

ShopEase is a simple and responsive e-commerce website built using **HTML, CSS, and JavaScript**. It provides a clean online shopping interface where users can browse products, explore categories, add products to a shopping cart, and complete the checkout process.

## Features

* 🛍️ Product browsing
* 🔍 Product search and filtering
* 📂 Product categories
* ⭐ New arrivals
* 🏷️ Deals and discounts
* 🛒 Shopping cart
* ➕ Increase/decrease product quantity
* 🗑️ Remove products from cart
* 💳 Checkout page
* 👤 Login and registration pages
* 📦 Shipping policy
* 🔄 Return policy
* ❓ FAQ page
* 🔒 Privacy policy
* 📜 Terms & Conditions
* 📱 Responsive design
* 💾 Cart data stored using LocalStorage

## Technologies Used

* **HTML5** - Website structure
* **CSS3** - Styling and responsive design
* **JavaScript** - Dynamic functionality and cart management
* **Font Awesome** - Icons
* **LocalStorage** - Storing cart data in the browser

## Project Structure

```text
shopease-ecommerce-website/
│
├── index.html
├── products.html
├── category.html
├── new-arrivals.html
├── deals.html
├── about.html
├── contact.html
├── cart.html
├── checkout.html
├── login.html
├── register.html
├── shipping.html
├── return.html
├── faq.html
├── privacy.html
├── terms.html
│
├── css/
│   ├── style.css
│   ├── products.css
│   ├── category.css
│   ├── deals.css
│   ├── about.css
│   ├── contact.css
│   └── checkout.css
│
└── js/
    ├── main.js
    ├── products.js
    ├── cart.js
    └── checkout.js
```

## Main Pages

### Home

The homepage introduces ShopEase and provides quick access to products, categories, and shopping sections.

### Products

Users can browse available products, search for products, filter by category and price, and add products to the cart.

### Categories

Products are organized into different categories to make browsing easier.

### Deals

Displays special offers and discounted products.

### Shopping Cart

Users can:

* View selected products
* Change product quantity
* Remove products
* View the total price

### Checkout

Users can enter their:

* Full Name
* Email
* Delivery Address
* Phone Number
* Payment Method

## How the Cart Works

The shopping cart uses **JavaScript LocalStorage**.

When a user clicks **Add to Cart**, the product ID and quantity are stored in LocalStorage.

Example:

```javascript
localStorage.setItem("cart", JSON.stringify(cart));
```

The cart page then reads the stored data and displays the selected products.

## How to Run

No server or database is required.

1. Clone the repository:

```bash
git clone https://github.com/your-username/shopease-ecommerce-website.git
```

2. Open the project folder.

3. Open `index.html` in a web browser.

For a better development experience, you can use **VS Code with the Live Server extension**.

## Future Improvements

* User authentication
* Backend with PHP and MySQL
* Real payment gateway
* Product database
* Admin dashboard
* Order history
* Wishlist functionality
* Product reviews and ratings
* User profile management
* Real-time order tracking

## Purpose

This project was developed as a **frontend e-commerce website project** to practice HTML, CSS, and JavaScript concepts, including DOM manipulation, LocalStorage, responsive design, and multi-page website development.

⭐ If you find this project useful, feel free to star the repository.

