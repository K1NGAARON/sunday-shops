add_filter('woocommerce_checkout_fields', 'custom_checkout_fields_attributes', 9999);

function custom_checkout_fields_attributes($fields) {
    $fields['billing']['billing_first_name']['maxlength'] = 30;
    $fields['billing']['billing_email']['maxlength'] = 191;
    $fields['billing']['billing_phone']['maxlength'] = 25;
    $fields['billing']['billing_country']['maxlength'] = 191;
    $fields['billing']['billing_city']['maxlength'] = 35;
    $fields['billing']['billing_postcode']['maxlength'] = 20;
    $fields['billing']['billing_address_1']['maxlength'] = 35;
    $fields['billing']['billing_address_2']['maxlength'] = 35;

    return $fields;
}