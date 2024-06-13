let products =  JSON.parse(localStorage.getItem('products'))
let container = document.querySelector('[manga]')
    container.innerHTML += `
    <div class="card" style="width: 18rem;" id="product">
    <img src="${product.img_url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.productName}</h5>
      <p class="card-category">${product.category}</p>
      <p class="card-description">${product.description}</p>
      <p class="card-text">R ${product.amount}</p>
      <a href="#" class="btn btn-primary" onclick="addToCart()" id="cartBtn" >Add to Cart</a>
    </div>
  </div>`
