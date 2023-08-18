$(document).ready(function() {
    $('.product-loop-wrapper').each(function() {
        let productLink = $(this).find('.woocommerce-LoopProduct-link.woocommerce-loop-product__link').attr('href');

        $(this).find('.loop-add-to-cart-btn').removeAttr('href')
            .removeClass('ajax_add_to_cart')
            .removeAttr('data-quantity data-product_id data-product_sku title rel')
        
        $(this).on('click', '.loop-add-to-cart-btn', function(event) {
            event.preventDefault();
            window.location.href = productLink;
        });
    });
});