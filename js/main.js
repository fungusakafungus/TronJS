// 3 event sources: keyboard events, timer events, websocket events
// on keyboard and websocket: store movements in an array
// on timer event: process movements and update canvas
 $(document).ready(function() {
     player = new Player();
     player.bindKeys();
    var movements = [];
    var $field = $('#field');
    
    function updateField() {
        $player = $('#one');
        
        if($player.position().left <= 0 || $player.position().top <= 0 || 
            $player.position().left >= $field.width() - $player.width() ||
            $player.position().top >= $field.height() - $player.height()
    ) {
            
            player.speed.x = 0;
            player.speed.y = 0; 
        }
        
        player.updatePosition();
        $player.css({
            left: player.position.x,
            top: player.position.y
        });
    }

    setInterval(updateField, 0);

});
