function carousel(carouselID){

    let carousel = document.getElementById(carouselID);
    let carousel_track = carousel.querySelector('.carousel-track');

    let currentIndex = 0;

    let prev_button = carousel.querySelector('.prev');
    let next_button = carousel.querySelector('.next');

    prev_button?.addEventListener('click', () => { currentIndex--; setIndex(currentIndex); });
    next_button?.addEventListener('click', () => { currentIndex++; setIndex(currentIndex); });

    function setIndex(index){
        carousel_track.style.transform = `translateX(-${carousel_track.offsetWidth * index}px`;
    }
}