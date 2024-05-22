function add_free_products_to_cart() {
    if (is_checkout()) {
        $cart = WC()->cart;

        // Define the product IDs of the free products you want to add
        // 3685 : Packaging OS
        
        $free_product_ids = 3685;

        // Add the free products to the cart if they are not already in the cart
		foreach ($free_product_ids as $product_id) {
			if ($cart->find_product_in_cart($product_id)) {
				continue;
			}

			$product = wc_get_product($product_id);
			if ($product) {
				$cart_item_key = $cart->add_to_cart($product_id);

				if (is_bool($cart_item_key) && !$cart_item_key) {
					continue;
				}

				$cart->set_quantity($cart_item_key, 1);
			}
		}
    }
}

add_action('template_redirect', 'add_free_products_to_cart');