console.log("welcome to the about product page :)");

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
  const formIds = ["Disc", "Book", "Furniture"];
  let filteredForms = formIds.filter((formId) => formId !== typeSwitch.value);
  filteredForms.map((form) =>
    typeForm.querySelector(`#${form}`).classList.add("hidden")
  );
  const currentForm = typeForm
    .querySelector(`#${typeSwitch.value}`)
    .classList.remove("hidden");
};

typeSwitch.addEventListener("change", () => {
  showForm();
});

// form markup
let discHtml = `
  <div class="fieldbox" id="Disc-switch">
    <label>Size (mb)</label>
    <input type="number" placeholder="Enter Disc Size" name="disc" required />
  </div>`;

let bookHtml = `
  <div class="fieldbox" id="Book-switch">
    <label>Weight (kg)</label>
    <input type="number" placeholder="Enter Book Weight" name="weight" required />
  </div>
`;

let furnitureHtml = `
  <div class="fieldbox" id="Furniture-switch">
    <label>Dimension (cm)</label>
    <input type="number" placeholder="Enter Furniture Width" name="width" required / >
    <input type="number" placeholder="Enter Furniture Height" name="height"required / >
    <input type="number" placeholder="Enter Furniture length" name="length" required / >
  </div>
`;

console.log(typeForm);

// const showFormType = (typeValue) => {
//   switch (typeValue) {
//     case "Disc":
//       typeForm.innerHTML = discHtml;
//       break;
//     case "Book":
//       typeForm.innerHTML = bookHtml;
//       break;
//     case "Furniture":
//       typeForm.innerHTML = furnitureHtml;
//       break;
//     default:
//       typeForm.innerHTML = "no field";
//       break;
//   }
// };

// const formatPropName = (typeValue) => {
//   switch (typeValue) {
//     case "Disc":
//       return "productSize";
//     case "Book":
//       return "productWeight";
//     case "Furniture":
//       return "productDimension";
//     default:
//       return "";
//   }
// };

// // function to return the value of select input prepended/appended with appropriate unit(kg/mb)
// const getFieldValue = (typeField) => {
//   switch (typeField) {
//     case "Disc":
//       return `${productForm.disc.value.trim()}MB`;
//     case "Book":
//       return `${productForm.weight.value.trim()}kg`;
//     case "Furniture":
//       return `${productForm.width.value}x${productForm.height.value}x${productForm.length.value}`;
//     // width: productForm.width.value.trim(),
//     // height: productForm.height.value.trim(),
//     // length: productForm.length.value.trim(),
//     default:
//       return {};
//   }
// };

const redirectUser = (endpoint) => {
  // retrive details from url and redirect user to given url
  // protocol + host + pathname + page = redirect path
  let protocol = location.protocol;
  let host = location.host;

  let currentLocation = location.pathname.split("/");
  let redirectPage = currentLocation[currentLocation.length - 1];
  let path = location.pathname
    .split("/")
    .splice(0, currentLocation.length - 1)
    .join("/");
  let redirectUrl = `${protocol}//${host}${path}/${endpoint}`;
  let t =
    "http://127.0.0.1:5500/Scandiweb-Project-main/Scandiweb%20Test%20Assignment/Productpage.html";
  console.log(redirectUrl, "\n", redirectPage);

  location.assign(redirectUrl);
};

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectFieldValue = typeSwitch.value;
  const formData = {
    productId: productForm.sku.value.trim(),
    productName: productForm.name.value.trim(),
    productPrice: `$${productForm.price.value.trim()}`,
    // [formatPropName(`${typeSwitch.value}`)]: getFieldValue(typeSwitch.value),
  };
  console.log(formData, "id");

  // addProduct(formData);
  // productForm.reset();
  // setTimeout(() => redirectUser("Productpage.html"), 100);
});
