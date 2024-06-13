try {
    let products = JSON.parse(localStorage.getItem('products'))
    let productWrapper = document.querySelector('[products]')

    function displayProducts(products) {
        productWrapper.innerHTML = ''
        products.forEach(product => {
            productWrapper.innerHTML += `
            <div class="card">
  <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading='lazy'>
  <div class="card-body">
    <p class="card-text"> ${product.productName}</p>
    <h6 class="card-title">${product. description }</h6>
    <h6 class="card-text">Amount: R${product.amount}</h6>
    <h6 class="card-text">Category: ${product.category}</h6>
    <button class="btn btn-primary">Add to cart</button>
  </div>
</div>
            
            `
        })


    }
    displayProducts(products)
}catch(e){
    productWrapper.innerHTML = `
    
    `
}