// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the iframe element
    let iframe = document.getElementById('vimeoPlayer');
    
    // Initialize the Vimeo Player
    let player = new Vimeo.Player(iframe);
    
    // Add event listener to the button
    document.getElementById('pauseButton').addEventListener('click', function() {
        player.pause().then(function() {
            console.log('Video paused');
        }).catch(function(error) {
            console.error('Error pausing the video:', error);
        });
    });
});