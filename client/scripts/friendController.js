var FriendController = {
  toggleStatus: function (event) {
    event.preventDefault();
    var userName = event.currentTarget.innerText;
    // console.log(userName);
    if (!!userName) {
      console.log(userName);
      userName = userName.trim();
      if (Friends.friends.has(userName)) {
        MessagesView.unhighlightFriends();
        Friends.friends.delete(userName);
      } else {
        Friends.friends.add(userName);
        MessagesView.highlightFriends();
      }
    } 
  }
};