$(document).ready(function() {
    const variations = document.querySelector('.variations_form');

    if (!variations) {
        return;
    } else {
        const variationsElement = document.querySelector('.woocommerce-product-details__short-description');

        if (variationsElement) {
            const anchorElement = `
                <div class="sizer-holder">
                    <a id="openSizer">Calculate Size</a>
                </div>
            `;
            variationsElement.insertAdjacentHTML('beforeend', anchorElement);
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
    }
});