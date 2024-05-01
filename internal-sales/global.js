function closeAccordion(e) {
    $('.accordion-head').removeClass('active');
    $('.accordion-body').removeClass('active');
    $('.accordion-head').children('.icon').removeClass('active');
    $('.accordion-head').children('.icon').children('i').removeClass('fa-minus');
    $('.accordion-head').children('.icon').children('i').addClass('fa-plus');
};

$('.accordion-item').click(function () {
    closeAccordion();

    $(this).children('.accordion-head').toggleClass('active');
    $(this).children('.accordion-head').siblings('.accordion-body').toggleClass('active');
    $(this).children('.accordion-head').children('.icon').toggleClass('active');

    $(this).children('.accordion-head').children('.icon').children('i').removeClass('fa-plus');
    $(this).children('.accordion-head').children('.icon').children('i').addClass('fa-minus');
});

function addPriceIcon(e) {
    const priceTargets = document.querySelectorAll('.price');

    if (!priceTargets) {
        return;
    } else {
        priceTargets.forEach(priceTarget => {
            const spanElement = document.createElement('span');
            spanElement.className = 'woocommerce-Price-amount amount';

            const textNode = document.createTextNode('Sunday Coins');
            spanElement.appendChild(textNode);
            priceTarget.appendChild(spanElement);
        });
    };
};

$(document).ready(function() {
	addPriceIcon()
});