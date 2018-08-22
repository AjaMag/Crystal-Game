var wins = 0;
var loses = 0;
var currentScore = 0;
var targetNum = "";
var images = ["images/blueCrystal.png", "images/multiCrystal.jpg", 
"images/orangeCrystal.png", "images/redCrystal.jpg"];
var value = ""
var crystal = {};

    function randomTargetNum () {
        targetNum = Math.floor(Math.random() * 80) + 1;
    }
     
    function randCrysVal() {
        for (var i = 0; i < images.length; i++) {
            value = crystal.attr("value", Math.floor(Math.random() * 15) + 1);
        }
    }

    function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
            var crystal = $("<img>");
            
            crystal.attr("src", images[i]);
            crystal.attr("height", "125px");
            crystal.attr("padding", "10px");

            $(".crystal-images").append(crystal);               
        }
    }
    // <img id="1" class="crystal" data-crystal=${Math.floor(Math.random() * 20) + 1}
    //     src="">  
    function resetStats() {
        randomTargetNum();
        console
        randCrysVal () 
        $(".targetNum").text(`Target Number:${targetNum}`)
        currentScore = 0
        $(".yourScore").text(`Your Score: ${currentScore}`)
        $(".wins").text(`Wins: ${wins}`)
        $(".loses").text(`Loses: ${loses}`)
    }
    resetCrystals();
    resetStats();

    console.log(`${data}`) 

    // function resetPlay(){
    // $(".crystal-images").empty()     
  
    // }

    // $('.crystal').on("click", function () {
    //     let crystalValue = $(this).attr('data-crystal')
    //     total += parseInt(crystalValue)
    //     $('.total').text(total)
    //     setTimeout(function () {
    //         gameStatus()

        function clickCrystal() { 
            
        //     currentScore += parseInt($(this).attr("value"));
        //     $(".yourScore").text(currentScore)  
         }

        




    