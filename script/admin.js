document.addEventListener('DOMContentLoaded', function() {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let hiddenProducts = JSON.parse(localStorage.getItem('hiddenProducts')) || [];
    let productWrapper = document.querySelector('[products]');

    function displayProducts(products) {
        productWrapper.innerHTML = '';
        products.forEach(product => {
            productWrapper.innerHTML += `
            <div class="card">
                <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading='lazy'>
                <div class="card-body">
                    <p class="card-text">${product.productName}</p>
                    <h6 class="card-title">${product.description}</h6>
                    <h6 class="card-text">Amount: R${product.amount}</h6>
                    <h6 class="card-text">Category: ${product.category}</h6>
                    <button class="btn btn-danger" onclick="removeProduct(${product.id})">Remove from Store</button>
                    <button class="btn btn-success" onclick="addProduct(${product.id})">Add to Store</button>
                </div>
            </div>
            `;
        });
    }

    window.removeProduct = function(id) {
        let product = products.find(item => item.id === id);
        if (product) {
            hiddenProducts.push(product);
            products = products.filter(item => item.id !== id);
            localStorage.setItem('products', JSON.stringify(products));
            localStorage.setItem('hiddenProducts', JSON.stringify(hiddenProducts));
            displayProducts([...products, ...hiddenProducts]);
        }
    };

    window.addProduct = function(id) {
        let product = hiddenProducts.find(item => item.id === id);
        if (product) {
            products.push(product);
            hiddenProducts = hiddenProducts.filter(item => item.id !== id);
            localStorage.setItem('products', JSON.stringify(products));
            localStorage.setItem('hiddenProducts', JSON.stringify(hiddenProducts));
            displayProducts([...products, ...hiddenProducts]);
        }
    };

    displayProducts([...products, ...hiddenProducts]);
});

