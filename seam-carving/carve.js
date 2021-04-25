const title = 'big-sur'

let canvas = document.getElementById('background');
let ctx = canvas.getContext('2d');
let img = new Image();

img.onload = function() {
    let pixels = getPixels(img);

    fetch(`samples/${title}-data-2x.json`).then(res => res.json()).then(data => {
        ctx.putImageData(resize(canvas, pixels, data), 0, 0);

        window.onresize = function() {
            ctx.putImageData(resize(canvas, pixels, data), 0, 0);
        }
    });
};

img.src = `samples/${title}-2x.jpg`;

// Create an offscreen canvas to get pixel data for the image
function getPixels(img) {
    let offscreen = document.createElement('canvas');
    offscreen.width = img.width;
    offscreen.height = img.height;

    let ctx = offscreen.getContext('2d');
    ctx.drawImage(img, 0, 0);
    return ctx.getImageData(0, 0, img.width, img.height);
}

function resize(canvas, pixels, data) {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let resizedHeight = Math.min(pixels.height, canvas.height);
    let resizedWidth = Math.min(pixels.width, canvas.width);
    let arr = new Uint8ClampedArray(resizedHeight * resizedWidth * 4);

    let count = 0;
    for (let i = 0; i < pixels.height; i++) {
        for (let j = 0; j < pixels.width; j++) {
            if (data[i][j] < resizedWidth) {
                let idx = (i * pixels.width + j) * 4
                for (let k = 0; k < 4; k++) {
                    arr[count] = pixels.data[idx + k];
                    count++;
                }
            }
        }
    }

    return new ImageData(arr, resizedWidth, resizedHeight);
}

