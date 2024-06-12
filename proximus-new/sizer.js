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
			$('.woocommerce-tabs').hide();
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
            // Pause Vimeo
            let iframe = document.getElementById('vimeoPlayer');
            let player = new Vimeo.Player(iframe);
            player.pause().then(function() {
                console.log('Video paused');
            }).catch(function(error) {
                console.error('Error pausing the video:', error);
            });

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