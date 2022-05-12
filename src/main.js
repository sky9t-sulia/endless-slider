import EndlessSlider from "./endless-slider";

const slider = document.getElementById("endless-slider");

const endlessSlider = new EndlessSlider(slider, {
    clones: 1, // clones of all slides
    speed: 100, // px per second
    offset: window.innerWidth / 2, // starting point
});
