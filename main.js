
var keys = [];

var soundC = "sound/piano_middle_C.mp3";


$(function() {
    
    console.log('ready');
    
    $('#img1').hover(function() {
    //console.log("hover over img1");
    
    $(this).attr('#CNOTE').css('opacity',1);
    //change source to ''

    //change opacity to 1

  }
    
    
    
    function loadSound() {
            createjs.Sound.registerSound(soundC, "playSoundC");
        }

        function playSound() {
            createjs.Sound.play(soundC);
        }
    
}
    
    
    
})