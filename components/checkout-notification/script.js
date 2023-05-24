function addSizeInfoCheckout(e) {
    const target = document.querySelector('.woocommerce-form-coupon-toggle');
    const template = `
        <div class="woocommerce-form-coupon-toggle" style="
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--yellow);
        ">
            
            <div class="woocommerce-info">
                Instructions on how to measure below.
            </div>
        </div>
    `;

    if(!target) {
        return;
    } else {
        target.insertAdjacentHTML('afterend', template);
    }
};

$(document).ready(function() {
    addSizeInfoCheckout();
});