const deleteBtn = document.querySelector("#delete-product-btn");

const productGrid = document.querySelector(".Product-Grid");

// fetch product data from local storage
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    let retrieved = JSON.parse(localStorage.getItem("products"));
    if (retrieved) {
      if (!retrieved.length) {
        productGrid.innerHTML = `<p class="empty">There are no items left!</p>`;
      }
      retrieved.forEach((product) => generateCards(product, productGrid));
    } else {
      allProducts.forEach((product) => generateCards(product, productGrid));
      retrieved = allProducts;
      localStorage.setItem("products", JSON.stringify(retrieved));
      retrieved = JSON.parse(localStorage.getItem("products"));
      retrieved.forEach((product) => generateCards(product, productGrid));
    }
  }
};

// delete functionality
deleteBtn.addEventListener("click", () => {
  deleteProducts();
  productGrid.innerHTML = "";
  // retrieve product list from local storage
  let retrieved = JSON.parse(localStorage.getItem("products"));
  retrieved.map((product) => generateCards(product, productGrid));

  if (!retrieved.length) {
    productGrid.innerHTML = `<p class="empty">There are no items left!</p>`;
  }
});
