$(document).ready(function() {
	let quantityField = $("input.qty.ajax-ready");
	
	function changeMinValue() {
		quantityField.val(100);
	}

    function changeCheckoutBtn() {
        const checkoutBtn = document.querySelector('#place_order');
        $(checkoutBtn).text('Request Quote');
    }

    function changeSideBarBtnText() {
        const checkoutBtn = document.querySelector('.woocommerce-mini-cart__buttons.buttons .button.checkout');
        $(checkoutBtn).text('Request Quote');
    }

	if (quantityField) {
		changeMinValue();
	}

    setTimeout(function() {
        changeSideBarBtnText();

        if (window.location.href.includes("/checkout/")) {
            changeCheckoutBtn();
        };
	}, 1000);
});

$(document).ready(function() {
    $('.product-loop-wrapper').each(function() {
        let productLink = $(this).find('.woocommerce-LoopProduct-link.woocommerce-loop-product__link').attr('href');

        $(this).find('.loop-add-to-cart-btn').removeAttr('href')
            .removeClass('ajax_add_to_cart')
            .removeAttr('data-quantity data-product_id data-product_sku title rel')
        
        $(this).on('click', '.loop-add-to-cart-btn', function(event) {
            event.preventDefault();
            window.location.href = productLink;
        });
    });
});

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
            console.log('hide this item')
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