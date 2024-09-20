document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');

    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="">

            <h2>${product.name}</h2>
            <p class="title">${product.title}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p class="date">date: ${product.date}</p>
            <p class="location">location: ${product.location}</p>
            <p class="company">company: ${product.company}</p>
          `;

                productContainer.appendChild(productCard);

            });
        });
});