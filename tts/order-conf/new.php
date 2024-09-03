<?php
/**
 * Customer processing order email
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/emails/customer-processing-order.php.
 *
 * @see https://woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates\Emails
 * @version 3.7.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/*
 * @hooked WC_Emails::email_header() Output the email header
 */
do_action( 'woocommerce_email_header', $email_heading, $email ); ?>

<!-- Raw HTML for Testing -->
<div style="padding: 10px; background-color: #f7f7f7; border: 1px solid #ddd; margin-bottom: 20px;">
    <h2 style="color: #333;">This is a test block!</h2>
    <p style="color: #555;">If you can see this block, the template is working correctly.</p>
</div>

<?php /* translators: %s: Customer first name */ ?>
<p><?php printf( esc_html__( 'Hi %s,', 'woocommerce' ), esc_html( $order->get_billing_first_name() ) ); ?></p>
<?php /* translators: %s: Order number */ ?>
<p><?php printf( esc_html__( 'Just to let you know — we\'ve received your order #%s, and it is now being processed:', 'woocommerce' ), esc_html( $order->get_order_number() ) ); ?></p>

<?php

// Get the house number (billing_hnr) from the order meta
$billing_hnr = get_post_meta( $order->get_id(), '_billing_hnr', true );

// Get the formatted billing address
$billing_address = $order->get_formatted_billing_address();

?>

<!-- Display the billing address including the house number -->
<h3><?php esc_html_e( 'Billing Address', 'woocommerce' ); ?></h3>
<p><?php echo nl2br( esc_html( $billing_address ) ); if ( $billing_hnr ) { echo ', ' . esc_html( $billing_hnr ); } ?></p>

<?php

/*
 * @hooked WC_Emails::order_details() Shows the order details table.
 * @hooked WC_Structured_Data::generate_order_data() Generates structured data.
 * @hooked WC_Structured_Data::output_structured_data() Outputs structured data.
 * @since 2.5.0
 */
do_action( 'woocommerce_email_order_details', $order, $sent_to_admin, $plain_text, $email );

/*
 * @hooked WC_Emails::order_meta() Shows order meta data.
 */
do_action( 'woocommerce_email_order_meta', $order, $sent_to_admin, $plain_text, $email );

/*
 * @hooked WC_Emails::customer_details() Shows customer details
 * @hooked WC_Emails::email_address() Shows email address
 */
do_action( 'woocommerce_email_customer_details', $order, $sent_to_admin, $plain_text, $email );

/**
 * Show user-defined additional content - this is set in each email's settings.
 */
if ( $additional_content ) {
	echo wp_kses_post( wpautop( wptexturize( $additional_content ) ) );
}

/*
 * @hooked WC_Emails::email_footer() Output the email footer
 */
do_action( 'woocommerce_email_footer', $email );
