// // Object Oriented Programming encapsulates data with functionality
// const friendsManager = {
//   friends: [],
//   addFriend(newFriend) {// method
//     this.friends.push(newFriend);
//     // `this` refers to the "owner" of the method. 
//   }
// }

// friendsManager.addFriend('Andy');//string 
// friendsManager.addFriend('Cindy');//string
// friendsManager.addFriend('Patrick');//string
// friendsManager.addFriend('Laurenz');//string
// friendsManager.addFriend(true);//boolean  // this is not good
// friendsManager.friends.push('emmaneul');//string
// friendsManager.friends.push(42);//number  // this is not good
//friendsManager.friends = [];//array

// console.log(friendsManager.friends);


// const privateNumbers = (num) => {// outer function
//   let number = 0;// outside the inner function
//   const add = () => {
//     return number += num;//variable from the outer function in number and the parameter in num
//   }
//   return add();
// }

// number = privateNumbers(7);
// newNumber = privateNumbers(number);
// console.log(newNumber)



const makeFriendsManager = () => {// outer function
  // this variable is in the "outer" function
  // and referenced in addFriend and getFriends
  const friends = []; // this is private

  const friendsManager = {// inner function
    addFriend(newFriend) {
      if (typeof newFriend !== 'string') {
        console.log('Friend must be a string');
        return;
      }
      friends.push(newFriend);
    },
    getFriends() {
      return [...friends]; 
    },
  }
  return friendsManager;
}

const gonzoFriendsManager = makeFriendsManager();// A closure

console.log(gonzoFriendsManager.getFriends());// empty array
gonzoFriendsManager.addFriend('Andy');// run the addFriend method
console.log(gonzoFriendsManager.getFriends()); // ['Andy']
gonzoFriendsManager.addFriend(77);// 
console.log(gonzoFriendsManager.getFriends());// ['Andy']

const alexFriendsManager = makeFriendsManager();
alexFriendsManager.addFriend('Cindy');
console.log(alexFriendsManager.getFriends());// ['Cindy']
alexFriendsManager.addFriend('Patrick');
console.log(alexFriendsManager.getFriends());// ['Cindy', 'Patrick']

























