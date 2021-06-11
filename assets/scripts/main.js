const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

handleSlide('.mySlides', '.dot-item');
handleSlide('.biet-thu-slide', '.dot-none', 3, '.arrow-left', '.arrow-right');

function handleSlide(mySlides, myDots, numberActive = 1, prev, next) {

    let slideIndex = 0;
    let slides = $$(mySlides);
    let dots = $$(myDots);
    let length = slides.length;

    if (prev && next) {
        $(prev).onclick = function(e) {
            plusSlides(-1);
        }
        $(next).onclick = function(e) {
            plusSlides(+1);
        }
    }
    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    dots.forEach((dot, index) => {
        dot.onclick = function(e) {
            showSlides(index)
        }
    });

    function showSlides(n) {
        if (n >= length) { slideIndex = 0 } else if (n < 0) { slideIndex = length - 1 } else { slideIndex = n }
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (dots[index]) {
                dots[index].classList.remove('active');
            }
        })
        for (let i = 0; i < numberActive; i++) {
            let tempIndex = slideIndex + i;
            if (tempIndex >= length) {
                tempIndex = tempIndex - length;
            }
            slides[tempIndex].classList.add('active');
            if (dots[tempIndex]) {
                dots[tempIndex].classList.add('active');
            }
        }
    }
    setInterval(function() {
        showSlides(slideIndex + 1)
    }, 5000);
}