var FriendController = {
  addFriend: function (event) {
    event.preventDefault();
    var userName = event.currentTarget.innerText;
    if (!!userName) {
      Friends.friends.add(userName.trim());
    } 
  }
};