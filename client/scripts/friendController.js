var FriendController = {
  toggleStatus: function (event) {
    event.preventDefault();
    var userName = event.currentTarget.innerText;
    if (!!userName) {
      if (Friends.friends.has(userName)) {
        Friends.friends.delete(userName.trim());
      } else {
        Friends.friends.add(userName.trim());
      }
    } 
  }
};