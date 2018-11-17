var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.on('change', RoomController.selectRoom);
  },
  
  renderRoom: function(room) {
    var escapedHtml = RoomView.render({
      room
    });
    RoomsView.$select.append(escapedHtml);
  },
  
  render: function() {
    for (let room of Rooms.rooms) {
      RoomsView.renderRoom(room);
    }
  }

};
