const slider = tns({
    container: '.my-slider',
    loop: true,
    items: 1,
    gutter: 32,
    slideBy: 'page',
    nav: false,
    autoplay: false,
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    controlsContainer: ".controls",
    responsive: {
        768: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }

  });