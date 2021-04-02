const Singleton = (function(){
  let instance;
  let instances = 0;

  function createInstance(){
    const object = new Object('Object Guy!');
    return object;
  }

  return {
    getInstance: function(){
      instances += 1;
      if(!instance){
        instance = createInstance();
      }
      return instance;
    },
    totalInstances: function(){ return (instances)}
  }
})();

const instA = Singleton.getInstance();
console.log(`Total instances: ${Singleton.totalInstances()}`);
const instB = Singleton.getInstance();
console.log(instA);
console.log(instA === instB);
console.log(`Total instances: ${Singleton.totalInstances()}`);