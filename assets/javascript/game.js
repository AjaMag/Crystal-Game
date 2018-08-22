let wins = 0;
let loses = 0;
let currentScore = 0;
let targetNum = "";
var images = ["images/blueCrystal.png", "images/multiCrystal.jpg", 
"images/orangeCrystal.png", "images/redCrystal.jpg"];
let val = "";

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
            let val = crystal.attr("value", (Math.floor(Math.random() * 20) + 1));
            console.log(val);
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

    function clickCrystal() {
        console.log("click");
        currentScore +=parseInt($(this).attr("value"));
        $(".yourScore").text(currentScore);
    }
    // clickCrystal();
   

    // $(document).on("click", ".crystal", clickCrystal);


    