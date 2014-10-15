window.onload = function() {

// variable that will control box width
var xWidth = 0;

// variable that will control box opacity
var opacityValue = 0;
// assign the boxes based on id

var clickedImage = 0;

// cache images
var toy0Image = new Image();
toy0Image.src="images/samples/codeSamples/ap_toy0.png";
var toy1Image = new Image();
toy1Image.src="images/samples/codeSamples/ap_toy1.png";
var toy2Image = new Image();
toy2Image.src="images/samples/codeSamples/ap_toy2.png";
var toy3Image = new Image();
toy3Image.src="images/samples/codeSamples/ap_toy3.png";
var toy4Image = new Image();
toy4Image.src="images/samples/codeSamples/ap_toy4.png";
var toy5Image = new Image();
toy5Image.src="images/samples/codeSamples/ap_toy5.png";
var toy6Image = new Image();
toy6Image.src="images/samples/codeSamples/ap_toy6.png";

// the action control boxes
var frameBox = document.getElementById("frameForCode2");
var showFrame = document.getElementById("showFrame");
var playButton = document.getElementById("playButton");
var closeShowFrame = document.getElementById("xCloser");

var toy0Box = document.getElementById("toy0");
var toy1Box = document.getElementById("toy1");
var toy2Box = document.getElementById("toy2");
var toy3Box = document.getElementById("toy3");
var toy4Box = document.getElementById("toy4");
var toy5Box = document.getElementById("toy5");
var toy6Box = document.getElementById("toy6");

setInitialValues();


/// Functions ///

// set initial values
function setInitialValues() {

//var screenWidth = window.innerWidth; // to check for screen size, media query

frameBox.style.display = "block";
showFrame.style.display = "none";
toy0Box.style.display = "none";
toy1Box.style.display = "none";
toy2Box.style.display = "none";
toy3Box.style.display = "none";
toy4Box.style.display = "none";
toy5Box.style.display = "none";
toy6Box.style.display = "none";
}

function openShowFrame() {
	showFrame.style.display = "block";
	toy1Box.style.display = "block";
}

function hideShowFrame() {
	showFrame.style.display = "none";
}

function hideFrameBox() {
	frameBox.style.display = "none";
}

function showNextToy(newToy) {
	
	switch(newToy) {
case "toy0":
	toy0Box.style.display = "none";
  	toy1Box.style.display = "block";
	toy2Box.style.display = "none";
	toy3Box.style.display = "none";
	toy4Box.style.display = "none";
	toy5Box.style.display = "none";
	toy6Box.style.display = "none";
  break;
  
case "toy1":
  	toy0Box.style.display = "none";
  	toy1Box.style.display = "none";
	toy2Box.style.display = "block";
	toy3Box.style.display = "none";
	toy4Box.style.display = "none";
	toy5Box.style.display = "none";
	toy6Box.style.display = "none";
  break;
  
case "toy2":
  	toy0Box.style.display = "none";
  	toy1Box.style.display = "none";
	toy2Box.style.display = "none";
	toy3Box.style.display = "block";
	toy4Box.style.display = "none";
	toy5Box.style.display = "none";
	toy6Box.style.display = "none";
  break;
  
case "toy3":
  	toy0Box.style.display = "none";
  	toy1Box.style.display = "none";
	toy2Box.style.display = "none";
	toy3Box.style.display = "none";
	toy4Box.style.display = "block";
	toy5Box.style.display = "none";
	toy6Box.style.display = "none";
  break;
  
case "toy4":
  	toy0Box.style.display = "none";
  	toy1Box.style.display = "none";
	toy2Box.style.display = "none";
	toy3Box.style.display = "none";
	toy4Box.style.display = "none";
	toy5Box.style.display = "block";
	toy6Box.style.display = "none";
  break;
  
case "toy5":
	toy0Box.style.display = "none";
  	toy1Box.style.display = "none";
	toy2Box.style.display = "none";
	toy3Box.style.display = "none";
	toy4Box.style.display = "none";
	toy5Box.style.display = "none";
	toy6Box.style.display = "block";
  break;
  
case "toy6":
  	toy0Box.style.display = "block";
	toy1Box.style.display = "none";
	toy2Box.style.display = "none";
	toy3Box.style.display = "none";
	toy4Box.style.display = "none";
	toy5Box.style.display = "none";
	toy6Box.style.display = "none";
  break;  
	}
}

/// CALL FUNCTIONS ///

frameBox.onclick=function(){
	openShowFrame();
	hideFrameBox();
};

toy0Box.onclick=function() {
	showNextToy("toy0");
	clickedImage = 1;
}

toy1Box.onclick=function() {
	showNextToy("toy1");
	clickedImage = 2;
}

toy2Box.onclick=function() {
	showNextToy("toy2");
	clickedImage = 3;
}

toy3Box.onclick=function() {
	showNextToy("toy3");
	clickedImage = 4;
}

toy4Box.onclick=function() {
	showNextToy("toy4");
	clickedImage = 5;
}

toy5Box.onclick=function() {
	showNextToy("toy5");
	clickedImage = 6;
}

toy6Box.onclick=function() {
	showNextToy("toy6");
	clickedImage = 0;
}

closeShowFrame.onclick=function(){
	hideShowFrame();
	setInitialValues();
}


};