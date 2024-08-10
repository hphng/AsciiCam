
const density = "MW@#W$9876543210?!abc;:+=-,._'";

let cat;
let video;
let asciiDiv;

// function preload(){
//     cat = loadImage("cat.jpg");
// }


function setup() {
    noCanvas();
    video = createCapture(VIDEO);
    video.size(100, 100);
    asciiDiv = createDiv();

}

function draw() {

    //image(cat, 0, 0, 100, 100);

    // cat.width/=10;
    // cat.height/=10;

    video.loadPixels();

    let asciiImage = '';
    for(let i = 0; i < video.width; i++)
    {
        for(let j = 0; j < video.height; j++)
        {
            const pixelsIndex = (j + i * video.width) * 4;
            const r = video.pixels[pixelsIndex + 0];
            const g = video.pixels[pixelsIndex + 1];
            const b = video.pixels[pixelsIndex + 2];

            const avg = (r+g+b)/3;

            const len = density.length;
            const charIndex = floor(map(avg, 0, 255, len , 0));

            const c = density.charAt(charIndex);

            if(c == ' ')
                asciiImage += '&nbsp';
            else
                asciiImage += c;
        }
        asciiImage += '<br/>';
    }
    asciiDiv.html(asciiImage);

}
