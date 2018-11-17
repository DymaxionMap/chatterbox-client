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
      roomname: Rooms.selectedRoom
    };
    
    console.log('message: ', message);
    
    Parse.create(message);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

