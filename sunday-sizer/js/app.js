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

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = parseFloat(document.getElementById('chestSize').value.replace(',', '.'));
    const roundUpCheckbox = document.getElementById('roundUpCheckbox').checked;

    // Call the calculateSize function
    let closestSize = calculateSize(inputValue);

    if (roundUpCheckbox) {
        closestSize = roundUpSize(closestSize);
    }

    const printResult = document.querySelector('#result');
    printResult.innerHTML = closestSize;

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
}