const productForm = document.querySelector("#add-product-form");
const typeSwitch = document.querySelector("#productType");
const typeForm = document.querySelector("#type-forms");

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    showForm();
  }
};

// determine form to show function
const showForm = () => {
  const formHtml = {
    DVD: `
      <div class="fieldbox" id="DVD">
        <label>Size (mb)</label>
        <input
          type="number"
          id="size"
          placeholder="Enter DVD Size"
          name="dvd"
          required
        />
      </div>
    `,
    Book: `
      <div class="fieldbox" id="Book">
        <label>Weight (kg)</label>
        <input
          type="number"
          id="weight"
          placeholder="Enter Book Weight"
          name="weight"
          required
        />
      </div>
    `,
    Furniture: `
      <div class="fieldbox" id="Furniture">
        <label>Dimension (cm)</label>
        <input
          type="number"
          id="height"
          placeholder="Enter Furniture Height"
          name="height"
          required
        />
        <input
          type="number"
          id="width"
          placeholder="Enter Furniture width"
          name="width"
          required
        />
        <input
          type="number"
          id="length"
          placeholder="Enter Furniture length"
          name="length"
          required
        />
      </div>
    `,
  };
  typeForm.innerHTML = formHtml[typeSwitch.value];
};

typeSwitch.addEventListener("change", () => {
  showForm();
});

const redirectUser = (endpoint) => {
  let protocol = location.protocol;
  let host = location.host;

  let currentLocation = location.pathname.split("/");
  let path = location.pathname
    .split("/")
    .splice(0, currentLocation.length - 1)
    .join("/");
  let redirectUrl = `${protocol}//${host}${path}/${endpoint}`;
  location.assign(redirectUrl);
};

const getValues = () => {
  return {
    dvd: document.querySelector("#size")
      ? document.querySelector("#size").value.trim()
      : 0,
    book: document.querySelector("#weight")
      ? document.querySelector("#weight").value.trim()
      : 0,
    height: document.querySelector("#height")
      ? document.querySelector("#height").value
      : 0,
    width: document.querySelector("#width")
      ? document.querySelector("#width").value
      : 0,
    length: document.querySelector("#length")
      ? document.querySelector("#length").value
      : 0,
  };
};

// getInputs();
productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputData = {
    DVD: {
      type: "productSize",
      value: `${getValues()["dvd"]}MB`,
    },
    Book: {
      type: "productWeight",
      value: `${getValues()["book"]}kg`,
    },
    Furniture: {
      type: "productDimension",
      value: `${getValues()["height"]}x${getValues()["width"]}x${
        getValues()["length"]
      }`,
    },
  };

  const formData = {
    productId: productForm.sku.value.trim(),
    productName: productForm.name.value.trim(),
    productPrice: `$${productForm.price.value.trim()}`,
    [inputData[typeSwitch.value].type]: inputData[typeSwitch.value].value,
  };

  addProduct(formData);
  productForm.reset();
  setTimeout(() => redirectUser("index.html"), 100);
});
