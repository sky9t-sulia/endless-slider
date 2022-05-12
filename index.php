<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
        html, body {
            margin: 0;
        }

        canvas {
            background: black;
        }

        .slider-container {
            display: flex;
            align-items: center;
            min-height: 100px;
            font-size: calc(35 * ((100vw - 375px) / 648) + 65px);
            font-family: sans-serif;
            position: relative;
        }

        .endless-slide {
            white-space: nowrap;
            padding: 0 50px;
            display: flex;
            text-align: center;
            align-items: center;
            position: absolute;
            opacity: 0;
            transition: opacity 2s;
        }

        .endless-slide.slide-initialized {
            opacity: 1;
            transition: transform .25s opacity 2s;
        }
    </style>
    <!-- <canvas id="canv"></canvas> -->

    <div id="endless-slider">
        <div class="slider-container">
            <div class="endless-slide">contact us</div>
            <div class="endless-slide">thank you</div>
        </div>
    </div>
    <script type="module" src="build/js/app.bundle.js" defer></script>
</body>
</html>