const colorPicker = document.querySelector("#colorPick");
const container = document.querySelector(".container");
const slider = document.querySelector("#slider");
const clean = document.querySelector("#clean");
const rainbow = document.querySelector("#rainbow");
const eraser = document.querySelector("#eraser");
const b1 = document.querySelector("#one");
const b2 = document.querySelector("#two");
const b4 = document.querySelector("#four");
const b8 = document.querySelector("#eight");
const b16 = document.querySelector("#sixteen");
const b32 = document.querySelector("#thirdytwo");
const b64 = document.querySelector("#sixtytwo");

var mouseDown = 0;
var rainbowOn = 0;

container.addEventListener("mousedown", () => {mouseDown = 1;});
container.addEventListener("mouseup", () => {mouseDown = 0;});

function draw(value){
	for (var y = 0; y < value; y++){
		var line = document.createElement('div');
		line.style.display = "flex";
		line.style.flex = "1";
		for(var i = 0; i < value; i++){
			var div = document.createElement('div');
			div.style.flex = "1";
			div.style.padding = "1px";
			div.style.border = "black 1px solid";
			div.addEventListener("mouseenter", function() {
				if(mouseDown == 1 && rainbowOn == 0) {
					this.style.backgroundColor = colorPicker.value;
				}
				else if (mouseDown == 1 && rainbowOn == 1) {
					this.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
				}
			});
			div.addEventListener("mousedown", function() { 
				if(rainbowOn == 0) {
					this.style.backgroundColor=colorPicker.value;
				} 
				else {
					this.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
				}});
			line.appendChild(div);
		}
		container.appendChild(line);
	}

}

draw(16);

function redraw(value) {
	while(container.hasChildNodes()){
		container.removeChild(container.firstChild);
	}

        draw(value);
}

b1.addEventListener("click", () => { redraw(1) });
b2.addEventListener("click", () => { redraw(2) });
b4.addEventListener("click", () => { redraw(4) });
b8.addEventListener("click", () => { redraw(8) });
b16.addEventListener("click", () => { redraw(16) });
b32.addEventListener("click", () => { redraw(32) });
b64.addEventListener("click", () => { redraw(64) });

colorPicker.addEventListener("click", () => { rainbowOn = 0;});
eraser.addEventListener("click", () => { rainbowOn = 0; colorPicker.value = "#ffffff";});
clean.addEventListener("click", () => { redraw(squares);});
rainbow.addEventListener("click", () => { if (rainbowOn == 0) {rainbowOn = 1;} else {rainbowOn = 0;} });


