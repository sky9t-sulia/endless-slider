import EndlessSlider from "./endless-slider";

const speed = 500;
const slider = document.getElementById("endless-slider");
const es = new EndlessSlider(slider, speed);


slider.addEventListener('mouseenter', (e) => {
    console.log("enter");
    stopSlider();
});

slider.addEventListener('mouseleave', (e) => {
    console.log("leave");
    resumeSlider();
});


function stopSlider() {
    const interval = setInterval(() => {
        es.speed -= 5;

        if (es.speed <= 0) {
            es.speed = 0;
            clearInterval(interval);
        }
    }, 16);
}

function resumeSlider() {
    const interval = setInterval(() => {
        es.speed += 5;

        if (es.speed >= speed) {
            es.speed = speed;
            clearInterval(interval);
        }
    }, 16);
}