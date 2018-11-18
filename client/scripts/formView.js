var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log('event: ', event);
    // var text = $('#DynamicValueAssignedHere').find('input[name="FirstName"]').val();
    var text = FormView.$form.find('input[type=text]').val();
    
    var message = {
      username: App.username,
      text: text,
      roomname: (Rooms.selectedRoom === 'All rooms') ? undefined : Rooms.selectedRoom
    };
    
    console.log('message: ', message);
    
    var createSuccess = function () {
      console.log('Successfully created message: ', message);
      App.fetch();
    };
    
    var createError = function () {
      console.error('Failed to create message');
    };
    
    Parse.create(message, createSuccess, createError);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

