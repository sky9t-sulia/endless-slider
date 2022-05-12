class EndlessSliderLoop {
    running = false;
    frameTime = 0;
    now = 0;
    then = 0;
    onFrame;

    constructor(fps, onFrame = () => {}) {
        this.then = Date.now();
        this.frameTime = 1000 / fps;
        this.onFrame = onFrame;
    }

    start() {
        this.running = true;
        this.loop();
    }

    stop() {
        this.running = false;
    }

    loop() {
        if (!this.running) {
            return;
        }

        window.requestAnimationFrame(() => {
            this.loop();
        });

        this.now = Date.now();

        if (this.now > this.then + this.frameTime) {
            this.onFrame();

            this.then = this.now;
            this.now = Date.now();
        }
    }
}

export default EndlessSliderLoop;
