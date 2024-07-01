// Object Oriented Programming encapsulates data with functionality
const friendsManager = {
  friends: [],
  addFriend(newFriend) {
    this.friends.push(newFriend);
    // `this` refers to the "owner" of the method. 
  }
}

friendsManager.addFriend('Andy');
friendsManager.addFriend('Cindy');
friendsManager.addFriend('Patrick');
// Here, friendsManager is the owner of addFriend. 
// this.friends === friendsManager.friends

console.log(friendsManager.friends)



// What about this is NOT consistent or predictable?
friendsManager.addFriend('Lauren');
friendsManager.addFriend(true);
friendsManager.friends.push('Emmaneul');
friendsManager.friends.push(42);
// console.log(friendsManager.friends)


// A factory function
const makeFriendsManager = () => {

}
const myFriendsManager = makeFriendsManager();