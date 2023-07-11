const faq = [
    {
        question: "Who to contact in case of questions, returns, faulty items, sizing, cancellations, logistical, shop related questions?",
        answer: "Please contact the Sunday customer service team by sending a mail to shop-support@wardrobe.teamsunday.com",
    },
    {
        question: "How to place an order?",
        answer: "Select the item you want, don’t forget to select your gender, change your desired quantity to 1 and click “add to cart”. Go to checkout and fill in the required information. On the right, you will see the total value of your order. You will not be charged to place your order.",
    },
    {
        question: "Is there a purchase limit?",
        answer: "You can only purchase 1 clothing item. If you try to order more than 1 product item, you won’t be able to place an order.",
    },
    {
        question: "Do I need to choose my animal decoration?",
        answer: "No, the type of embroidery varies depending on your number of years of employment with Protime & will be distributed by us. The number of different designs is just to show an example of the number of sweaters.",
    },
    {
        question: "How does the sizing work?",
        answer: "You only need to measure chest & waist so we can calculate your perfect size fit. This means you won’t need to choose the size when placing your order.",
    },
    {
        question: "Will I receive a confirmation?",
        answer: "When your order is placed, you will receive an order confirmation via e-mail. Please check your spam folder if you don’t receive this confirmation.",
    }
];

function replaceErrorText(e) {
    const errorMSG = document.querySelector('#payment .woocommerce-info');

    if (errorMSG) {
        errorMSG.innerText = "Don't forget to add your Coupon Code to be able to order your iO goodies!";
        
    } else {
        // Nothing
    }

    errorMSG.classList.add('active');
}

function buildFAQ(e) {
    const target = document.querySelector('.wrapper.faq-wrapper');

    if (!target) {
        return;
    } else {
        const cards = faq.map(faq => {
            return `
                <div class="question">
                    <h5>
                        ${faq.question}
                    </h5>
                    <p>
                        ${faq.answer}
                    </p>
                </div>
            `;
        }).join('');
    
        target.innerHTML = cards;
    };
};

function accountBalance(e) {
    const balanceTarget = $('.mycred-my-balance-wrapper div');
    const html = `
        <p>
            Balance: 
        </p>
    `;

    balanceTarget.prepend(html);
};

function addPriceIcon(e) {
    // Get all parent divs with class "price"
    const priceTargets = document.querySelectorAll('.price');

    if (!priceTargets) {
        return;
    } else {
        // Loop through each parent div
        priceTargets.forEach(priceTarget => {
            // Create a new <span> element
            const spanElement = document.createElement('span');
            spanElement.className = 'woocommerce-Price-amount amount';

            // Create a text node with the content "iO-cOin"
            const textNode = document.createTextNode('iO-cOin');

            // Append the text node to the <span> element
            spanElement.appendChild(textNode);

            // Append the <span> element to the parent div
            priceTarget.appendChild(spanElement);
        });
    };
};

$(document).ready(function() {
    buildFAQ();
	addPriceIcon();
	
    setTimeout(function() {
        replaceErrorText();
    }, 1000);
});