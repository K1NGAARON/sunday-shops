$(document).ready(function() {
	let quantityField = $("input.qty.ajax-ready");
	
	function changeMinValue() {
		quantityField.val(100);
	}

    function changeCheckoutBtn() {
        const checkoutBtn = document.querySelector('#place_order');
        $(checkoutBtn).text('Request Quote');
    }

    function changeSideBarBtnText() {
        const checkoutBtn = document.querySelector('.woocommerce-mini-cart__buttons.buttons .button.checkout');
        $(checkoutBtn).text('Request Quote');
    }

	if (quantityField) {
		changeMinValue();
	}

    setTimeout(function() {
        changeSideBarBtnText();

        if (window.location.href.includes("/checkout/")) {
            changeCheckoutBtn();
        };
	}, 1000);
});