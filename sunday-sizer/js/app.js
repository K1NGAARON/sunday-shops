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
                <span id="sizeResult">

                </span>
            </p>
        </div>
    `

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
        
            // Call the calculateSize function
            let closestSize = calculateSize(inputValue);
        
            if (roundUpCheckbox) {
                closestSize = roundUpSize(closestSize);
            }
        
            const printResult = document.querySelector('#sizeResult');
            printResult.innerHTML = closestSize;
            console.log(closestSize);
        
            clearInput();
        });
        
        function calculateSize(inputValue) {
            let closestSize = '';
            let smallestDifference = Infinity;
        
            for (let i = 0; i < measurements.length; i++) {
                const currentSize = measurements[i];
                const measurementA = currentSize.measurements.A;
                const difference = Math.abs(inputValue - measurementA);
        
                if (difference < smallestDifference) {
                    smallestDifference = difference;
                    closestSize = currentSize.size;
                }
            }
        
            return closestSize;
        }
        
        function roundUpSize(size) {
            const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'];
            const index = sizes.indexOf(size);
        
            if (index < sizes.length - 1 && size !== '4XL') {
                return sizes[index + 1];
            }
        
            return size;
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