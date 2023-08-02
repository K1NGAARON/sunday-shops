$(document).ready(function() {
    const productsSIzeCharts = {
        2054: "unisex_hoodies_sweaters",
        2061: "shirts",
        2086: "unisex_hoodies_sweaters", // Sport shirt blue
    };
    
    const sizeCharts = {
        "unisex_hoodies_sweaters": {
            "XS": {
                A: 51.5, 
                B: 69, 
                C: 65 
            },
            "S": {
                A: 53.5, 
                B: 71, 
                C: 66 
            },
            "M": {
                A: 55.5, 
                B: 73, 
                C: 67
            },
            "L": {
                A: 57.5, 
                B: 74.5, 
                C: 68 
            },
            "XL": {
                A: 59.5, 
                B: 76, 
                C: 69 
            },
            "2XL": {
                A: 61.5, 
                B: 78, 
                C: 70 
            },
            "3XL": {
                A: 63.5, 
                B: 80, 
                C: 71 
            },
            "4XL": {
                A: 65.5, 
                B: 82, 
                C: 72 
            }
        },
        "shirts": {
            "XS": {
                A: 52.5, 
                B: 71, 
                C: 67
            },
            "S": {
                A: 54.5, 
                B: 73, 
                C: 68
            },
            "M": {
                A: 56.5, 
                B: 75,
                C: 69
            },
            "L": {
                A: 58.5, 
                B: 76.5,
                C: 70
            },
            "XL": {
                A: 60.5, 
                B: 78,
                C:  71
            },
            "2XL": {
                A: 62.5,
                B: 80,
                C: 72
            },
            "3XL": {
                A: 64.5,
                B: 82,
                C: 73
            },
            "4XL" : {
                A: 66.5,
                B: 84,
                C: 74
            }
        },
    }

    // Retrieve product ID
    function getMeasurementChart(productID) {
        // Check if the product ID exists in the productsSizeCharts object
        if (productsSIzeCharts.hasOwnProperty(productID)) {
            return productsSIzeCharts[productID];
        } else {
            // If the product ID is not found in the object, return null or any other default value
            return null;
        }
    }
    
    // Call your existing function to retrieve the product ID
    function retrieveProductID() {
        let formElement = document.querySelector('.cart');
        let productId = formElement.getAttribute('data-product_id');
        return productId;
    }
    
    let productId = retrieveProductID();
    let sizeChart = getMeasurementChart(productId);
    
    if (sizeChart) {
        console.log(productId);
        console.log(`Use measurement chart: ${sizeChart}`);
    } else {
        console.log("No measurement chart found for this product.");
    }

    //  Retrieve product ID
    if (window.location.href.includes("/product/")) {
        retrieveProductID();
    };
    

    // Add sizer pop up button
    const variationsElement = document.querySelector('.woocommerce-product-details__short-description');
    if (variationsElement) {
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
        
            let productId = retrieveProductID();
            let sizeChart = getMeasurementChart(productId);
        
            if (!sizeChart) {
                console.log("No measurement chart found for this product.");
                return;
            }
        
            // Get the selected measurement chart from sizeCharts
            const measurements = sizeCharts[sizeChart];
                
            const inputValue = parseFloat(document.getElementById('chestSize').value.replace(',', '.'));
            const roundUpCheckbox = document.getElementById('roundUpCheckbox').checked;
        
            const closestSize = calculateSize(inputValue, roundUpCheckbox, measurements);
        
            console.log(closestSize);
        
            const printResult = document.querySelector('#sizeResult');
            printResult.innerHTML = closestSize;
        
            clearInput();
        });

        function calculateSize(inputValue, roundUpCheckbox, measurements) {
            if (!measurements) {
                console.log("No measurement chart found.");
                return;
            }
        
            const cutoff = 5;
        
            const xsSizeMeasurement = measurements['XS']['A'];
            const largestSizeMeasurement = measurements['4XL']['A'];
        
            const xsCutoffPoint = xsSizeMeasurement - cutoff;
            const largestSizeCutoffPoint = largestSizeMeasurement + cutoff;
        
            if (inputValue <= xsCutoffPoint || inputValue >= largestSizeCutoffPoint) {
                return "Your size is outside our measurement chart. Please select the 'other size' below.";
            }
        
            let closestSize = '';
            let smallestDifference = Infinity;
        
            // Iterate over the sizes (XS, S, M, ...) in the measurements object
            for (const size in measurements) {
                const measurementA = measurements[size]['A'];
                const difference = Math.abs(inputValue - measurementA);
        
                if (difference < smallestDifference) {
                    smallestDifference = difference;
                    closestSize = size;
                }
            }
        
            if (roundUpCheckbox && closestSize === 'XS' && inputValue < xsCutoffPoint) {
                return 'Your size is outside our measurement chart.';
            }
        
            if (roundUpCheckbox && closestSize !== '4XL') {
                const sizes = Object.keys(measurements);
                const currentIndex = sizes.indexOf(closestSize);
                const nextSize = sizes[currentIndex + 1];
                return nextSize ? nextSize : closestSize;
            }
        
            return closestSize;
        }  
        
        function clearInput() {
            document.getElementById('chestSize').value = "";
            document.getElementById('roundUpCheckbox').checked = false;
        
            hidePopUp();
        }

        // Modal functions 
        openSizer.addEventListener('click', showPopUp);
        span.addEventListener('click', hidePopUp);
    })
});