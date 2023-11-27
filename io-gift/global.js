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

function replaceErrorText(e) {
    const errorMSG = document.querySelector('#payment .woocommerce-info');

    if (errorMSG) {
        errorMSG.innerText = 
            `Don't forget to add your Voucher code to be able to order your End of Year gift.
				Also keep in mind you're limited to 1 item.
            `;
        errorMSG.classList.add('active');
    }
}

function addPriceIcon(e) {
    const priceTargets = document.querySelectorAll('.price');

    if (!priceTargets) {
        return;
    } else {
        priceTargets.forEach(priceTarget => {
            const spanElement = document.createElement('span');
            spanElement.className = 'woocommerce-Price-amount amount';

            const textNode = document.createTextNode('iO-gift');
            spanElement.appendChild(textNode);
            priceTarget.appendChild(spanElement);
        });
    };
};

function sizeChartText(e) {
    function hideOneSizeTable() {
        const table = document.querySelector('.variations');
        $(table).hide();
    };
    
    function checkAndHideOneSizeTable() {
        const oneSizeProductsURL = [
            'https://io-gift.shop.teamsunday.com/product/io-backpack/',
			'https://io-gift.shop.teamsunday.com/product/io-laptop-sleeve/'
        ];
    
        const currentURL = window.location.href;
      
        if (oneSizeProductsURL.includes(currentURL)) {
            hideOneSizeTable();
            $('.sizer-holder').hide();
        }
    };


    const title = document.querySelector('.description_tab a');

    if (title) {
        title.innerHTML = 'Size Chart';
    }

    checkAndHideOneSizeTable();
}

$(document).ready(function() {
    sizeChartText();
	addPriceIcon();
	
	setTimeout(function() {
        replaceErrorText();
    }, 1000);
});