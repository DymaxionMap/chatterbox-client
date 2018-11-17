var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },
  
  renderMessage: function(message) {
    var escapedHtml = MessageView.render({
      username: _.escape(message.username),
      text: _.escape(message.text),
      createdAt: _.escape(message.createdAt),
      updatedAt: _.escape(message.updatedAt)
    });
    MessagesView.$chats.append(escapedHtml);
  },

  render: function() {
    // Iterate thru our results array
    // For each message object
    //   Create a new messageView
    // var templateView = MessageView.render;
    console.log(Messages.results);
    Messages.results.forEach(MessagesView.renderMessage);
  }

};