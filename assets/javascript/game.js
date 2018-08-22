var wins = 0;
var loses = 0;
var currentScore = 0;
var targetNum = "";
var images = ["images/blueCrystal.png", "images/multiCrystal.jpg", 
"images/orangeCrystal.png", "images/redCrystal.jpg"];
var val = "";

$(document).ready(function() {

    function randomTargetNum () {
        targetNum = Math.floor(Math.random() * 80) + 1;
        $(".targetNum").text(`Target Number:${targetNum}`);
        $(".yourScore").text(`Your Score: ${currentScore}`);
        $(".wins").text(`Wins: ${wins}`);
        $(".loses").text(`Loses: ${loses}`);
    }
    randomTargetNum();
    
    function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
			var crystal = $("<img>");
            crystal.addClass("crystal");
            crystal.attr("val", (Math.floor(Math.random() * 20) + 1));
            let val = crystal.attr("val");
            val.toString();
            console.log(val);
            crystal.attr("onClick", "clickCrystal()")
			crystal.attr("src", images[i]);
            crystal.attr("height", "125px");
            crystal.attr("padding", "10px");
            $(".crystal-images").append(crystal);    
            
        }
    }
    resetCrystals();
});
    // function resetStats() {
//  $(".crystal-images").empty();
    // };
    // function resetStats()

    function clickCrystal(_event) {
        currentScore += $('.crystal').attr(val);
        $(".yourScore").text(currentScore);  
    }

// $(document).on("click", clickCrystal);


    