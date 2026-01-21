// AOS Initialize
AOS.init({ duration: 1000, once: true });

// Countdown Timer Logic (5 Hours)
function startCountdown(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) { timer = duration; }
    }, 1000);
}

window.onload = function () {
    let timeLimit = 60 * 60 * 5; // 5 hours
    let display = document.querySelector('#timer');
    startCountdown(timeLimit, display);
};

// Cart Logic
const cartBtn = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');
let count = 0;

cartBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.innerHTML = count;
        alert("Success! Item added to your shopping bag.");
    });
});



// 

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});