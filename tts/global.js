function truncateProductDescription() {
    const charactersToShow = 120;
    const ellipses = "... ";

    let totalContentLength = 0;
    const pElements = $(".read-more-content .elementor-widget-container p");

    // Calculate the total content length of all <p> elements combined
    pElements.each(function() {
        totalContentLength += $(this).text().length;
    });

    // If the total content length exceeds the limit, hide all <p> elements and add a "Read more" button
    if (totalContentLength > charactersToShow) {
        pElements.hide();

        // Show the first paragraph truncated with the ellipsis and add the "Read more" button
        const firstPContent = pElements.first().text().substr(0, charactersToShow) + ellipses;
        pElements.first().html(firstPContent).show().append("<a class='read-more' style='display:block; cursor:pointer;'>Lees verder</a>");

        // Event listener for the "Read more" link
        $(".read-more").click(function(e) {
            e.preventDefault();

            // Show all hidden <p> elements and remove the "Read more" button
            pElements.show();
            $(this).remove();
        });
    }
}

$(document).ready(truncateProductDescription);