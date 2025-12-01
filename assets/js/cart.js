// Temporary example cart data
// Later you can replace this with Firebase or localStorage
let cart = [];

const emptyCart = document.getElementById("emptyCart");
const cartItems = document.getElementById("cartItems");

// Check and display correct state
function renderCart() {
    if (cart.length === 0) {
        emptyCart.style.display = "block";
        cartItems.style.display = "none";
    } else {
        emptyCart.style.display = "none";
        cartItems.style.display = "grid";
        cartItems.innerHTML = "";

        cart.forEach(item => {
            cartItems.innerHTML += `
                <div class="cart-card">
                    <img src="${item.image}" width="100%">
                    <h4>${item.name}</h4>
                    <p>₹${item.price}</p>
                </div>
            `;
        });
    }
}

renderCart();
