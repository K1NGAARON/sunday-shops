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

const popUpBtn = document.querySelector('#popUp');
const neededPattern = document.querySelector('#pattern'); // => pull data from custom type


function showPopUp(e) {
    
};

function closePopUp(e) {

};

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
};
  
// Usage example:
// const inputValue = parseInt(document.getElementById('chestSize').value, 10);
// const inputValue = 62;
// const closestSize = calculateSize(inputValue);

// console.log('Closest size:', closestSize);

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input value
    const inputValue = parseInt(document.getElementById('chestSize').value, 10);
    
    // Use the input value as needed
    console.log('Input value:', inputValue);
});