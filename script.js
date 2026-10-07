let slideSekarang = 0;

const slider = document.getElementById("slider");
const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function tampilkanSlide(index) {

    if (index >= slides.length) {
        slideSekarang = 0;
    }

    if (index < 0) {
        slideSekarang = slides.length - 1;
    }

    track.style.transform =
        "translateX(-" + (slideSekarang * 100) + "%)";

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });

    dots[slideSekarang].classList.add("active");
}

function ubahSlide(perubahan) {
    slideSekarang += perubahan;
    tampilkanSlide(slideSekarang);
}

function pilihSlide(index) {
    slideSekarang = index;
    tampilkanSlide(slideSekarang);
}


/* =========================
   SWIPE / DRAG SLIDER
========================= */

let posisiAwal = 0;
let posisiAkhir = 0;


/* Mouse */

slider.addEventListener("mousedown", function(e) {
    posisiAwal = e.clientX;
});

slider.addEventListener("mouseup", function(e) {

    posisiAkhir = e.clientX;

    if (posisiAwal - posisiAkhir > 50) {
        ubahSlide(1);
    }

    if (posisiAkhir - posisiAwal > 50) {
        ubahSlide(-1);
    }
});


/* Touch / HP */

slider.addEventListener("touchstart", function(e) {
    posisiAwal = e.touches[0].clientX;
});

slider.addEventListener("touchend", function(e) {

    posisiAkhir = e.changedTouches[0].clientX;

    if (posisiAwal - posisiAkhir > 50) {
        ubahSlide(1);
    }

    if (posisiAkhir - posisiAwal > 50) {
        ubahSlide(-1);
    }
});


/* Auto Slide */

setInterval(function() {
    ubahSlide(1);
}, 5000);