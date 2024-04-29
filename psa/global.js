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

function changeSizeChartText(e) {
    const title = document.querySelector('.description_tab a');

    if (title) {
        title.innerHTML = 'Size Chart';
    }
}

function sizeChartText(e) {
    function hideOneSizeTable() {
        const table = document.querySelector('.variations');
        $(table).hide();
    };
    
    function checkAndHideOneSizeTable() {
        const oneSizeProductsURL = [
            'https://psa.shop.teamsunday.com/product/psa-baseball-cap/',
            'https://psa.shop.teamsunday.com/product/psa-travel-mug/',
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
    const variationsElement = document.querySelector('.woocommerce-product-details__short-description');

    if (variationsElement) {
        const oneSizeProductsURL = [
            'https://psa.shop.teamsunday.com/product/psa-baseball-cap/',
            'https://psa.shop.teamsunday.com/product/psa-travel-mug/',
        ];

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

function addStockLabel() {
    const lowStockProducts = [
        "https://psa.shop.teamsunday.com/product/psa-travel-mug/"
    ];

    const currentURL = window.location.href;
    let heading = document.querySelector('.product_title.entry-title');
    
    if (lowStockProducts.includes(currentURL)) {
        const label = `
            <span class="label">Low on stock</span>
        `;
        heading.insertAdjacentHTML('beforeend', label);
    
    } else {
        return;
    };
}

$(document).ready(function() {
    changeSizeChartText();
    sizeChartText();
    // addStockLabel();
});