var wins = 0;
var loses = 0;
var currentScore = 0;
var targetNum = "";
var images = ["images/blueCrystal.png", "images/multiCrystal.jpg", 
"images/orangeCrystal.png", "images/redCrystal.jpg"];

    function randomTargetNum () {
        targetNum = Math.floor(Math.random() * 90);
    }
     
    function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
            crystal = $("<img>");
            crystal.attr("data-crys", Math.floor(Math.random() * 12));
            crystal.attr("src", images[i]);
            crystal.attr("height", "125px");
            crystal.attr("padding", "10px");
            crystal.attr("id", [i]);
            crystal.addClass("crystal");
            $(".crystal-images").append(crystal);
            $('#hidden').text(crystal.attr("data-crys"))               
        }
    }

    function resetStats() { 
        randomTargetNum ()
        $(".targetNum").text(`Target Number:${targetNum}`)
        currentScore = 0
        $(".yourScore").text(`Your Score: ${currentScore}`)
        $(".wins").text(`Wins: ${wins}`)
        $(".loses").text(`Loses: ${loses}`)
    }
    resetCrystals();
    resetStats();

        // $(crystal).on('click', function () {
        // currentScore += parseInt($(crystal).attr('data-crys'));
        // })
       
        // $(".yourScore").text(`Your Score: ${currentScore}`) 
    //     if (currentScore === targetNum) {
    //     wins++;
    //         resetStats();
    //     }
    //     else if(currentScore > targetNum) {
    //         loses++;
    //         resetStats();
    //     }
    // }


        




    