var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%= username %></div>
        <div><%= createdAt %></div>
        <div>Last Updated: <%= updatedAt %></div>
        <div><%= text %></div>
      </div>
    `)
  
};