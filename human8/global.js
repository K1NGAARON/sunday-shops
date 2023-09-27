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

function deliveryDate(e) {
    const deliveryTarget = document.querySelector('.woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received');

    if (!deliveryTarget) {
        return;
    } else {
        const html = `
        <p>
            We’ll reach out shortly with more information on the delivery timeline & logistics.
        </p>
    `;

    deliveryTarget.insertAdjacentHTML("beforeend", html);
    }
};


$(document).ready(function() {
    deliveryDate();
});