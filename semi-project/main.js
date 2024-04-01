// Global variables
const BASE_API = "https://65f199db034bdbecc763229c.mockapi.io/api";
const contentDiv = document.querySelector(".content"); // k có, trả về null
const createFormDiv = document.querySelector(".create-form"); // k có, trả về null
const editFormDiv = document.querySelector(".edit-form"); // k có, trả về null
const detailModalDiv = document.querySelector(".detail-modal"); // k có, trả về null

const addProductButton = document.getElementById("add-product-button");

// Product APIs
const getAllProduct = async () => {
  const res = await fetch(`${BASE_API}/products`);
  return res.json();
};

const getProductById = async (productId) => {
  const res = await fetch(`${BASE_API}/products/${productId}`);
  return res.json();
};

const createProduct = async (newProduct) => {
  const res = await fetch(`${BASE_API}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
  return res.ok;
};

const editProduct = async (updatedProduct) => {
  const res = await fetch(`${BASE_API}/products/${updatedProduct.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProduct),
  });

  return res.ok;
};

const deleteProduct = async (productId) => {
  const res = await fetch(`${BASE_API}/products/${productId}`, {
    method: "DELETE",
  });
  return res.ok;
};

// PRODUCT FEATURES
const generateProductCard = (product, index) => {
  return `
        <div class='product-card'>
            <h2 class='product-index'>${index}</h2>
            <hr />
            <img class='product-image' src='${product.productImage}' />
            <p>Name: ${product.productName}</p>
            <p>Type: ${product.productType}</p>
            <p>Price: ${product.productPrice}</p>
            <div class='actions'>
                <button onclick='openProductDetailModal(${JSON.stringify(
                  product.id
                )})'>View Detail</button>
                <button onclick='openEditProductForm(${JSON.stringify(
                  product
                )})'>Edit</button>
                <button onclick='handleDeleteProduct(${JSON.stringify(
                  product.id
                )})'>Delete</button>
            </div>
        </div>
    `;
};

const displayProductList = async () => {
  contentDiv.innerHTML = "<h1>Loading...</h1>";
  const productList = await getAllProduct();
  console.log({ productList });
  if (productList.length > 0) {
    contentDiv.innerHTML = `
        <div class='product-list'>
            ${productList.map((product, index) =>
              generateProductCard(product, index)
            )}
        </div>
      `;
  } else {
    contentDiv.innerHTML = "<h1>No Product</h1>";
  }
};

const showCreateProductForm = () => {
  contentDiv.innerHTML = "";
  createFormDiv.style.display = "block";
};

const handleCancelAdd = () => {
  // clear current form values
  createFormDiv.style.display = "none";
};

const handleAddProduct = async () => {
  // get form data
  const productName = document.getElementById("product-name").value;
  const productType = document.getElementById("product-type").value;
  const productPrice = document.getElementById("product-price").value;
  const productImage = document.getElementById("product-image").value;
  const isUsed = document.getElementById("is-used").checked;
  const countInStock = document.getElementById("count-in-stock").value;
  const discount = document.getElementById("discount").value;

  const newProduct = {
    productName,
    productType,
    productPrice,
    productImage,
    isUsed,
    countInStock,
    discount,
  };

  console.log({ newProduct });

  // call create-product api
  const isCreated = await createProduct(newProduct);

  if (!isCreated) {
    const errorStatus = document.createElement("h2");
    errorStatus.innerText = "Create Failed";
    errorStatus.style.color = "red";
    createFormDiv.appendChild(errorStatus);
  } else {
    // reload the page when creating succefully
    location.reload();
  }
};

const handleDeleteProduct = async (productId) => {
  const isDeleted = await deleteProduct(productId);

  if (!isDeleted) {
    const productListDiv = document.querySelector(".product-list");
    const errorStatus = document.createElement("h2");
    errorStatus.innerText = "Create Failed";
    errorStatus.style.color = "red";
    productListDiv.appendChild(errorStatus);
  } else {
    // reload the page when creating succefully
    location.reload();
  }
};

const closeDetailModal = () => {
  detailModalDiv.style.display = "none";
};

const openProductDetailModal = async (selectedProductId) => {
  detailModalDiv.style.display = "block";
  detailModalDiv.innerHTML = "<h2>Loading Detail...</h2>";

  const productDetail = await getProductById(selectedProductId);

  console.log({ productDetail });

  detailModalDiv.innerHTML = `
      <div class='product-detail'>
          <img class='product-image' src='${productDetail.productImage}' />
          <p>Product Name: ${productDetail.productName}</p>
          <p>Product Type: ${productDetail.productType}</p>
          <p>Product Price: ${productDetail.productPrice}</p>
          <p>Is Used: <input type='checkbox' ${
            productDetail.isUsed && "checked"
          } /></p>
          <p>Count In Stock: ${productDetail.countInStock}</p>
          <p>Discount: ${productDetail.discount}%</p>
          <button onclick='closeDetailModal()'>close</button>
      </div>
  `;
};

const openEditProductForm = (selectedProduct) => {
  const editFormDiv = document.querySelector(".edit-form");

  // set product value into the edit-form
  document.getElementById("edit-product-name").value =
    selectedProduct.productName;
  document.getElementById("edit-product-type").value =
    selectedProduct.productType;
  document.getElementById("edit-product-price").value =
    selectedProduct.productPrice;
  document.getElementById("edit-product-image").value =
    selectedProduct.productImage;
  document.getElementById("edit-is-used").checked = selectedProduct.isUsed;
  document.getElementById("edit-count-in-stock").value =
    selectedProduct.countInStock;
  document.getElementById("edit-discount").value = selectedProduct.discount;

  // store the selected product id
  localStorage.setItem("selected-product-id", selectedProduct.id);

  // sessionStorage
  // sessionStorage.setItem('selected-product-id', selectedProduct.id)

  editFormDiv.style.display = "block";
};

const handleCancelEdit = (event) => {
  console.log(event);
  event.preventDefault();
  editFormDiv.style.display = "none";
};

const handleEditProduct = async () => {
  // get edit-form data
  const productName = document.getElementById("edit-product-name").value;
  const productType = document.getElementById("edit-product-type").value;
  const productPrice = document.getElementById("edit-product-price").value;
  const productImage = document.getElementById("edit-product-image").value;
  const isUsed = document.getElementById("edit-is-used").checked;
  const countInStock = document.getElementById("edit-count-in-stock").value;
  const discount = document.getElementById("edit-discount").value;

  const updatedProduct = {
    id: localStorage.getItem("selected-product-id"),
    productName,
    productType,
    productPrice,
    productImage,
    isUsed,
    countInStock,
    discount,
  };

  // call edit api
  const isEdited = await editProduct(updatedProduct);

  if (isEdited) {
    location.reload();
  } else {
    const editFormDiv = document.querySelector(".edit-form");
    const errorStatus = document.createElement("h2");
    errorStatus.innerText = "Create Failed";
    errorStatus.style.color = "red";
    editFormDiv.appendChild(errorStatus);
  }
};

displayProductList();

// ES6: ...

// structuredClone

let x = { id: { name: "son" } };
y = structuredClone(x);

x.id.name = 3;
console.log(y); //  {id: {name: 3}}
