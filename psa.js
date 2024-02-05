const lowStockProducts = [
    "https://psa.shop.teamsunday.com/product/psa-travel-mug/"
];

function addStockLabel() {
    const currentURL = window.location.href;
    let heading = document.querySelector('.product_title.entry-title');
    
    if (lowStockProducts.includes(currentURL)) {
        const label = `
            <span class="label">Low on stock</span>
        `;
        heading.insertAdjacentHTML('beforeend', label);
    
    } else {
        return;
    };
}

document.addEventListener('DOMContentLoaded', addStockLabel)