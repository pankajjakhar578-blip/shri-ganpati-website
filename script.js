function searchProducts() {
    const input = document.querySelector(".search input");
    const query = input.value.trim().toLowerCase();
    const products = document.querySelectorAll(".product-card");

    products.forEach(function(product) {
        const productName = product.querySelector("h3").textContent.toLowerCase();
        product.style.display =
            productName.includes(query) || query === "" ? "" : "none";
    });

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}