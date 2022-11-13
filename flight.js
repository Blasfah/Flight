function flight(flight_ID){

    let flight_el = document.getElementById(flight_ID);
    let flight_track = flight_el.querySelector('.flight-track');

    let current_index = 0;

    let prev_button = flight_el.querySelector('.flight-btn-prev');
    let next_button = flight_el.querySelector('.flight-btn-next');

    prev_button?.addEventListener('click', () => { current_index--; setIndex(current_index); });
    next_button?.addEventListener('click', () => { current_index++; setIndex(current_index); });

    function setIndex(index){
        flight_track.style.transform = `translateX(-${flight_track.offsetWidth * index}px`;
    }
}