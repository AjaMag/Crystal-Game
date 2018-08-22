var wins = 0;
var loses = 0;
var currentScore = 0;
var targetNum = "";
var images = ["images/blueCrystal.png", "images/multiCrystal.jpg", 
"images/orangeCrystal.png", "images/redCrystal.jpg"];
var value = ""
var crystal = {};

    function randomTargetNum () {
        targetNum = Math.floor(Math.random() * 80);
    }
     
    function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
            var crystal = $("<img>");
            crystal.attr("data-crys", Math.floor(Math.random() * 15));
            crystal.attr("src", images[i]);
            crystal.attr("height", "125px");
            crystal.attr("padding", "10px");
            $(".crystal-images").append(crystal);               
        }
    }
 
    function resetStats() {
        randomTargetNum();
        $(".targetNum").text(`Target Number:${targetNum}`)
        currentScore = 0
        $(".yourScore").text(`Your Score: ${currentScore}`)
        $(".wins").text(`Wins: ${wins}`)
        $(".loses").text(`Loses: ${loses}`)
    }
    resetCrystals();
    resetStats();

     

    function clickCrystal() { 
        let x = currentScore += parseInt($(crystal).attr("data-crys"));  
        console.log(x) 
        // 
        // $(".yourScore").text(currentScore)  
        //     if (currentScore === targetNum) {
        //         wins++;
        //         resetStats();
        //     }
        //     else if(currentScore > targetNum) {
        //         loses++;
        //         resetStats();
        //     }
     }
     clickCrystal()

        




    