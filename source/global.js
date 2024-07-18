function closeAccordion() {
    $('.accordion-head').removeClass('active');
    $('.accordion-body').removeClass('active');
    $('.accordion-head').children('.icon').removeClass('active');
    $('.accordion-head').children('.icon').children('i').removeClass('fa-minus').addClass('fa-plus');
}

$('.accordion-item').click(function () {
    let isActive = $(this).children('.accordion-head').hasClass('active');
    
    closeAccordion();

    if (!isActive) {
        $(this).children('.accordion-head').toggleClass('active');
        $(this).children('.accordion-head').siblings('.accordion-body').toggleClass('active');
        $(this).children('.accordion-head').children('.icon').toggleClass('active');
        $(this).children('.accordion-head').children('.icon').children('i').removeClass('fa-plus').addClass('fa-minus');
    }
});

function addPriceIcon(e) {
    const priceTargets = document.querySelectorAll('.price');

    if (!priceTargets) {
        return;
    } else {
        priceTargets.forEach(priceTarget => {
            const spanElement = document.createElement('span');
            spanElement.className = 'woocommerce-Price-amount amount';

            const textNode = document.createTextNode('Coins');
            spanElement.appendChild(textNode);
            priceTarget.appendChild(spanElement);
        });
    };
};

$(document).ready(function() {
	addPriceIcon()
});