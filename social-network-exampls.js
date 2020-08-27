let users = {

  'p01': {
    id: 'p01',
    name: 'Richard Sanderson',
    age: 22,
    bio: 'World traveller, big 401k',
    friends:['p02', 'p04']
  },

  'p02': {
    id: 'p02',
    name: 'Austin Powers',
    age: 47,
    bio: 'International man of mystery',
    friends:['p03', 'p04']
  },

  'p03': {
    id: 'p03',
    name: 'Fred Flinstone',
    age: 4000,
    bio: 'yaba-daba-doo',
    friends:['p02', 'p04', 'p01']
  },

  'p04': {
    id: 'p04',
    name: 'Taylor Swift',
    age: 26,
    bio: 'I make music in my spare time',
    friends:['p02', 'p03']
  },


  getUserByID: function(userID) {
    // should return a sentence containing all of the info about the user (name age, and bio)

    let answer = "";
    for (let key in users){
      if(key === userID){
        answer = `My name is ${users[key].name}. I'm ${users[key].age} years old. ${users[key].bio}`    
      }
    }
    return answer;
  },

  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  getUserByName: function(userName) {
     // should return a sentence containing all of the info about the user (name age and bio)
    let answer = "";

    Object.keys(users).forEach(function(elm){
      if(users[elm].name === userName){
        answer = `My name is ${users[elm].name}. I'm ${users[elm].age} years old. ${users[elm].bio}`
      }
    });
    return answer;
  },

  addUser: function(name, age, bio, friends) {
    //will need a random id as well when creating a new user. console log the user object to confirm it was added. 
    let uId = users.generateUid();
    users[uId] = {
      id: uId,
      name: name,
      age: age,
      bio: bio,
      friends: friends
    }
    return users;
  },

  getFriendsByID: function(userID) {
    // this function will take in a userID, and using this, return a list of all of their friends names. 

    let answer = "";
    Object.keys(users).forEach(function(elm){
      if(users[elm].id === userID){
        answer = users[elm].friends
      }
    });
    return answer;
  }

}

// console.log(users.getUserByID('p04'));
// console.log(users.getUserByName('Austin Powers'));
// console.log(users.addUser('Ami Yamanouchi','25','I am a Japanese',['Chiori']));
console.log(users.getFriendsByID('p03'));

