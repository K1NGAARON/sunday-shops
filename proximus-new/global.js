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

function addTextToCheckout() {
    if (window.location.href.indexOf("/checkout-2/order-received/") > -1) {
        $('.woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received').text("Thank you for ordering on the Proximus shop!");
       
        let successNotice = $(".woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received");
        successNotice.after("<p class='track-trace'>You will receive a track & trace once your order is shipped.</p>");
    }
};

$(document).ready(function() {
    addTextToCheckout()
});