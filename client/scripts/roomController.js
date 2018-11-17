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
    // $('#myOptions').change(function() {
    //     var val = $("#myOptions option:selected").text();
    //     alert(val);
    // });

    event.preventDefault();
    Rooms.selectedRoom = $('#rooms select option:selected').text();
    console.log('room selection: ', Rooms.selectedRoom);
    MessagesView.render();
  }

};