const faq = [
    {
        question: "What if my size could not be calculated?",
        answer: "Please send an email to shop-support@wardrobe.teamsunday.com with your chest measurement and if you want a looser fit or not."
    },
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
        question: "How does the sizing work?",
        answer: "You only need to measure chest & waist so we can calculate your perfect size fit. This means you won’t need to choose the size when placing your order.",
    },
    {
        question: "Will I receive a confirmation?",
        answer: "When your order is placed, you will receive an order confirmation via e-mail. Please check your spam folder if you don’t receive this confirmation.",
    },
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

function addSizeInfoCheckout(e) {
    const target = document.querySelector('.woocommerce-form-coupon-toggle');
    const template = `
        <div class="woocommerce-form-coupon-toggle" style="
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--yellow);
        ">
            
            <div class="woocommerce-info">
                Instructions on how to measure below.
            </div>
        </div>
    `;

    if(!target) {
        return;
    } else {
        target.insertAdjacentHTML('afterend', template);
    }
};

function sizeChartText(e) {
    const title = document.querySelector('.description_tab a');

    if (title) {
        title.innerHTML = 'Size Chart';
    }
};

$(document).ready(function() {
    buildFAQ();
	addSizeInfoCheckout();
	sizeChartText();
});