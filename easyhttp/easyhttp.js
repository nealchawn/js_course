// library file
// es5 object
function easyHTTP(){
  this.http = new XMLHttpRequest();
}

// Make an HTTP get request

// arrow functions address this issue
/**
 * 
 *  {easyhttp.js:12 Uncaught TypeError: Cannot read property 'status' of undefined
    at XMLHttpRequest.http.onload (easyhttp.js:12)} url 
 */
// easyHTTP.prototype.get = function(url){
//   this.http.open('GET', url, true);

//   this.http.onload = function(){
//     if(this.http.status == 200){
//       console.log(this.http.responseText);
//     }
//   };

//   this.http.send();
// }


easyHTTP.prototype.get = function(url, callback = function(responseText){console.log("Override get callback!");}){
  this.http.open('GET', url, true);

  let self = this; // arrow functions with es6 address this
  this.http.onload = function(){
    if(self.http.status == 200){
      // console.log(self.http.responseText);
      callback(null, self.http.responseText);
    }else {
      callback('Error: '+self.http.status);
    }
  };

  this.http.send();
};

// Make an HTTP post request
easyHTTP.prototype.post = function(url ="", data = {}, callback = function(responseText){console.log("Override post callback!");}){
  this.http.open('POST',url, true);
  this.http.setRequestHeader('content-type','application/json');

  let self = this; // arrow functions with es6 address this
  this.http.onload = function(){
    //if(parseInt(Math.log10(self.http.status)) == 2){
    if(String(self.http.status).match(/2[0-9][0-9]/)){
      // console.log(self.http.responseText);
      callback(null, self.http.responseText);
    }else {
      callback('Error: '+self.http.status);
    }
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP put request
easyHTTP.prototype.put = function(url ="", data = {}, callback = function(responseText){console.log("Override put callback!");}){
  this.http.open('PUT',url, true);
  this.http.setRequestHeader('content-type','application/json');

  let self = this; // arrow functions with es6 address this
  this.http.onload = function(){
    //if(parseInt(Math.log10(self.http.status)) == 2){
    if(String(self.http.status).match(/2[0-9][0-9]/)){
      // console.log(self.http.responseText);
      callback(null, self.http.responseText);
    }else {
      callback('Error: '+self.http.status);
    }
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP delete request
easyHTTP.prototype.delete = function(url, callback = function(responseText){console.log("Override delete callback!");}){
  this.http.open('DELETE', url, true);

  let self = this; // arrow functions with es6 address this
  this.http.onload = function(){
    if(self.http.status == 200){
      callback(null, `Post Deleted: ${self.http.responseText}\nStatus: ${self.http.status}`);
    }else {
      callback('Error: '+self.http.status);
    }
  };

  this.http.send();
};