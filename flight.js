function flight(flight_ID){

    let flight_el = document.getElementById(flight_ID);
    let flight_track = flight_el.querySelector('.flight-track');
    let flight_slides = flight_track.querySelectorAll('.flight-slide');

    let current_index = 0;

    let prev_button = flight_el.querySelector('.flight-btn-prev');
    let next_button = flight_el.querySelector('.flight-btn-next');

    prev_button?.addEventListener('click', () => { current_index--; setIndex(current_index); });
    next_button?.addEventListener('click', () => { current_index++; setIndex(current_index); });

    //pagination

    let pagination_el = addElementWithClasses('flight-pagination', flight_el);

    flight_slides.forEach((Element, index) => {
        let pagination_dot = addElementWithClasses('flight-pagination-dot', pagination_el);
        pagination_dot.addEventListener('click', () => {
            setIndex(index);
        })
    })

    let pagination_dots = pagination_el.querySelectorAll('.flight-pagination-dot');

    function setIndex(index){

        //clamping the indexes
        index = clamp(index, 0, flight_slides.length - 1);
        current_index = index;

        //setting classes for the slides
        flight_slides.forEach(Element =>{
            if(Element.classList.contains('flight-slide-active')){
                Element.classList.remove('flight-slide-active');
            }
        })
        flight_slides[index].classList.add('flight-slide-active');

        //setting classes for the dots
        pagination_dots.forEach(Element =>{
            if(Element.classList.contains('flight-pagination-dot-active')){
                Element.classList.remove('flight-pagination-dot-active');
            }
        })
        pagination_dots[index].classList.add('flight-pagination-dot-active');

        //setting the track position
        flight_track.style.transform = `translateX(-${flight_track.offsetWidth * index}px`;
        return current_index;
    }

    setIndex(current_index); // initialize the first slide
}

//utils

function addElementWithClasses(classes, target){
    let el = document.createElement('div');
    el.classList.add(classes);
    target.appendChild(el);
    return el;
}

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

//todo

//only add transition on button click
//add settings for transition time
//add gap setting
//add slides per page setting
//generate buttons with js
