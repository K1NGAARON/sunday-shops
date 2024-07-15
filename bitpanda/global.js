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

            const textNode = document.createTextNode('Panda coins');
            spanElement.appendChild(textNode);
            priceTarget.appendChild(spanElement);
        });
    };
};

$(document).ready(function() {
	addPriceIcon()
})

const oneSizeProductsURL = [];

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
            /*
                CHECK THIS THING
            */
            const anchorElement = `
                <div class="sizer-holder">
                    <a id="openSizer">Calculate Size</a>
                </div>
            `;
            variationsElement.insertAdjacentHTML('beforeend', anchorElement);

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