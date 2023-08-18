$(document).ready(function() {
	let quantityField = $("input.qty.ajax-ready");
	
	function changeMinValue() {
		quantityField.val(100);
	}

    function changeCheckoutBtn() {
        const checkoutBtn = document.querySelector('#place_order');
        $(checkoutBtn).text('Request Quote');
    }

	if (quantityField) {
		changeMinValue();
	}

    setTimeout(function() {
        if (window.location.href.includes("/checkout/")) {
            changeCheckoutBtn();
        };
	}, 1000);
});