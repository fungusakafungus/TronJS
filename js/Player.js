function Player() {
    
}

Player.prototype = {
  events: [],
  
  bindKeys: function() {
      var self = this;
    $(document).bind('keydown', 'down up left right', self.addEvent);
  },
  
  addEvent: function(event) {
    this.events.push(event);
  }
 
};