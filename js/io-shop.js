function errorText() {
    const errorMSG = document.querySelector('.woocommerce-notice.woocommerce-notice--info.woocommerce-info');

    if (errorMSG) {
        errorMSG.innerText = "You can only order 3 items. Adjust your cart to be able to check out.";

    } else {
        return;
    }

    errorMSG.classList.add('active');
};

function buildFAQ(e) {
    const faqContent = [
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

    const target = document.querySelector('.wrapper.faq-wrapper');

    if (!target) {
        return;
    } else {
        const cards = faqContent.map(faq => {
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
    const priceTargets = document.querySelectorAll('.price');

    if (!priceTargets) {
        return;
    } else {
        priceTargets.forEach(priceTarget => {
            const spanElement = document.createElement('span');
            spanElement.className = 'woocommerce-Price-amount amount';

            const textNode = document.createTextNode('iO-cOin');

            spanElement.appendChild(textNode);

            priceTarget.appendChild(spanElement);
        });
    };
};

function hideOneSizeTable() {
    const table = document.querySelector('.variations');
    $(table).hide();
};

function checkAndHideOneSizeTable() {
    const oneSizeProductsURL = [
        'https://wardrobe-test.shop.teamsunday.com/product/packaging/',
        'https://wardrobe-test.shop.teamsunday.com/product/flyer/',
        'https://wardrobe-test.shop.teamsunday.com/product/io-cap/',
        'https://wardrobe-test.shop.teamsunday.com/product/io-bottle-orange/',
        'https://wardrobe-test.shop.teamsunday.com/product/io-bottle-white/',
        'https://wardrobe-test.shop.teamsunday.com/product/io-socks/',
        'https://wardrobe-test.shop.teamsunday.com/product/io-totebag/'
    ];

    const currentURL = window.location.href;

    if (oneSizeProductsURL.includes(currentURL)) {
        hideOneSizeTable();
    }
};

function hideCartItems() {
    let cartItems = document.getElementsByClassName('cart_item');
    let startIndex = Math.max(cartItems.length - 2, 0);

    for (var i = startIndex; i < cartItems.length; i++) {
        cartItems[i].style.display = 'none';
    }
};

$(document).ready(function () {
    buildFAQ();
    addPriceIcon();
    checkAndHideOneSizeTable();

    setTimeout(function () {
        errorText();
        hideCartItems();
    }, 1000);
});