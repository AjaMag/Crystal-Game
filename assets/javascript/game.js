var wins = 0;
var loses = 0;
var currentScore = 0;
var targetNum = "";
var images = ["images/blueCrystal.png", "images/multiCrystal.jpg", 
"images/orangeCrystal.png", "images/redCrystal.jpg"];
var val = "";

    function randomTargetNum () {
        targetNum = Math.floor(Math.random() * 80) + 1;
    }
     
    function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
			var crystal = $("<img>");
            crystal.addClass("crystal");
            crystal.attr("val", (Math.floor(Math.random() * 20) + 1));
			crystal.attr("src", images[i]);
            crystal.attr("height", "125px");
            crystal.attr("padding", "10px");
            $(".crystal-images").append(crystal);    
            
        }
    }
    
    function resetStats() {
        randomTargetNum();
        $(".targetNum").text(`Target Number:${targetNum}`);
        currentScore = 0
        $(".yourScore").text(`Your Score: ${currentScore}`);
        $(".wins").text(`Wins: ${wins}`);
        $(".loses").text(`Loses: ${loses}`);
    }
 
    resetStats();

    // function resetPlay(){
    // $(".crystal-images").empty()     
    //resetCrystals();
  
    // }

    function clickCrystal() {
        $(document).on("click", )
        currentScore += $('.crystal').attr("val");
        $(".yourScore").html(currentScore);  
    }


// $(document).on("click", clickCrystal());


    