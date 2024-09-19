document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
    });

    // Update the navigate function
    window.navigate = function(index) {
        swiper.slideTo(index, 1000, true);
        document.querySelectorAll('.link li').forEach((el, i) => {
            el.classList.toggle('activelink', i === index);
        });
    };
});
