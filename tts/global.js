function truncateProductDescription() {
    const charactersToShow = 80;
    const ellipses = "... ";

    let content = $(".read-more-content .elementor-widget-container").html();

    if (content.length > charactersToShow) {
        let a = content.substr(0, charactersToShow);
        let b = content.substr(charactersToShow - content.length);
        let html = a + "<span class='truncated'>" + ellipses + "<a class='read-more'>Read more</a></span><span class='truncated' style='display:none'>" + b + "</span>";
        
        $(".read-more-content .elementor-widget-container").html(html);
    }


    $(".read-more").click(function(e) {
        e.preventDefault();
        $(".read-more-content .elementor-widget-container .truncated").toggle();
    });
};

$(document).ready(truncateProductDescription);