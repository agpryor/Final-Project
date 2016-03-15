

var keys = [];

var soundC = "sound/piano_middle_C.mp3";

keyCode();

$(function(){
    
    console.log('ready');
    
    $('#img1').hover(function() {
      //console.log('click');
        
        $('p#CNOTE').animate(
       {
           opacity: 1
       }
       ) 
    });
    
    
    function loadSound() {
            createjs.Sound.registerSound(soundC, "playSoundC");
        }

        function playSound() {
            createjs.Sound.play(soundC);
        }
    
    
    
    
    
    
})