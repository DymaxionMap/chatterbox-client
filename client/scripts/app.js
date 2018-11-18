var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10).replace(/%20/g, " ");

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(function () {
      App.stopSpinner();
      // MessagesView.render();
      // Rooms.rooms = RoomController.findRooms(Messages.results);
      // RoomsView.render();
    });
    
    setInterval(App.fetch, 3000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages = data;
      console.log('Response: ', Messages);
      
      MessagesView.render();
      Rooms.rooms = RoomController.findRooms(Messages.results);
      RoomsView.render();
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
