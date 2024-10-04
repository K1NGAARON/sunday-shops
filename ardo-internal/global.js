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


function addPriceIcon(e) {
    const priceTargets = document.querySelectorAll('.price');

    if (!priceTargets) {
        return;
    } else {
        priceTargets.forEach(priceTarget => {
            const spanElement = document.createElement('span');
            spanElement.className = 'woocommerce-Price-amount amount';

            const textNode = document.createTextNode('EUR per package.');
            spanElement.appendChild(textNode);
            priceTarget.appendChild(spanElement);
        });
    };
};

$(document).ready(function() {
	addPriceIcon();
})

// Auto-fill address fields based on selected location
document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('billing_ardo_site');
    const countrySelectElement = document.getElementById('billing_country');
    
    // Mapping campuses to their respective details
    const campusDetails = {
        '': {
            address1: '',
            address2: '',
            city: '',
            zip: '',
            country: '',
            phone: ''
        },
    };

    if (selectElement) {
        selectElement.addEventListener('change', function() {
            const selectedOption = this.value;
            const campus = campusDetails[selectedOption];

            if (campus) {
                document.getElementById('billing_address_1').value = campus.address1 || '';
                document.getElementById('billing_address_2').value = campus.address2 || '';
                document.getElementById('billing_city').value = campus.city || '';
                document.getElementById('billing_postcode').value = campus.zip || '';
                document.getElementById('billing_phone').value = campus.phone || '';
                
                if (countrySelectElement) {
                    countrySelectElement.value = campus.country;
                    countrySelectElement.dispatchEvent(new Event('change'));
                }
            }
        });
    }
});