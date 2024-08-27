<?php
/**
 * Customer processing order email
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/emails/customer-processing-order.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates\Emails
 * @version 3.7.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Your PHP code here

?>

<!-- Your HTML content here -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no, date=no, email=no, address=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>Your Page Title</title>

    <link rel="stylesheet" href="/campaign/stripo/css/custom.css" type="text/css">

    <style type="text/css">
        @media only screen and (max-width: 648px) {
            .col-sm-6-mob {
                max-width: 100% !important;
                width: 100% !important;
            }

            .hide-on-mobile {
                display: none !important;
            }

            .show-on-mobile {
                display: block !important;
                line-height: normal !important;
                max-height: none !important;
                width: 100% !important;
                overflow: hidden !important;
            }

            .pm0 {
                padding: 0 !important;
            }

            .pm16 {
                padding: 16px !important;
            }
        }
    </style>

    <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
</head>

<body>
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
        <tbody>
            <tr>
                <td class="esd-email-paddings" valign="top">
                    <table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center">
                        <tbody>
                            <tr>
                                <td class="esd-stripe" align="center" esd-custom-block-id="190575">
                                    <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-image: url(https://content.app-us1.com/9ZxnM/2024/08/09/ccf018c7-dc2b-4b56-937e-6f3c4f4a9976.png?id=33851835); background-repeat: no-repeat; background-position: center top; background-color: #241f3d;" background="https://content.app-us1.com/9ZxnM/2024/08/09/ccf018c7-dc2b-4b56-937e-6f3c4f4a9976.png?id=33851835" bgcolor="#241F3D">
                                        <tbody>
                                            <tr class="es-mobile-hidden">
                                                <td class="esd-structure esdev-adapt-off es-p25t es-p15b es-p30r es-p30l" align="left">
                                                    <table width="540" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esdev-mso-td" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="77" class="es-m-p0r esd-container-frame" align="center">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://thatsthespirit.nu/in"><img class="adapt-img" src="https://content.app-us1.com/9ZxnM/2023/01/26/9105da9d-d9b1-45b8-9cd0-d9148d787209.png?id=18707608" alt style="display: block;" data-cf-ir-is-resized="true" data-cf-ir-should-resize-image="true" srcset="https://content.app-us1.com/cdn-cgi/image/fit=scale-down,format=auto,redirect,width=77,dpr=1/9ZxnM/2023/01/26/9105da9d-d9b1-45b8-9cd0-d9148d787209.png 1x,https://content.app-us1.com/cdn-cgi/image/fit=scale-down,format=auto,redirect,width=77,dpr=2/9ZxnM/2023/01/26/9105da9d-d9b1-45b8-9cd0-d9148d787209.png 2x,https://content.app-us1.com/cdn-cgi/image/fit=scale-down,format=auto,redirect,width=77,dpr=3/9ZxnM/2023/01/26/9105da9d-d9b1-45b8-9cd0-d9148d787209.png 3x,https://content.app-us1.com/cdn-cgi/image/fit=scale-down,format=auto,redirect,width=77,dpr=4/9ZxnM/2023/01/26/9105da9d-d9b1-45b8-9cd0-d9148d787209.png 4x" data-cf-ir-no-srcset="true" data-cf-ir-width="77" width="77" data-cf-ir-layout-width="600"></a></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td width="20"></td>
                                                                <td class="esdev-mso-td" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="50" class="esd-container-frame" align="center">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-text h-auto" esd-links-underline="none" valign="middle" esd-links-color="#daba5f" height="50">
                                                                                                    <p style="color: #daba5f; font-size: 18px; font-family: 'ibm plex sans', sans-serif;"><a target="_blank" style="font-size: 14px; font-family: 'ibm plex sans', sans-serif; text-decoration: none; color: #daba5f;" href="https://shop.thatsthespirit.nu/product-category/boeken/">Boeken</a></p>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td width="20"></td>
                                                                <td class="esdev-mso-td" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="196" class="esd-container-frame" align="center">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-text h-auto" esd-links-underline="none" valign="middle" height="50">
                                                                                                    <p style="color: #daba5f; font-size: 14px; font-family: 'ibm plex sans', sans-serif;"><a target="_blank" style="font-size: 14px; font-family: 'ibm plex sans', sans-serif; text-decoration: none;" href="https://shop.thatsthespirit.nu/product-category/voeding-supplementen/">Voeding & Supplementen</a></p>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td width="20"></td>
                                                                <td class="esdev-mso-td" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="55" align="center" class="esd-container-frame">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-text h-auto" esd-links-underline="none" valign="middle" height="50">
                                                                                                    <p style="color: #daba5f; font-size: 14px; font-family: 'ibm plex sans', sans-serif;"><a target="_blank" style="font-size: 14px; font-family: 'ibm plex sans', sans-serif; text-decoration: none;" href="https://shop.thatsthespirit.nu/product-category/waterfilters/">Waterfilters</a></p>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td width="20"></td>
                                                                <td class="esdev-mso-td" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="82" align="left" class="esd-container-frame">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-button">
                                                                                                    <!--[if mso]><a href="https://shop.thatsthespirit.nu/" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://shop.thatsthespirit.nu/" 
                style="height:39px; v-text-anchor:middle; width:83px" arcsize="10%" stroke="f"  fillcolor="#daba5f">
		<w:anchorlock></w:anchorlock>
		<center style='color:#14142a; font-family:"IBM Plex Sans", sans-serif; font-size:14px; font-weight:700; line-height:14px;  mso-text-raise:1px'>SHOP</center>
	</v:roundrect></a>
<![endif]-->
                                                                                                    <!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-radius: 4px; background: #daba5f;"><a href="https://shop.thatsthespirit.nu/" class="es-button" target="_blank" style="border-radius: 4px; background: #daba5f; font-family: 'IBM Plex Sans', sans-serif; color: #14142a; padding: 10px 20px; font-weight: bold; font-size: 16px; mso-border-alt: 10px solid #daba5f">SHOP</a></span>
                                                                                                    <!--<![endif]-->
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <!--[if !mso]><!-- -->
                                            <tr class="es-desk-hidden">
                                                <td class="esd-structure esdev-adapt-off es-p25t es-p15b es-p30r es-p30l" align="left">
                                                    <table width="540" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esdev-mso-td" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="400" class="es-m-p0r esd-container-frame" align="center">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="left" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://thatsthespirit.nu/in"><img src="https://content.app-us1.com/9ZxnM/2023/01/26/9105da9d-d9b1-45b8-9cd0-d9148d787209.png?id=18707608" alt style="display: block;" data-cf-ir-is-resized="true" data-cf-ir-should-resize-image="true" srcset="https://content.app-us1.com/cdn-cgi/image/fit=scale-down,format=auto,redirect,width=79,dpr=1/9ZxnM/2023/01/26/9105da9d-d9b1-45b8-9cd0-d9148d787209.png 1x,https://content.app-us1.com/cdn-cgi/image/fit=scale-down,format=auto,redirect,width=79,dpr=2/9ZxnM/2023/01/26/9105da9d-d9b1-45b8-9cd0-d9148d787209.png 2x,https://content.app-us1.com/cdn-cgi/image/fit=scale-down,format=auto,redirect,width=79,dpr=3/9ZxnM/2023/01/26/9105da9d-d9b1-45b8-9cd0-d9148d787209.png 3x,https://content.app-us1.com/cdn-cgi/image/fit=scale-down,format=auto,redirect,width=79,dpr=4/9ZxnM/2023/01/26/9105da9d-d9b1-45b8-9cd0-d9148d787209.png 4x" data-cf-ir-no-srcset="true" data-cf-ir-width="600" width="79" data-cf-ir-layout-width="600"></a></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td class="esdev-mso-td" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="140" align="left" class="esd-container-frame">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="right" class="esd-block-button">
                                                                                                    <!--[if mso]><a href="https://shop.thatsthespirit.nu/" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://shop.thatsthespirit.nu/" 
                style="height:39px; v-text-anchor:middle; width:92px" arcsize="10%" stroke="f"  fillcolor="#daba5f">
		<w:anchorlock></w:anchorlock>
		<center style='color:#14142a; font-family:"IBM Plex Sans", sans-serif; font-size:14px; font-weight:700; line-height:14px;  mso-text-raise:1px'>SHOP</center>
	</v:roundrect></a>
<![endif]-->
                                                                                                    <!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-radius: 4px; background: #daba5f;"><a href="https://shop.thatsthespirit.nu/" class="es-button msohide" target="_blank" style="border-radius: 4px; background: #daba5f; font-family: 'IBM Plex Sans', sans-serif; color: #14142a; padding-top: 10px; padding-bottom: 10px; font-weight: bold; font-size: 16px; mso-border-alt: 10px solid #daba5f">SHOP</a></span>
                                                                                                    <!--<![endif]-->
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <!--<![endif]-->
                                            <tr>
                                                <td class="esd-structure es-p10t es-p10b es-p30r es-p30l" align="left">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td width="540" class="esd-container-frame" align="center" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="center" class="esd-block-text pmt0 es-p10t es-m-p0t">
                                                                                    <h2 style="color: #d9ba5e; font-size: 26px; font-family: 'ibm plex sans', sans-serif;"><b>We hebben jouw bestelling goed ontvangen!</b></h2>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="center" class="esd-block-text es-p10t es-p15b">
                                                                                    <p style="color: #ffffff;">
                                                                                        
                                                                                    </p>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="center" class="esd-block-button es-m-txt-c">
                                                                                    <!--[if mso]><a href="https://shop.thatsthespirit.nu/" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://shop.thatsthespirit.nu/" 
                style="height:39px; v-text-anchor:middle; width:230px" arcsize="8%" stroke="f"  fillcolor="#daba5f">
		<w:anchorlock></w:anchorlock>
		<center style='color:#14142a; font-family:"IBM Plex Sans", sans-serif; font-size:14px; font-weight:700; line-height:14px;  mso-text-raise:1px'>Shop nu met korting</center>
	</v:roundrect></a>
<![endif]-->
                                                                                    <!--[if !mso]><!-- --><span class="msohide es-button-border" style="background: #daba5f;"><a href="https://shop.thatsthespirit.nu/" class="es-button msohide" target="_blank" style="color: #14142a; background: #daba5f; font-family: 'IBM Plex Sans', sans-serif; font-weight: bold; padding: 10px 30px; font-size: 16px; mso-border-alt: 10px solid #daba5f">Shop nu met korting</a></span>
                                                                                    <!--<![endif]-->
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
                        <tbody>
                            <tr>
                                <td class="esd-stripe" align="center" esd-custom-block-id="191464">
                                    <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                        <tbody>
                                            <tr>
                                                <td class="esd-structure es-p10t es-p30b es-p30r es-p30l" align="left">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td width="540" class="esd-container-frame" align="left">
                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="left" class="esd-block-text pmt0">
                                                                                    <h4 style="color: #d9ba5e; font-size: 24px; font-family: 'ibm plex sans', sans-serif; text-align: center;"><strong>Volg ons</strong></h4>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="center" class="esd-block-text es-p10t es-p15b">
                                                                                    <p style="font-size: 16px; font-family: 'ibm plex sans', sans-serif; color: #ffffff;">Volg ons op Facebook, Instagram, YouTube en TikTok en blijf op de hoogte van alle ontwikkelingen.</p>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="center" class="esd-block-social es-p10t es-p15b" style="font-size:0">
                                                                                    <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" dir="ltr">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" valign="top" class="es-p10r"><a target="_blank" href="https://www.facebook.com/thatsthespirit.nu/"><img src="https://stripo.app-us1.com/static/assets/img/social-icons/logo-white/facebook-logo-white.png" alt="Fb" title="Facebook" width="32" height="32"></a></td>
                                                                                                <td align="center" valign="top" class="es-p10r"><a target="_blank" href="https://www.instagram.com/thatsthespirit.nu/"><img src="https://stripo.app-us1.com/static/assets/img/social-icons/logo-white/instagram-logo-white.png" alt="Ig" title="Instagram" width="32" height="32"></a></td>
                                                                                                <td align="center" valign="top" class="es-p10r"><a target="_blank" href="https://www.youtube.com/@thatsthespiritnu"><img src="https://stripo.app-us1.com/static/assets/img/social-icons/logo-white/youtube-logo-white.png" alt="Yt" title="YouTube" width="32" height="32"></a></td>
                                                                                                <td align="center" valign="top" esd-tmp-icon-type="tiktok"><a target="_blank" href="https://www.tiktok.com/@thatsthespirit.nu"><img src="https://stripo.app-us1.com/static/assets/img/social-icons/logo-white/tiktok-logo-white.png" alt="Tt" title="TikTok" width="32" height="32"></a></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="center" class="esd-block-text es-p10t es-p15b">
                                                                                    <p style="font-size: 16px; font-family: 'ibm plex sans', sans-serif; color: #ffffff;">Liefs,</p>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="center" class="esd-block-image es-p20b" style="font-size: 0px;"><a target="_blank"><img src="https://content.app-us1.com/9ZxnM/2024/08/14/c509379f-4e9d-43ef-a7b3-b8f016dc3a87.png?id=33924083" alt style="display: block;" data-cf-ir-is-resized="true" data-cf-ir-should-resize-image="true" srcset="https://content.app-us1.com/cdn-cgi/image/fit=scale-down,format=auto,UNUSED_error=redirect,width=184,dpr=1/9ZxnM/2024/08/14/c509379f-4e9d-43ef-a7b3-b8f016dc3a87.png 1x,https://content.app-us1.com/cdn-cgi/image/fit=scale-down,format=auto,UNUSED_error=redirect,width=184,dpr=2/9ZxnM/2024/08/14/c509379f-4e9d-43ef-a7b3-b8f016dc3a87.png 2x,https://content.app-us1.com/cdn-cgi/image/fit=scale-down,format=auto,UNUSED_error=redirect,width=184,dpr=3/9ZxnM/2024/08/14/c509379f-4e9d-43ef-a7b3-b8f016dc3a87.png 3x,https://content.app-us1.com/cdn-cgi/image/fit=scale-down,format=auto,UNUSED_error=redirect,width=184,dpr=4/9ZxnM/2024/08/14/c509379f-4e9d-43ef-a7b3-b8f016dc3a87.png 4x" data-cf-ir-no-srcset="true" width="184"></a></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="esd-block-menu" esd-tmp-divider="2|solid|#ffffff" esd-tmp-menu-padding="10|10">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%" class="es-menu">
                                                                                        <tbody>
                                                                                            <tr class="links">
                                                                                                <td align="center" valign="top" width="33%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-top: 10px;"><a target="_blank" href="https://thatsthespirit.nu/over-ons" style="color: #ffffff;">Over ons</a></td>
                                                                                                <td align="center" valign="top" width="33%" class="es-p10t es-p10b es-p5r es-p5l" style="border-left: 2px solid #ffffff; padding-top: 10px;"><a target="_blank" href="https://thatsthespirit.nu/hulp-en-ondersteuning" style="color: #ffffff;">FAQ</a></td>
                                                                                                <td align="center" valign="top" width="33%" class="es-p10t es-p10b es-p5r es-p5l" style="border-left: 2px solid #ffffff; padding-top: 10px;"><a target="_blank" href="https://" style="color: #ffffff;">Contact</a></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="center" class="esd-block-spacer es-p40t" style="font-size:0" bgcolor="#241F3D">
                                                                                    <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td style="border-bottom: 1px solid #daba5f; background: unset; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <table class="es-footer ac-footer" cellspacing="0" cellpadding="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="es-footer-body" style="padding-top:20px; padding-bottom:20px; background: inherit; font-family: inherit; font-size: 12px; color: inherit;">
                    <p style="font-family: inherit; font-size: inherit; color: inherit;"> Verstuurd naar: %EMAIL%<br><br><a style="font-family: inherit; font-size: inherit; color: inherit; font-weight: inherit;" href="%UNSUBSCRIBELINK%" target="_blank">Uitschrijven</a><br><br><span class="perstag_address" style="color: inherit; font-family: inherit; font-size: inherit; color: inherit;">%SENDER-INFO-SINGLELINE%</span></p>
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>








<?php
// Order line

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
?>