const products = [
    { name: "Summer Shirt", tags: "Summer", price: "$25", img: "https://images.unsplash.com/photo-1523381235212-d73f4138fc45?w=400" },
    { name: "Winter Jacket", tags: "Winter", price: "$80", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400" },
    { name: "Beach Shorts", tags: "Beach", price: "$15", img: "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?w=400" },
    { name: "Summer Dress", tags: "Summer", price: "$40", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400" }
];

const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search');
const checkboxes = document.querySelectorAll('.filter');

function displayProducts(filteredList) {
    productList.innerHTML = filteredList.map(p => `
        <div class="product-card" data-tags="${p.tags}">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.tags}</p>
            <p><strong>${p.price}</strong></p>
        </div>
    `).join('');
}

function filterItems() {
    const searchValue = searchInput.value.toLowerCase();
    const activeFilters = Array.from(checkboxes)
        .filter(i => i.checked)
        .map(i => i.value);

    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchValue);
        const matchesFilter = activeFilters.length === 0 || activeFilters.includes(p.tags);
        return matchesSearch && matchesFilter;
    });

    displayProducts(filtered);
}

searchInput.addEventListener('keyup', filterItems);
checkboxes.forEach(cb => cb.addEventListener('change', filterItems));

// Initial Load
displayProducts(products);