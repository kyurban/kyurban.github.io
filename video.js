document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video');

    videos.forEach(video => {
        // Play video when hovered (desktop)
        video.addEventListener('mouseenter', () => {
            video.play();
        });

        // Pause video and reset when hover ends
        video.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });

        // Play/Pause video on tap (mobile)
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    });
});
