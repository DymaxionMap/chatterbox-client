var RoomController = {
  findRooms: function(messages) {
    var results = {};
    
    
    for (let message of messages) {
      let roomname = message.roomname;
      if (!results[roomname] && roomname !== undefined) {
        
        results[roomname] = roomname;
      }
    }
    return results; 
  },
  
  
};