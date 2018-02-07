var igUpload;

function preload() {
	igUpload = loadImage("jj.jpg")
}

function setup() {
	createCanvas(igUpload.width, igUpload.height);
}

function draw() {
	background(0);
	image(igUpload, 0, 0);
	loadPixels();
	for (var row = 0; row < height; row++) {
		for (var col = 0; col < width; col++) {
			var index = (row * width + col) * 4;
			r = pixels[index];
			g = pixels[index + 1];
			b = pixels[index + 2];
			a = pixels[index + 3];
			if (keyIsPressed) {
				if (key == "r") {
					rainbow(index, col, row, g, a);
				}
				if (key == "1") {
					hotdog(index, g);
				}
				if (key == "2") {
					apple(index, g, a);
				}
				if (key == "3") {
					blueberry(index, g, a);
				}
				if (key == "4") {
					dark(index, g, b, a);
					
				}
				if(key == "5") {
					light(index, g, b, a);
					
				}
				if(key == "6") {
					opp(index, g, b, a);
				}
				if(key == "7"){
					pink(index, g, b, a);
				}
				if(index % 20 == 0){
					yellow(index, a);
				}
			}
		}
	}
	updatePixels();
}

function rainbow(index, col, row, g, a) {
	pixels[index] = col;
	pixels[index + 1] = g;
	pixels[index + 2] = row;
	pixels[index + 3] = a;
}

function hotdog(index, g) {
	pixels[index] = g;
	pixels[index + 1] = g;
	pixels[index + 2] = g;
	pixels[index + 3] = a;
}

function apple(index, g, a){
    pixels[index] = 0;
	pixels[index + 1] = g;
	pixels[index + 2] = 0;
	pixels[index + 3] = a;
}

function blueberry(index, g, a){
    pixels[index] = 0;
	pixels[index + 1] = 0;
	pixels[index + 2] = g;
	pixels[index + 3] = a;	
}
function dark(index, g, b, a){
	pixels[index] = r / 2;
	pixels[index + 1] = g / 2;
	pixels[index + 2] = b / 2;
	pixels[index + 3] = a;
}
function light(index, g, b, a){
	pixels[index] = r*2;
	pixels[index + 1] = g*2
	pixels[index + 2] = b*2
	pixels[index + 3] = a;
}
function opp (index, g, b, a){
	pixels[index] = 255 - r;
	pixels[index + 1] = 255 - g;
	pixels[index + 2] = 255 - b;
	pixels[index + 3] = a;
}
function pink(index, g, b, a){
	pixels[index] = 255 - r;
	pixels[index + 1] = 160 - g;
	pixels[index + 2] = 200 - b;
	pixels[index + 3] = a;
}
function yellow(index, a){
	pixels[index] = 255;
	pixels[index + 1] = 0;
	pixels[index + 2] = 0;
	pixels[index + 3] = a;
}