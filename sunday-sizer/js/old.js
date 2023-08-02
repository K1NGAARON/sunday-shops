$(document).ready(function() {
	const measurements = [
    { 
        size: 'XS', 
        measurements: { 
            A: 51.5, 
            B: 69, 
            C: 65 
        } 
    },
    { 
        size: 'S', 
        measurements: { 
            A: 53.5, 
            B: 71, 
            C: 66 
        } 
    },
    { 
        size: 'M', 
        measurements: { 
            A: 55.5, 
            B: 73, 
            C: 67 
        } 
    },
    { 
        size: 'L', 
        measurements: { 
            A: 57.5, 
            B: 74.5, 
            C: 68 
        } 
    },
    { 
        size: 'XL', 
        measurements: { 
            A: 59.5, 
            B: 76, 
            C: 69 
        } 
    },
    { 
        size: '2XL',
        measurements: { 
            A: 61.5, 
            B: 78, 
            C: 70 
        } 
    },
    { 
        size: '3XL', 
        measurements: { 
            A: 63.5, 
            B: 80, 
            C: 71 
        } 
    },
    { 
        size: '4XL', 
        measurements: { 
            A: 65.5, 
            B: 82, 
            C: 72 
        } 
    },
];

    const anchorElement = `
        <div class="sizer-holder">
            <a id="openSizer">Calculate Size</a>
            <p id="sizer-holder-element">
                Your ideal size:
                <br>
                <span id="sizeResult"></span>
            </p>
        </div>
    `;

    $(document).ready(function() {
        function retrieveProductID() {
            let formElement = document.querySelector('.cart');
            let productId = formElement.getAttribute('data-product_id');
    
            console.log(productId);
        }
    
        if (window.location.href.includes("/product/")) {
            retrieveProductID();
        }
    });

    const variationsElement = document.querySelector('.woocommerce-product-details__short-description');
    if (variationsElement) {
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

    const sizerResultElement = document.querySelector('#sizer-holder-element');

    function showSizerResultDiv(e) {
        sizerResultElement.style.display = 'block';
    }
      
    // Usage example
    waitForElementToExist('openSizer', function(element) {
        const modal = document.querySelector('#myModal');
        const openSizer = document.querySelector('#openSizer');

        function showPopUp(e) {
            modal.style.display = "block";
        }
    
        function hidePopUp(e) {
            modal.style.display = "none";
            showSizerResultDiv();
        }
    
        let span = document.getElementById("closeModal");
        
        $(window).click((e) => {
            if (e.target == modal) {
                hidePopUp();
            }
        })
        
        document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const inputValue = parseFloat(document.getElementById('chestSize').value.replace(',', '.'));
            const roundUpCheckbox = document.getElementById('roundUpCheckbox').checked;
        
            const closestSize = calculateSize(inputValue, roundUpCheckbox);

            console.log(closestSize);
        
            const printResult = document.querySelector('#sizeResult');
            printResult.innerHTML = closestSize;
        
            clearInput();
        });
        
        function calculateSize(inputValue, roundUpCheckbox) {
            const cutoff = 5;

            const xsSizeMeasurement = measurements.find(size => size.size === 'XS').measurements.A;
            const largestSizeMeasurement = measurements.find(size => size.size === '4XL').measurements.A;
        
            const xsCutoffPoint = xsSizeMeasurement - cutoff;
            const largestSizeCutoffPoint = largestSizeMeasurement + cutoff;
        
            if (inputValue <= xsCutoffPoint || inputValue >= largestSizeCutoffPoint) {
                return "Your size is outside our measurement chart. Please select the 'other size' below.";
            }
        
            // let closestSize = '';
            let smallestDifference = Infinity;
        
            for (let i = 0; i < measurements.length; i++) {
                const currentSize = measurements[i];
                const measurementA = currentSize.measurements.A;
                const difference = Math.abs(inputValue - measurementA);
        
                if (difference < smallestDifference) {
                    smallestDifference = difference;
                    closestSize = currentSize.size;
                }
            };

            if (roundUpCheckbox && closestSize === 'XS' && inputValue < xsCutoffPoint) {
                return 'Your size is outside our measurement chart.';
            };
            
            if (roundUpCheckbox && closestSize !== '4XL') {
                const currentIndex = measurements.findIndex(size => size.size === closestSize);
                const nextSize = measurements[currentIndex + 1];
                return nextSize ? nextSize.size : closestSize;
            };
            
            return closestSize;
        }     
        
        function clearInput() {
            document.getElementById('chestSize').value = "";
            document.getElementById('roundUpCheckbox').checked = false;
        
            hidePopUp();
        }
    
        openSizer.addEventListener('click', showPopUp);
        span.addEventListener('click', hidePopUp);
    });
});