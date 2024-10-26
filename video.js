document.addEventListener('DOMContentLoaded', () => {
    // Select all video elements
    const videos = document.querySelectorAll('.video');

    videos.forEach(video => {
        // Play video when hovered
        video.addEventListener('mouseenter', () => {
            video.play();
        });

        // Pause video and reset when hover ends
        video.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0; // Reset the video to the beginning
        });
    });
});