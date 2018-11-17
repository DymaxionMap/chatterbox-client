var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    // Iterate thru our results array
    // For each message object
    //   Create a new messageView
    var templateView = MessageView.render;
    Messages.results.forEach((function (message) {
      var escapedHtml = templateView({
        username: _.escape(message.username),
        text: _.escape(message.text),
        createdAt: _.escape(message.createdAt),
        updatedAt: _.escape(message.updatedAt)
      });
      this.$chats.append(escapedHtml);
    }).bind(this));
  }

};