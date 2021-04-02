// class
const User = function(name){
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to){
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from){
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

// module
const Chatroom = function(){
  let users = {}; // list of uses

  return {
    register: function(user){
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to){
      if(to){
        to.receive(message, from);
      }else{
        // broadcast
        for(key in users){
          if (users[key] !== from){
            users[key].receive(message, from)
          }
        }
      }
    }
  }
}

const user1 = new User("Chawn");
const user2 = new User("Bob");
const user3 = new User("Jill");

const chatroom1 = new Chatroom();

chatroom1.register(user1);
chatroom1.register(user2);
chatroom1.register(user3);

user1.send("Hello Bob", user2);
user2.send("Hello Chawn! \n Oops Wrong Channel!");