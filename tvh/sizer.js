$(document).ready(function() {
    const productsSIzeCharts = {
        1369: "winterjacket",
        1277: "softshell",
        1275: "polo-male",
        1631: "polo-female",
        1264: "bodywarmer",
        1265: "business-shirt-longsleeve-male",
        1640: "business-shirt-longsleeve-female",
        1402: "business-shirt-shortsleeve"
    };
    
    const sizeCharts = {
        "winterjacket": { // DONE
            "XS": {
                A: 49, 
            },
            "S": {
                A: 52, 
            },
            "M": {
                A: 55, 
            },
            "L": {
                A: 58, 
            },
            "XL": {
                A: 61, 
            },
            "2XL": {
                A: 64, 
            },
            "3XL": {
                A: 67, 
            },
            "4XL": {
                A: 70, 
            }
        },
        "softshell": { // DONE
            // "XS": {
            //     A: 52, 
            // },
            "S": {
                A: 54, 
            },
            "M": {
                A: 57, 
            },
            "L": {
                A: 61, 
            },
            "XL": {
                A: 64, 
            },
            "2XL": {
                A: 66, 
            },
            "3XL": {
                A: 69, 
            },
            "4XL": {
                A: 71, 
            }
        },
        "polo-male": { // DONE
            "XS": {
                A: 51, 
            },
            "S": {
                A: 53, 
            },
            "M": {
                A: 55, 
            },
            "L": {
                A: 57, 
            },
            "XL": {
                A: 59, 
            },
            "2XL": {
                A: 61, 
            },
            "3XL": {
                A: 63, 
            },
            "4XL": {
                A: 65, 
            }
        },
        "polo-female": { // DONE
            "XS": {
                A: 44, 
            },
            "S": {
                A: 46, 
            },
            "M": {
                A: 48, 
            },
            "L": {
                A: 50, 
            },
            "XL": {
                A: 52, 
            },
            "2XL": {
                A: 54, 
            },
            "3XL": {
                A: 56, 
            },
            "4XL": {
                A: 58, 
            }
        },
        "bodywarmer": { // DONE
            // "XS": {
            //     A: 51.5, 
            // },
            "S": {
                A: 54, 
            },
            "M": {
                A: 57, 
            },
            "L": {
                A: 60, 
            },
            "XL": {
                A: 63, 
            },
            "2XL": {
                A: 66, 
            },
            "3XL": {
                A: 69, 
            },
            "4XL": {
                A: 72, 
            }
        },
        "business-shirt-longsleeve-male": {
            "XS": {
                A: 51.5, 
            },
            "S": {
                A: 53.5, 
            },
            "M": {
                A: 55.5, 
            },
            "L": {
                A: 57.5, 
            },
            "XL": {
                A: 59.5, 
            },
            "2XL": {
                A: 61.5, 
            },
            "3XL": {
                A: 63.5, 
            },
            "4XL": {
                A: 65.5, 
            }
        },
        "business-shirt-longsleeve-female": { // DONE
            "XS": {
                A: 47, 
            },
            "S": {
                A: 49, 
            },
            "M": {
                A: 51, 
            },
            "L": {
                A: 53, 
            },
            "XL": {
                A: 55, 
            },
            "2XL": {
                A: 57, 
            },
            "3XL": {
                A: 59, 
            },
            "4XL": {
                A: 61, 
            }
        },
        "business-shirt-shortsleeve": {
            "XS": {
                A: 51.5, 
            },
            "S": {
                A: 53.5, 
            },
            "M": {
                A: 55.5, 
            },
            "L": {
                A: 57.5, 
            },
            "XL": {
                A: 59.5, 
            },
            "2XL": {
                A: 61.5, 
            },
            "3XL": {
                A: 63.5, 
            },
            "4XL": {
                A: 65.5, 
            }
        },
    }

    // Retrieve product ID
    function getMeasurementChart(productID) {
        // Check if the product ID exists in the productsSizeCharts object
        if (productsSIzeCharts.hasOwnProperty(productID)) {
            return productsSIzeCharts[productID];
        } else {
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
        return;
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

        function updateLabelBasedOnURL() {
            const products = {
                winterjacket: {
                    product_name: "winter jacket",
                    url: "/product/winterjacket/",
                },
                bodywarmer: {
                    product_name: "bodywarmer",
                    url: "/product/bodywarmer/",
                },
                softhsell: {
                    product_name: "softshell",
                    url: "/product/softshell/",
                },
                polo: {
                    product_name: "polo",
                    url: "/product/polo",
                },
                business_shirt: {
                    product_name: "business shirt",
                    url: "/product/business-shirt",
                },
            };
          
            // Get the current URL
            const currentURL = window.location.pathname;
          
            // Initialize a default product name
            let product = "product";
          
            // Check if the current URL matches any of the products
            for (const key in products) {
              if (currentURL.includes(products[key].url)) {
                product = products[key].product_name;
                break;
              }
            }
          
            // Update the label element's text
            const labelElement = document.querySelector('label[for="chestSize"]');
            if (labelElement) {
              labelElement.textContent = `Enter the cm's of your favorite ${product}`;
            }
        }
          
        updateLabelBasedOnURL();

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
                return;
            }
        
            // Get the selected measurement chart from sizeCharts
            const measurements = sizeCharts[sizeChart];
                
            const inputValue = parseFloat(document.getElementById('chestSize').value.replace(',', '.'));
            const roundUpCheckbox = document.getElementById('roundUpCheckbox').checked;
        
            const closestSize = calculateSize(inputValue, roundUpCheckbox, measurements);
        
            console.log("closest size:", closestSize);
        
            const printResult = document.querySelector('#sizeResult');
            printResult.innerHTML = closestSize;
        
            clearInput();
        });

        function calculateSize(inputValue, roundUpCheckbox, measurements) {
            if (!measurements) {
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
        
            // let closestSize = '';
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