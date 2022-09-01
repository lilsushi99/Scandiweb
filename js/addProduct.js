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

// // form markup
// let DVDHtml = `
//   <div class="fieldbox" id="Disc-switch">
//     <label>Size (mb)</label>
//     <input type="number" placeholder="Enter Disc Size" name="disc" required />
//   </div>`;

// let bookHtml = `
//   <div class="fieldbox" id="Book-switch">
//     <label>Weight (kg)</label>
//     <input type="number" placeholder="Enter Book Weight" name="weight" required />
//   </div>
// `;

// let furnitureHtml = `
//   <div class="fieldbox" id="Furniture-switch">
//     <label>Dimension (cm)</label>
//     <input type="number" placeholder="Enter Furniture Width" name="width" required / >
//     <input type="number" placeholder="Enter Furniture Height" name="height"required / >
//     <input type="number" placeholder="Enter Furniture length" name="length" required / >
//   </div>
// `;

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
//     case "DVD":
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
//     case "DVD":
//       return `${productForm.dvd.value.trim()}MB`;
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
  location.assign(redirectUrl);
};

let n = (container) => {
  let newTest = {
    DVD: {
      key: "productSize",
      value: `${container.dvd.value.trim()}MB`,
    },
    Book: {
      key: "productWeight",
      value: `${container.weight.value.trim()}kg`,
    },
    Furniture: {
      key: "productDimension",
      value: `${container.width.value}x${container.height.value}x${container.length.value}`,
    },
  };
};

// const test = {
//   DVD: {
//     key: "productSize",
//     value: `${productForm.dvd.value.trim()}MB`,
//   },
//   Book: {
//     key: "productWeight",
//     value: `${productForm.weight.value.trim()}kg`,
//   },
//   Furniture: {
//     key: "productDimension",
//     value: `${productForm.width.value}x${productForm.height.value}x${productForm.length.value}`,
//   },
// };

productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // const selectFieldValue = typeSwitch.value;
  const formData = {
    productId: productForm.sku.value.trim(),
    productName: productForm.name.value.trim(),
    productPrice: `$${productForm.price.value.trim()}`,
    [test[typeSwitch.value].key]: test[typeSwitch.value].value,
    // [formatPropName(`${typeSwitch.value}`)]: getFieldValue(typeSwitch.value),
  };
  console.log(formData, "id");
  // console.log("submitted", typeSwitch.value);
  // console.log(test[typeSwitch.value].key);
  // console.log(productForm.dvd.value);

  // addProduct(formData);
  // productForm.reset();
  // setTimeout(() => redirectUser("Productpage.html"), 100);
  console.log(document.querySelector("#size"));
});
