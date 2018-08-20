let wins = 0;
let loses = 0;
let currentScore = 0;
let targetNum = "";
var images = ["images/blueCrystal.png", "images/multiCrystal.jpg", 
    "images/orangeCrystal.png", "images/redCrystal.jpg"];

    function randomTargetNum () {
        targetNum = Math.floor(Math.random() * 80) + 1;
    };
    randomTargetNum();
    
    function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
			var crystal = $("<img>");
			crystal.addClass("crystal");
			crystal.attr("src", images[i]);
            crystal.attr("value", (Math.floor(Math.random() * 20) + 1));
            crystal.attr("height", "125px");
            crystal.attr("padding", "15px");
			$(".crystal-images").append(crystal);
        }
    }
    resetCrystals();
    