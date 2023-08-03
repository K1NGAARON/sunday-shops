function sizeChartText(e) {
    const title = document.querySelector('.description_tab a');

    if (title) {
        title.innerHTML = 'Size Chart';
    }
}

$(document).ready(function() {
    sizeChartText();
});