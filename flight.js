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

        //clamping the index
        index = clamp(index, 0, flight_slides.length - 1);

        //setting classes for the slides
        setStateClasses(flight_slides, index, 'flight-slide-active', 'flight-slide-ready', 300);
        setStateClasses(pagination_dots, index, 'flight-pagination-dot-active', 'flight-pagination-dot-ready', 300);

        checkAndSetButtons(index);

        //setting the track position
        flight_track.setAttribute('style', `transform: translateX(-${flight_track.offsetWidth * index}px); transition: 300ms;`);
        setTimeout( () => { if (current_index == index) {flight_track.setAttribute('style', `transform: translateX(-${flight_track.offsetWidth * index}px);`);} }, 300)
        return current_index = index;
    }

    function setStateClasses(elements, index, activeStateClass, readyStateClass, transition){
        elements.forEach(Element =>{
            if (Element.classList.contains(activeStateClass)) {Element.classList.remove(activeStateClass, readyStateClass)};
        })
        elements[index].classList.add(activeStateClass);
        setTimeout( () => { if (current_index == index) {elements[index].classList.add(readyStateClass)} }, transition);
    }

    function checkAndSetButtons(index){
        (index == 0 ? prev_button.disabled = true :  prev_button.disabled = false);
        (index == flight_slides.length - 1 ? next_button.disabled = true :  next_button.disabled = false);
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
