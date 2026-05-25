function searchBrandsAll() {
  // 1. Get what the customer is typing right now
  const searchInput = document
    .getElementById("brandSearch")
    .value.toLowerCase()
    .trim();

  // Show/Hide the 'x' button in search bar
  const clearBtn = document.getElementById("clear-search-btn");
  if (clearBtn) clearBtn.style.display = searchInput ? "block" : "none";

  // 1. Sidebar Category Filtering: Highlights/Hides the category buttons
  const container = document.getElementById("brand-list-container");
  const items = container.getElementsByClassName("brand-item");

  for (let i = 0; i < items.length; i++) {
    const text = items[i].textContent || items[i].innerText;
    if (text.toLowerCase().includes(searchInput)) {
      items[i].style.display = ""; // Keep button visible
    } else {
      items[i].style.display = "none"; // Hide button if user types something else
    }
  }

  // 2. Product Gallery Filtering: Hide/Show items based on search input
  const products = document.getElementsByClassName("moto-gallery");
  for (let i = 0; i < products.length; i++) {
    const title = products[i].querySelector("h1");
    if (title) {
      const text = title.textContent || title.innerText;
      products[i].style.display = text.toLowerCase().includes(searchInput)
        ? ""
        : "none";
    }
  }
}

// Helper function to set the search input and trigger the filter
function setSearchAndFilter(brand) {
  document.getElementById("brandSearch").value = brand;
  searchBrandsAll();
}

// Function to clear the search input and reset filters
function clearSearch() {
  document.getElementById("brandSearch").value = "";
  searchBrandsAll();
}

function toggleSocials() {
  document.getElementById("socialLinks").classList.toggle("show");
}

let cart = [];

function addToOrder(name, price) {
  const sugar = prompt(
    "How much sugar would you like? (e.g., 0%, 50%, 100%)",
    "100%",
  );
  if (sugar === null) return; // User clicked Cancel

  cart.push({ name, price, sugar });
  updateCartUI();
  alert(name + " with " + sugar + " sugar added to your order!");
}

function updateCartUI() {
  document.getElementById("cart-count").innerText = cart.length;
  const itemsContainer = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");

  let html = "";
  let total = 0; // Initialize total to 0
  if (cart.length > 0) {
    cart.forEach((item, index) => {
      html += `
        <div class="cart-item-row">
          <p>${item.name} (${item.sugar} sugar) - $${item.price.toFixed(2)}</p>
          <button class="remove-item-btn" onclick="removeItem(${index})">x</button>
        </div>
      `;
      total += item.price;
    });
  }
  itemsContainer.innerHTML = html || "<p>Your cart is empty.</p>";
  totalElement.innerText = total.toFixed(2);
}

function showCart() {
  document.getElementById("cart-modal").style.display = "flex";
  updateCartUI();
}

function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
}

// Close the menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function removeItem(index) {
  cart.splice(index, 1); // Remove 1 item at the given index
  updateCartUI(); // Refresh the cart display
}

function checkout() {
  if (cart.length === 0) return alert("Your cart is empty!");

  let message = "New Order from Website:%0A";
  let total = 0;
  cart.forEach((item) => {
    message += `- ${item.name} (${item.sugar} sugar) ($${item.price.toFixed(2)})%0A`;
    total += item.price;
  });
  message += `%0ATotal: $${total.toFixed(2)}`;

  window.open(`https://wa.me/85512345678?text=${message}`, "_blank");
}

function openGallery() {
  document.getElementById("lightbox").style.display = "flex";

  currentXP += 10;

  document.getElementById("xp-display").innerText = currentXP;

  let percentage = (currentXP / 1000) * 100;
  document.querySelector(".xp-bar-fill").style.width = percentage + "%";
}
function swap(imgSrc) {
  document.getElementById("currentView").src = imgSrc;

  const main = document.getElementById("currentView");
  main.style.opacity = 0;
  setTimeout(() => {
    main.style.opacity = 1;
  }, 50);
}
function closeError() {
  const intro = document.getElementById("intro-screen");
  const shop = document.getElementById("main-shop");

  intro.style.transform = "translateY(-100%)";

  shop.style.opacity = "1";

  setTimeout(() => {
    intro.remove();
  }, 600);
}
