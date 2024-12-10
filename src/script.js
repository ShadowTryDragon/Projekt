const products = [
    { id: 1, name: "Classic Burger", price: 5.99, category: "beef" },
    { id: 2, name: "Cheeseburger", price: 6.49, category: "beef" },
    { id: 3, name: "Veggie Burger", price: 5.49, category: "vegetarian" },
    { id: 4, name: "BBQ Bacon Burger", price: 7.49, category: "beef" },
];

let cart = [];

// Filter function
function filterProducts(category) {
    const filtered = category === "all" ? products : products.filter(product => product.category === category);
    displayProducts(filtered);
}

// Display products dynamically
function displayProducts(productList) {
    const productContainer = document.querySelector(".products");
    productContainer.innerHTML = ""; // Clear current products

    productList.forEach(product => {
        const productElement = document.createElement("article");
        productElement.className = "product";
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p><strong>Preis:</strong> ${product.price.toFixed(2)} €</p>
            <button onclick="addToCart(${product.id})">In den Warenkorb</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartDisplay();
}

// Remove from cart function
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
    const cartContainer = document.querySelector(".cart-items");
    const totalDisplay = document.querySelector(".cart-total");

    cartContainer.innerHTML = ""; // Clear current cart
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <p>${item.name} x${item.quantity}</p>
            <p>${(item.price * item.quantity).toFixed(2)} €</p>
            <button onclick="removeFromCart(${item.id})">Entfernen</button>
        `;
        cartContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    totalDisplay.textContent = `Gesamtsumme: ${total.toFixed(2)} €`;
}

const users = [
    { username: "admin", password: "password123" }
];

// Login functionality
document.querySelector('.login-form').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Erfolgreich angemeldet!");
    } else {
        event.preventDefault();
        alert("Ungültige Anmeldedaten.");
    }
});

// Registration functionality
document.querySelector('.register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (users.some(user => user.username === username)) {
        alert("Benutzername ist bereits vergeben.");
    } else {
        users.push({ username, password });
        alert("Registrierung erfolgreich! Sie können sich jetzt anmelden.");
        document.querySelector('.register-form').reset();
    }
});
const form = document.getElementById('burgerForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim() === '') {
        nameError.textContent = 'Bitte geben Sie Ihren Namen ein.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!email.value.includes('@')) {
        emailError.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    const burgerName = document.getElementById('burgerName');
    const burgerNameError = document.getElementById('burgerNameError');
    if (burgerName.value.trim() === '') {
        burgerNameError.textContent = 'Bitte geben Sie einen Burger-Namen ein.';
        isValid = false;
    } else {
        burgerNameError.textContent = '';
    }

    const ingredients = document.getElementById('ingredients');
    const ingredientsError = document.getElementById('ingredientsError');
    if (ingredients.value.trim() === '') {
        ingredientsError.textContent = 'Bitte geben Sie die Zutaten ein.';
        isValid = false;
    } else {
        ingredientsError.textContent = '';
    }

    const recipe = document.getElementById('recipe');
    const recipeError = document.getElementById('recipeError');
    if (recipe.value.trim() === '') {
        recipeError.textContent = 'Bitte beschreiben Sie das Rezept.';
        isValid = false;
    } else {
        recipeError.textContent = '';
    }

    if (isValid) {
        alert('Vielen Dank für Ihren Vorschlag!');
        form.reset();
    }
});




// Initialize
function initialize() {
    displayProducts(products);

    // Add event listeners for filters
    document.querySelector("#filter-all").addEventListener("click", () => filterProducts("all"));
    document.querySelector("#filter-beef").addEventListener("click", () => filterProducts("beef"));
    document.querySelector("#filter-vegetarian").addEventListener("click", () => filterProducts("vegetarian"));
}

initialize();
