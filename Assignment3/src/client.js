
document.addEventListener('DOMContentLoaded', () => {
  const productContainer = document.getElementById('product-container');

  fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Create HTML structure for each product
        productCard.innerHTML = `
          <h2>${product.name}</h2>
          <p class="description">${product.description}</p>
          <p class="price">$${product.price.toFixed(2)}</p>
          <p class="category">Category: ${product.category}</p>
          <p class="stock">Stock: ${product.stock}</p>
        `;

        // Append the product card to the container
        productContainer.appendChild(productCard);

      });
    });
});