function shortenText() {
    const charactersToShow = 120;
    const ellipses = "... ";
    
    const description = $('.read-more-content .elementor-widget-container');
    const originalContent = description.html();
    const descriptionLength = $(description).text().length;
    
    console.log('Total Content length: ', descriptionLength);
    
    if (descriptionLength > charactersToShow) {
        const firstContent = description.text().substr(0, charactersToShow) + ellipses;
        description.html(firstContent).append("<a class='read-more-btn' style='display:block; cursor:pointer;'>Lees verder</a>");

        console.log('First content to show:', firstContent);

        $('.read-more-btn').click(function() {
            description.html(originalContent);
        });
    }
}

$(document).ready(function() {
    shortenText();
});