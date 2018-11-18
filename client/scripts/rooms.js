var Rooms = {
  rooms: [],
  
  selectedRoom: 'All rooms',
  
  add: function(event) {
    RoomController.addRoom(event);
  }
};
