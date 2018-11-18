var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },
  
  highlightFriends: function () {
    $('.username').each(function () {
      let username = this.innerText;
      if (!!username && Friends.friends.has(username.trim())) {
        $(this).addClass('friend');
      }
    });
  },

  unhighlightFriends: function () {
    $('.username').each(function () {
      let username = this.innerText;
      if (!!username && Friends.friends.has(username.trim())) {
        $(this).removeClass('friend');
      }
    });
  },

  renderMessage: function(message) {
    var escapedHtml = MessageView.render({
      username: _.escape(message.username),
      text: _.escape(message.text),
      createdAt: _.escape(message.createdAt),
      updatedAt: _.escape(message.updatedAt)
    });

    $(escapedHtml).appendTo(MessagesView.$chats)
      .find('.username')
      .on('click', Friends.toggleStatus);
  },

  render: function() {
    // Iterate thru our results array
    // For each message object
    //   Create a new messageView
    // var templateView = MessageView.render;
    MessagesView.clearMessages();
    console.log('inside MessagesView.render');
    var messages;
    if (Rooms.selectedRoom === 'All rooms') {
      messages = Messages.results;
    } else {
      messages = Messages.results
        .filter((message) => {
          return !!message.roomname; 
        })
        .filter((message) => {
          return message.roomname.trim() === Rooms.selectedRoom.trim();
        });
    }
    messages.forEach(MessagesView.renderMessage);
  },
  
  clearMessages: function() {
    $('.chat').remove();
  }

};