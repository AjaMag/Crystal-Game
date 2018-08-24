var wins = 0;
var loses = 0;
var currentScore = 0;
var targetNum = "";
var images = ["images/blueCrystal.png", "images/multiCrystal.jpg",
    "images/orangeCrystal.png", "images/redCrystal.jpg"];

function randomTargetNum() {
    targetNum = Math.floor(Math.random() * 90);
}

function resetCrystals() {
    $(".crystal-images").empty()
    for (var i = 0; i < images.length; i++) {
        crystal = $("<img>");
        crystal.attr("data-crys", Math.floor(Math.random() * 12 + 1));
        crystal.attr("src", images[i]);
        crystal.attr("height", "125px");
        crystal.attr("id", [i]);
        crystal.addClass("crystal");
        $(".crystal-images").append(crystal);
        //return crystal
        console.log(crystal)

    }
}

function resetStats() {
    randomTargetNum()
    currentScore = 0
    $(".targetNum").text(`Target Number:${targetNum}`)
    $(".yourScore").text(`Your Score: ${currentScore}`)
    $(".wins").text(`Wins: ${wins}`)
    $(".loses").text(`Loses: ${loses}`)
}
resetCrystals();
resetStats();

$(document).on('click', '.crystal', function () {
    currentScore += parseInt($(this).attr('data-crys'));
    $(".yourScore").text(`Your Score: ${currentScore}`)
    if (currentScore === targetNum) {
        wins++;
        resetStats();
        resetCrystals();
    }
    else if (currentScore > targetNum) {
        loses++;
        resetStats();
        resetCrystals();
    }
})








