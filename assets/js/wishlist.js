// Temporary example wishlist data
// Later you will replace this with Firebase
let wishlist = [];

const emptyState = document.getElementById("emptyState");
const wishlistItems = document.getElementById("wishlistItems");

// Check and display correct state
function renderWishlist() {
    if (wishlist.length === 0) {
        emptyState.style.display = "block";
        wishlistItems.style.display = "none";
    } else {
        emptyState.style.display = "none";
        wishlistItems.style.display = "grid";
        wishlistItems.innerHTML = "";

        wishlist.forEach(item => {
            wishlistItems.innerHTML += `
                <div class="wishlist-card">
                    <img src="${item.image}" width="100%">
                    <h4>${item.name}</h4>
                    <p>₹${item.price}</p>
                </div>
            `;
        });
    }
}

renderWishlist();
