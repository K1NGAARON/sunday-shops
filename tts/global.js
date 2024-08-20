function shortenText() {
  const description = $(
    ".product .read-more-content .elementor-widget-container"
  );
  console.log("Description: ", description);

  if (
    description === null ||
    description === undefined ||
    description.length == 0
  ) {
    return;
  } else {
    const charactersToShow = 120;
    const ellipses = "... ";

    const originalContent = description.html();
    const descriptionLength = $(description).text().length;

    console.log("Total Content length: ", descriptionLength);

    if (descriptionLength > charactersToShow) {
      const firstContent =
        description.text().substr(0, charactersToShow) + ellipses;
      description
        .html(firstContent)
        .append(
          "<a class='read-more-btn' style='display:block; cursor:pointer;'>Lees verder</a>"
        );

      console.log("First content to show:", firstContent);

      $(".read-more-btn").click(function () {
        description.html(originalContent);
      });
    }
  }
}

$(document).ready(function () {
  shortenText();
});
