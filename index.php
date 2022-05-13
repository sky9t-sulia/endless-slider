<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap" rel="stylesheet">
</head>
<body>
    <style>
        html, body {
            margin: 0;
        }

        canvas {
            background: black;
        }

        .contain {
            background-color: #161619;
            padding: 180px 0;
            overflow: hidden;
            position: relative;
            color: white;
        }

        .slider-container {
            display: flex;
            align-items: center;
            min-height: 100px;
            font-size: calc(35 * ((100vw - 375px) / 648) + 65px);
            position: relative;
            font-family: 'Ubuntu';
            font-weight: 700;
            transition-timing-function: linear;
        }

        .endless-slide {
            white-space: nowrap;
            padding: 0 50px;
            display: flex;
            text-align: center;
            align-items: center;
            position: absolute;
            transition: color .5s;
        }

        .endless-slide:hover {
            color: red;
        }
    </style>

    <div class="contain">
        <div id="endless-slider">
            <div class="slider-container">
                <div class="endless-slide">CONTACT US</div>
                <div class="endless-slide">THANK YOU</div>
            </div>
        </div>
    </div>
    <script type="module" src="build/js/app.bundle.js" defer></script>
</body>
</html>