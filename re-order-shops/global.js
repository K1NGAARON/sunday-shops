$(document).ready(function() {
	function replaceErrorText(e) {
		const errorMSG = document.querySelector('.wc_payment_methods.payment_methods.methods .woocommerce-info');

		if (errorMSG) {
			errorMSG.innerText = 'Please use your coupon code when checking out.';
			
		} else {
			return;
		}

    	errorMSG.classList.add('active');
	};
	
	let quantityField = $("input.qty.ajax-ready");
	
	function changeMinValue() {
		quantityField.val(100);
	}

	if (quantityField) {
		changeMinValue();
	}
	
	setTimeout(function() {
		replaceErrorText();
	}, 1000);
});