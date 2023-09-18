function closeAccordion() {
    $('.accordion-head').removeClass('active');
    $('.accordion-body').removeClass('active');
    $('.accordion-head .icon').removeClass('active');
    $('.accordion-head .icon i').removeClass('fa-minus').addClass('fa-plus');
}

function handleAccordionClick() {
    closeAccordion();

    let accordionItem = $(this);
    
    accordionItem.children('.accordion-head').toggleClass('active');
    accordionItem.children('.accordion-head').siblings('.accordion-body').toggleClass('active');
    accordionItem.children('.accordion-head .icon').toggleClass('active');
    accordionItem.children('.accordion-head .icon i').removeClass('fa-plus').addClass('fa-minus');
}

$('.accordion-item').click(handleAccordionClick);


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
	
    if (errorMSG) {
        errorMSG.innerText = "You can only order 3 items. Adjust your cart to be able to check out.";
        
    } else {
    }

    errorMSG.classList.add('active');
};

function addPriceIcon(e) {
    const priceTargets = document.querySelectorAll('.price');

    if (!priceTargets) {
        return;
    } else {
        priceTargets.forEach(priceTarget => {
            $('.woocommerce-Price-currencySymbol').remove();

            const spanElement = document.createElement('span');
            const textNode = document.createTextNode('Sundaze Coins');

            spanElement.className = 'woocommerce-Price-amount amount';
            spanElement.appendChild(textNode);

            priceTarget.appendChild(spanElement);
        });
    };
};

$(document).ready(function() {
	accountBalance();
	addPriceIcon();
});