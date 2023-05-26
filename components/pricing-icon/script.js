function addPriceIcon(e) {
    // Get all parent divs with class "price"
    const priceTargets = document.querySelectorAll('.price');

    if (!priceTargets) {
        return;
    } else {
        // Loop through each parent div
        priceTargets.forEach(priceTarget => {
            // Create a new <span> element
            const spanElement = document.createElement('span');
            spanElement.className = 'woocommerce-Price-amount amount';

            // Create a text node with the content "iO-cOin"
            const textNode = document.createTextNode('iO-cOin');

            // Append the text node to the <span> element
            spanElement.appendChild(textNode);

            // Append the <span> element to the parent div
            priceTarget.appendChild(spanElement);
        });
    };
};