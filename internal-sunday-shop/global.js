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

function accountBalance(e) {
    const balanceTarget = $('.mycred-my-balance-wrapper div');
    const html = `
        <p>
            Balance: 
        </p>
    `;

    balanceTarget.prepend(html);
};

function replaceErrorText(e) {
    const errorMSG = document.querySelector('.woocommerce-notice.woocommerce-notice--info.woocommerce-info');
	const errorPop = document.querySelector('.woocommerce-error li');
	
    if (errorMSG) {
        errorMSG.innerText = "You can only order 3 items. Adjust your cart to be able to check out.";
        
    } else {
        // Nothing
    }

    errorMSG.classList.add('active');
};

function addPriceIcon(e) {
    // Get all parent divs with class "price"
    const priceTargets = document.querySelectorAll('.price');

    if (!priceTargets) {
        return;
    } else {
        // Loop through each parent div
        priceTargets.forEach(priceTarget => {
            $('.woocommerce-Price-currencySymbol').remove();

            const spanElement = document.createElement('span');
            spanElement.className = 'woocommerce-Price-amount amount';

            const textNode = document.createTextNode('Sundaze Coins');

            spanElement.appendChild(textNode);

            priceTarget.appendChild(spanElement);
        });
    };
};

$(document).ready(function() {
	accountBalance();
	addPriceIcon();
});

// setTimeout(function() {
//     replaceErrorText();
// }, 1000);