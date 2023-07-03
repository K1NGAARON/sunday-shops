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
        answer: "xxx",
    },
    {
        question: "How does the sizing work?",
        answer: "You only need to measure chest & waist so we can calculate your perfect size fit. This means you won’t need to choose the size when placing your order.",
    },
    {
        question: "What if my size could not be calculated?",
        answer: "If your size is outside our measurement chart, please select the 'other' size and fill in your chest measurement during checkout.",
    },
    {
        question: "What if I need items for a fair?",
        answer: "xxx",
    },
    {
        question: "When will I receive new coins?",
        answer: "Xxx",
    },
    {
        question: "Where can I see my account balance?",
        answer: "Xxx",
    },
    {
        question: "What If my desired item is out of stock?",
        answer: "Xxx",
    },
    {
        question: "Can I order clothes for people other than me?",
        answer: "Xxx",
    },
    {
        question: "How will I get my clothes?",
        answer: "Xxx",
    },
    // {
    //     question: "",
    //     answer: "",
    // },
];

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

function replaceErrorText(e) {
    const errorMSG = document.querySelector('.woocommerce-notice.woocommerce-notice--info.woocommerce-info');
	const errorPop = document.querySelector('.woocommerce-error li');
	
    if (errorMSG) {
        errorMSG.innerText = "You can only order 3 items. Adjust your cart to be able to check out.";
        
    } else {
        // Nothing
    }

    errorMSG.classList.add('active');
};

function addPriceIcon(e) {
    // Get all parent divs with class "price"
    const priceTargets = document.querySelectorAll('.price');

    if (!priceTargets) {
        return;
    } else {
        // Loop through each parent div
        priceTargets.forEach(priceTarget => {
            const spanElement = document.createElement('span');
            spanElement.className = 'woocommerce-Price-amount amount';

            const textNode = document.createTextNode('TSX');

            spanElement.appendChild(textNode);

            priceTarget.appendChild(spanElement);
        });
    };
};

$(document).ready(function() {
	accountBalance();
    buildFAQ();
	addPriceIcon();
});

// setTimeout(function() {
//     replaceErrorText();
// }, 1000);