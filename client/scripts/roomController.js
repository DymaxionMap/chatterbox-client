var RoomController = {
  findRooms: function(messages) {
    var results = {};
    
    for (let message of messages) {
      let roomname = message.roomname;
      if (!results[roomname] && roomname !== undefined) {
        results[roomname] = roomname;
      }
    }
    return Object.keys(results); 
  },
  
  selectRoom: function (event) {
    event.preventDefault();
    Rooms.selectedRoom = $('#rooms select option:selected').text().trim();
    console.log('room selection: ', Rooms.selectedRoom);
    MessagesView.clearMessages();
    MessagesView.render();
  },
  
  addRoom: function(event) {
    event.preventDefault();
    var promptMessage = 'Please enter your new room name';
    var newRoomName = prompt(promptMessage);
    console.log('newRoomName: ', newRoomName);
    
    if (!!newRoomName ) {
      newRoomName = newRoomName.trim();
      Rooms.rooms.push(_.escape(newRoomName));  
      RoomsView.renderRoom(newRoomName);
    }
  }
};