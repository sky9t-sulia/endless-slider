import EndlessSliderLoop from "./endless-loop";

class EndlessSlider {
    slider;
    container;
    speed;
    clones = 1;
    data = [];
    resize = {
        timeout: false,
        delay: 250,
    };

    constructor(slider, speed) {
        this.slider = slider;
        this.speed = speed;
        this.container = slider.querySelector(".slider-container");
        this.loop = new EndlessSliderLoop(120, () => {
            this.onFrame();
        });

        this.buildSlider();
        this.init();

        window.addEventListener("resize", (e) => {
            clearTimeout(this.resize.timeout);
            this.resize.timeout = setTimeout(() => {
                this.onResize();
            }, this.resize.delay);
        });
        this.loop.start();
    }

    buildSlider() {
        const raw = Array.from(
            this.container.querySelectorAll(".endless-slide")
        );
        this.makeClones(raw);
        this.makeSlides(raw);
        this.makeClones(raw);
    }

    makeClones(raw) {
        raw.map((slide) => {
            const node = slide.cloneNode(true);
            node.classList.add("endless-clone");
            this.data.push({
                x: 0,
                width: slide.offsetWidth,
                node: node,
            });
        });
    }

    makeSlides(raw) {
        raw.map((slide) => {
            this.data.push({
                x: 0,
                width: slide.offsetWidth,
                node: slide,
            });
        });
    }

    init() {
        this.container.innerHTML = "";
        this.data.forEach((slide, i) => {
            if (i > 0) {
                const prev = this.data[i - 1];
                slide.x = prev.x + prev.node.offsetWidth;
            }
            slide.node.style.cssText =
                "transform: translateX(" + slide.x + "px)";
            this.container.appendChild(slide.node);
        });
    }

    updateContainer(x, duration) {
        this.container.style.cssText = "transform: translateX(" + x + "px)";

        if (duration) {
            this.container.style.cssText +=
                "transition-duration: " + duration + "ms";

            this.animating = true;
        }
    }

    onResize() {
        console.log("resize");
        this.data.forEach((slide, i) => {
            slide.width = slide.node.offsetWidth;

            if (i > 0) {
                const prev = this.data[i - 1];
                slide.x = prev.x + prev.width;
            }
            slide.node.style.cssText =
                "transform: translateX(" + slide.x + "px)";
        });
    }

    onFrame() {
        const pos = this.container.getBoundingClientRect();
        const current = this.data[0];

        if (Math.abs(pos.left) > current.x + current.width) {
            const slide = this.data.shift();
            const last = this.data[this.data.length - 1];

            slide.x = last.x + last.width;
            slide.node.style.cssText =
                "transform: translateX(" + slide.x + "px)";
            this.data.push(slide);
        }

        this.updateContainer(pos.left - this.speed / 120, 25);
    }
}

export default EndlessSlider;
