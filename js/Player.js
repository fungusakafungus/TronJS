function Player() {
   
}

Player.prototype = {
    events: [],
    updated: new Date().getTime(),
    speed: {
        x: 0,
        y: 0.2
    },
    position: {
        x: 10,
        y: 10
    },
    
  
    bindKeys: function() {
        var self = this;
        $(document).bind('keydown', 'left right', function(event) {
            self.addEvent(event)
        });
    },
  
    addEvent: function(event) {
        console.log(this);
        this.events.push(event);
    },
  
    updatePosition: function() {
        var now = new Date().getTime(),
        timediff = now - this.updated;
        
        while(this.events.length > 0){
            var event = this.events.pop();
            this.setDirection(event.keyCode);
        }
            
        this.position.x += this.speed.x * timediff;
        this.position.y += this.speed.y * timediff;
        
        this.updated = now;
    },
    
    setDirection: function(direction) {
        var new_x, new_y;
        switch (direction) {
            case 37:
                new_x = this.speed.y;
                new_y = - this.speed.x;
                break;
            case 39:
                new_x  = - this.speed.y;
                new_y = this.speed.x;
                break
        };
        this.speed.x = new_x;
        this.speed.y = new_y;
    }
 
};