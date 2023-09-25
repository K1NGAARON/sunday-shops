function hideOneSizeTable() {
    const table = document.querySelector('.variations');
    $(table).hide();
};

function checkAndHideOneSizeTable() {
    const oneSizeProductsURL = [
        'https://pgs.shop.teamsunday.com/product/foute-kersttrui-man/',
        'https://pgs.shop.teamsunday.com/product/foute-kersttrui-vrouw/',
        'https://pgs.shop.teamsunday.com/product/softshell/',
        'https://pgs.shop.teamsunday.com/product/business-shirt/',
        'https://pgs.shop.teamsunday.com/product/muts/',
        'https://pgs.shop.teamsunday.com/product/sjaal/'
    ];

    const currentURL = window.location.href;
  
    if (oneSizeProductsURL.includes(currentURL)) {
        hideOneSizeTable();
        
    }
};