import EndlessSliderLoop from "./endless-loop";

class EndlessSlider {
    loop;
    slider;
    container;
    clones;
    speed;
    offset;
    data = [];

    constructor(slider, props = { clones: 2, speed: 100, offset: 0 }) {
        this.slider = slider;
        this.clones = props.clones;
        this.speed = props.speed;
        this.offset = props.offset;
        this.onReady = props.onReady;
        this.container = slider.querySelector(".slider-container");
        this.loop = new EndlessSliderLoop(120, () => {
            this.onFrame();
        });

        this.build();
        this.onResize();
    }

    buildClones() {
        let raw = Array.from(this.container.querySelectorAll(".endless-slide"));
        for (let i = 0; i <= this.clones; i++) {
            raw.map((r) => {
                let node = r;
                if (i > 0) {
                    node = r.cloneNode(true);
                    this.container.appendChild(node);
                }

                this.data.push({
                    x: this.offset,
                    el: node,
                    width: r.offsetWidth,
                });
            });
        }
    }

    build() {
        this.buildClones();

        // Setup slider
        this.data.forEach((slide, i) => {
            if (i > 0) {
                const prev = this.data[i - 1];
                slide.x = prev.x + prev.width;
                this.updateSlide(slide);
            }

            // dirty starting animation fix
            setTimeout(() => {
                slide.el.classList.add("slide-initialized");
            }, 1);
        });

        this.loop.start();
    }

    updateSlide(slide) {
        slide.el.style.cssText =
            "transform: translate3d(" + slide.x + "px, 0, 0);";
    }

    onResize() {
        // when resize need to recalculate the width of slides 
        window.addEventListener("resize", (e) => {
            this.data.forEach((slide, i) => {
                slide.width = slide.el.offsetWidth;

                if (i > 0) {
                    const prev = this.data[i - 1];
                    slide.x = prev.x + prev.width;
                }
            });
        });
    }

    onFrame() {
        this.data.map((slide) => {
            slide.x -= this.speed / 120;

            this.updateSlide(slide);

            if (slide.x < 0) {
                if (Math.abs(slide.x) > slide.width) {
                    const last = this.data[this.data.length - 1];
                    slide.x = last.x + last.width;
                    this.data.shift();
                    this.data.push(slide);
                }
            }
        });
    }
}

export default EndlessSlider;
