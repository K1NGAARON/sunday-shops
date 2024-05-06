function changeImageSrc() {
    let logo = $('img.custom-logo');
    console.log(logo)
    if (logo.length > 0) {
        logo.attr('src', 'https://deel.shop.teamsunday.com/wp-content/uploads/sites/10/2024/05/Deel-logo.svg');
    }
};

$(document).ready(function(){
    changeImageSrc();
});