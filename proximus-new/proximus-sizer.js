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

const oneSizeProductsURL = [
	'https://proximus.teamsunday.com/product/proximus-socks/',
    'https://proximus.teamsunday.com/nl/product/proximus-socks/',
    'https://proximus.teamsunday.com/fr/produit/proximus-socks/',
    'https://proximus.teamsunday.com/product/proximus-sliders/',
    'https://proximus.teamsunday.com/nl/product/proximus-sliders/',
    'https://proximus.teamsunday.com/fr/produit/proximus-sliders/',
    'https://proximus.teamsunday.com/product/proximus-sneakers/',
    'https://proximus.teamsunday.com/nl/product/proximus-sneakers/',
    'https://proximus.teamsunday.com/fr/produit/proximus-sneakers/'
];

function sizeChartText(e) {
    function hideOneSizeTable() {
        const table = document.querySelector('.variations');
        $(table).hide();
    };
    
    function checkAndHideOneSizeTable() {
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
});

$(document).ready(function() {
    const variationsElement = document.querySelector('.woocommerce-product-details__short-description');

    if (variationsElement) {
        const currentURL = window.location.href;

        if (oneSizeProductsURL.includes(currentURL)) {
            return;
        } else {
            const anchorElement = `
                <div class="sizer-holder">
                    <a id="openSizer">Calculate Size</a>
                </div>
            `;
            variationsElement.insertAdjacentHTML('beforeend', anchorElement);
        }
    }

    function waitForElementToExist(elementId, callback) {
        const targetNode = document.documentElement;
        const config = { childList: true, subtree: true };
      
        const observer = new MutationObserver(function(mutationsList, observer) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    const element = document.getElementById(elementId);
                    if (element) {
                        observer.disconnect();
                        callback(element);
                    }
                }
            }
        });
      
        observer.observe(targetNode, config);
    }

    waitForElementToExist('openSizer', function(e) {
        const modal = document.querySelector('#myModal');
        const openSizer = document.querySelector('#openSizer');

        function showPopUp(e) {
            modal.style.display = "block";
        }
    
        function hidePopUp(e) {


            modal.style.display = "none";
        }
    
        let span = document.getElementById("closeModal");
        
        $(window).click((e) => {
            if (e.target == modal) {
                hidePopUp();
            }
        })

        $(window).click((e) => {
            if (e.target == modal) {
                hidePopUp();
            }
        })

        // Modal functions 
        openSizer.addEventListener('click', showPopUp);
        span.addEventListener('click', hidePopUp);
    })
});

function addTextToCheckout() {
    if (window.location.href.indexOf("/checkout-2/order-received/") > -1) {
        $('.woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received').text("Thank you for ordering on the Proximus shop!");
       
        let successNotice = $(".woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received");
        successNotice.after("<p class='track-trace'>You will receive a track & trace once your order is shipped.</p>");
    }
};

$(document).ready(function() {
    addTextToCheckout()
});