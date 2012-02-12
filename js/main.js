// 3 event sources: keyboard events, timer events, websocket events
// on keyboard and websocket: store movements in an array
// on timer event: process movements and update canvas
$(document).ready(function() {
    var movements = [];

    function updateField() {
        $.each(players, function(player) {
            var now = new Date().getTime();
            var timediff = player.updated - now;
            // ???
        });
        while (movements) {
            var movement = movements.pop();
            // ???
        }
    }

    setInterval(updateField, 10);

});
