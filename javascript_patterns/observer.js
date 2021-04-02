function EventObserver(){
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn){
    this.observers.push(fn);
    console.log(`You have subscribed to ${fn.name}`);
  },
  unsubscribe: function(fn){
    this.observers = this.observers.filter((item)=>{
      return(item !== fn);
    });
    console.log(`You have unsubscribed from ${fn.name}`);
  },
  fire: function(){
    this.observers.forEach((item) => item())
  }
}

const click = new EventObserver();

document.querySelector('button.fire').addEventListener('click', function(){
  click.fire();
});

document.querySelector('button.sub-ms').addEventListener('click', function(){
  click.subscribe(getCurMilliseconds);
});

document.querySelector('button.unsub-ms').addEventListener('click', function(){
  click.unsubscribe(getCurMilliseconds);
});

function getCurMilliseconds(){
  console.log((new Date().getMilliseconds()));
}