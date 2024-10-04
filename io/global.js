const faq = [
  {
    question:
      "Who to contact in case of questions, returns, faulty items, sizing, cancellations, logistical, shop related questions?",
    answer:
      "Please contact the Sunday customer service team by sending a mail to shop-support@wardrobe.teamsunday.com",
  },
  {
    question: "How to place an order?",
    answer:
      "Select the item you want, don't forget to select your gender, change your desired quantity to 1 and click “add to cart”. Go to checkout and fill in the required information. On the right, you will see the total value of your order. You will not be charged to place your order.",
  },
  {
    question: "Is there a purchase limit?",
    answer:
      "You can only purchase 1 clothing item. If you try to order more than 1 product item, you won't be able to place an order.",
  },
  {
    question: "Do I need to choose my animal decoration?",
    answer:
      "No, the type of embroidery varies depending on your number of years of employment with Protime & will be distributed by us. The number of different designs is just to show an example of the number of sweaters.",
  },
  {
    question: "How does the sizing work?",
    answer:
      "You only need to measure chest & waist so we can calculate your perfect size fit. This means you won't need to choose the size when placing your order.",
  },
  {
    question: "Will I receive a confirmation?",
    answer:
      "When your order is placed, you will receive an order confirmation via e-mail. Please check your spam folder if you don't receive this confirmation.",
  },
];

function replaceErrorText(e) {
  const errorMSG = document.querySelector("#payment .woocommerce-info");

  if (errorMSG) {
    errorMSG.innerText = `Don't forget to add your Coupon Code to be able to order your iO goodies!
								
								Also keep in mind you're limited to 3 items.
                            `;
    errorMSG.classList.add("active");
  }
}

function hideOneSizeTable() {
  const table = document.querySelector(".variations");
  $(table).hide();
}



  if (oneSizeProductsURL.includes(currentURL)) {
    hideOneSizeTable();
  }
}

$(document).ready(function () {
  const variationsElement = document.querySelector(
    ".woocommerce-product-details__short-description"
  );

  if (variationsElement) {
    const oneSizeProductsURL = [
      "https://iogoodieworld.shop.teamsunday.com/product/io-cap/",
      "https://iogoodieworld.shop.teamsunday.com/product/io-socks/",
      "https://iogoodieworld.shop.teamsunday.com/product/io-bottle-orange/",
      "https://iogoodieworld.shop.teamsunday.com/product/io-bottle-white/",
      "https://iogoodieworld.shop.teamsunday.com/product/io-sports-shirt/",
      "https://iogoodieworld.shop.teamsunday.com/product/io-sports-shirt-purple/",
      "https://iogoodieworld.shop.teamsunday.com/product/io-totebag/",
      "https://iogoodieworld.shop.teamsunday.com/product/io-backpack/",
      "https://iogoodieworld.shop.teamsunday.com/product/io-laptop-sleeve-blue/",
      "https://iogoodieworld.shop.teamsunday.com/product/io-backpack/",
    ];

    const currentURL = window.location.href;

    if (oneSizeProductsURL.includes(currentURL)) {
      return;
    } else {
      const anchorElement = `
                <div class="sizer-holder">
                    <a id="openSizer">Calculate Size</a>
                </div>
            `;
      variationsElement.insertAdjacentHTML("beforeend", anchorElement);
    }
  }

  function waitForElementToExist(elementId, callback) {
    const targetNode = document.documentElement;
    const config = { childList: true, subtree: true };

    const observer = new MutationObserver(function (mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
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

  waitForElementToExist("openSizer", function (e) {
    const modal = document.querySelector("#myModal");
    const openSizer = document.querySelector("#openSizer");

    function showPopUp(e) {
      modal.style.display = "block";
    }

    function hidePopUp(e) {
      modal.style.display = "none";
    }

    let span = document.getElementById("closeModal");

    $(window).click((e) => {
      if (e.target == modal) {
        hidePopUp();
      }
    });

    $(window).on("keyup", function (event) {
      if (event.key == "Escape") {
        hidePopUp();
      }
    });

    // Modal functions
    openSizer.addEventListener("click", showPopUp);
    span.addEventListener("click", hidePopUp);
  });
});


function hideCartItems() {
  let cartItems = document.getElementsByClassName("cart_item");
  console.log(cartItems);

  if (cartItems.length >= 2) {
    console.log("yes");
    for (let i = cartItems.length - 2; i < cartItems.length; i++) {
      cartItems[i].style.display = "none";
    }
  }
}

function hideCheckoutCount() {
  const url = "https://iogoodieworld.shop.teamsunday.com/checkout/";
  const currentURL = window.location.href;

  if (url.includes(currentURL)) {
    $(".shop-cart-count").hide();
  }
}

function buildFAQ(e) {
  const target = document.querySelector(".wrapper.faq-wrapper");

  if (!target) {
    return;
  } else {
    const cards = faq
      .map((faq) => {
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
      })
      .join("");

    target.innerHTML = cards;
  }
}

function accountBalance(e) {
  const balanceTarget = $(".mycred-my-balance-wrapper div");
  const html = `
        <p>
            Balance: 
        </p>
    `;

  balanceTarget.prepend(html);
}

function addPriceIcon(e) {
  const priceTargets = document.querySelectorAll(".price");

  if (!priceTargets) {
    return;
  } else {
    priceTargets.forEach((priceTarget) => {
      const spanElement = document.createElement("span");
      spanElement.className = "woocommerce-Price-amount amount";

      const textNode = document.createTextNode("iO-cOin");
      spanElement.appendChild(textNode);
      priceTarget.appendChild(spanElement);
    });
  }
}

$(document).ready(function () {
  buildFAQ();
  addPriceIcon();
  checkAndHideOneSizeTable();

  setTimeout(function () {
    hideCartItems();
    hideCheckoutCount();
    replaceErrorText();
  }, 1000);
});

