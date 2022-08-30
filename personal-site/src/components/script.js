const scrollOffset = 100;

// Target all scroll elements in the page
const scrollElements = document.querySelectorAll('.js-scroll');

//Fade out elements

scrollElements.forEach((element) => {
    element.style.opacity = 0
})


// element is in view
const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) - offset)
      );
}

//Assign class name to element
const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

//hide elements
const hideScrollElement = () => {
    scrollElements.classList.remove("scrolled");
}

//Handling scroll aniimation
const handleScrollAnimation = () => {
    if (elementInView(scrollElements, scrollOffset)) {
        displayScrollElement();
    } else {
      hideScrollElement();
    }
  }


window.addEventListener('scroll', () => {
    handleScrollAnimation();
})