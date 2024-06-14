function updateCartCounter() {
    let cartCounter = document.getElementById('cartCounter')
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartCounter.textContent = totalItems;
}

document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    displayCart(cart);
    updateCartCounter();
});

function displayCart(cart) {
    let cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(product => {
        let productTotal = product.quantity * product.amount;
        totalPrice += productTotal;

        cartItems.innerHTML += `
            <tr>
                <td>
                    <img src="${product.img_url}" alt="${product.productName}" width="50">
                    ${product.productName}
                </td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="updateQuantity(${product.id}, -1)">Reduce</button>
                    ${product.quantity}
                    <button class="btn btn-success btn-sm" onclick="updateQuantity(${product.id}, 1)">Add</button>
                </td>
                <td>R${product.amount}</td>
                <td>R${productTotal}</td>
            </tr>
        `;
    });

    cartItems.innerHTML += `
        <tr>
            <td colspan="3"><strong>Total</strong></td>
            <td><strong>R${totalPrice}</strong></td>
        </tr>
    `;
}

function updateQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(item => item.id === productId);

    if (product) {
        product.quantity += change;

        if (product.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart(cart);
        updateCartCounter();
    }
}
