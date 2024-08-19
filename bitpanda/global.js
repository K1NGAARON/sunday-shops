function closeAccordion() {
    $('.accordion-head').removeClass('active');
    $('.accordion-body').removeClass('active');
    $('.accordion-head').children('.icon').removeClass('active');
    $('.accordion-head').children('.icon').children('i').removeClass('fa-minus').addClass('fa-plus');
}

$('.accordion-item').click(function () {
    let isActive = $(this).children('.accordion-head').hasClass('active');
    
    closeAccordion();

    if (!isActive) {
        $(this).children('.accordion-head').toggleClass('active');
        $(this).children('.accordion-head').siblings('.accordion-body').toggleClass('active');
        $(this).children('.accordion-head').children('.icon').toggleClass('active');
        $(this).children('.accordion-head').children('.icon').children('i').removeClass('fa-plus').addClass('fa-minus');
    }
});

function addPriceIcon(e) {
    const priceTargets = document.querySelectorAll('.price');

    if (!priceTargets) {
        return;
    } else {
        priceTargets.forEach(priceTarget => {
            const spanElement = document.createElement('span');
            spanElement.className = 'woocommerce-Price-amount amount';

            const textNode = document.createTextNode('Panda coins');
            spanElement.appendChild(textNode);
            priceTarget.appendChild(spanElement);
        });
    };
};

function accountBalance(e) {
    const balanceTarget = $('.mycred-my-balance-wrapper div');
    const html = `
        <p>
            Balance: 
        </p>
    `;

    balanceTarget.prepend(html);
};

function addNotificationToCheckout() {
    const checkoutUrl = [
        'https://bitpanda.teamsunday.com/checkout/'
    ];

    const currentURL = window.location.href;

    if (checkoutUrl.includes(currentURL)) {
        const target = $('.checkout.woocommerce-checkout');
        const notification = `
            <div class="checkout-notification">
                <p>
                    Did you fill in your correct size?
                </p>
            </div>
        `;

        target.prepend(notification);
    }
};

function addTextToClassicRange() {
    const checkoutUrl = [
        'https://bitpanda.teamsunday.com/product-category/classic-range/'
    ];

    const currentURL = window.location.href;

    if (checkoutUrl.includes(currentURL)) {
        const target = $('.woostify-sorting');
        const notification = `
            <div class="category-intro">
                <p>
                    Did you always love your original Bitpanda merch but couldn't get more? Now's your chance with the classic range, restocking your favourite items. 
                    <br>
                    This Classic Range from our onboarding essentials has its own sizing information and limited quantities, so get there quick. 
                </p>
            </div>
        `;

        target.prepend(notification);
    }
};

$(document).ready(function() {
	addPriceIcon();
	accountBalance();
    addNotificationToCheckout();
    addTextToClassicRange();
})

const oneSizeProductsURL = [
    'https://bitpanda.teamsunday.com/product/bitpanda-towel/',
    'https://bitpanda.teamsunday.com/product/bitpanda-sunglasses/',
	'https://bitpanda.teamsunday.com/product/bitpanda-socks/'
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
    const variationsElement = document.querySelector('.woocommerce-tabs .wc-tabs .description_tab');

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
            
            $('.row .col:first-child').append(anchorElement);
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
        const addToCartButton = document.querySelector('.single_add_to_cart_button');

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

        $(window).on('keyup', function(event) {
            if (event.key == "Escape") {
                hidePopUp();
            }
        });

        // Modal functions 
        openSizer.addEventListener('click', showPopUp);
        span.addEventListener('click', hidePopUp);
    })
});

function animateTrees(obj, initVal, lastVal, duration) {
    let startTime = null;

    const step = (currentTime) => {
        if (!startTime) {
            startTime = currentTime;
        }

        const progress = Math.min((currentTime - startTime) / duration, 1);

        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };

    window.requestAnimationFrame(step);
}

let numberToAnimate = document.querySelector('.number-to-animate');

function load() {
    if (numberToAnimate == null) {
        return;
    } else {
        animateTrees(numberToAnimate, 0, 12, 3000);
    }
}

let startScrollDiv = document.querySelector('.startScroll');

if (startScrollDiv !== null) {  // Check if .startScroll exists on the page
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                load();
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(startScrollDiv);
}