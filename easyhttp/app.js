
let http;
http = new easyHTTP();
if(0){
http.get("http://jsonplaceholder.typicode.com/posts", function(error, response){
  if(error){
    console.log(error);
  }else{
    console.log(response);
  }
});
}

if(0){
  http.get("http://jsonplaceholder.typicode.com/posts/1", function(error, response){
    if(error){
      console.log(error);
    }else{
      console.log(response);
    }
  });
}

if(0){
  http.post("http://jsonplaceholder.typicode.com/posts",{
    userId: 9,
    title: "Nwahc Laen Record",
    body: "This is a nwahc laen post."
  }, function(error, response){
    if(error){
      console.log(error);
    }else{
      console.log(response);
      // expect id: 101
    }
  });
}

if(0){
  http.put("http://jsonplaceholder.typicode.com/posts/2",{
  //  userId: 9,
    title: "Nwahc Laen Record",
    body: "This is a nwahc laen post."
  }, function(error, response){
    if(error){
      console.log(error);
    }else{
      console.log(response);
      // expect id: 101
    }
  });
}

if(1){
  http.delete("http://jsonplaceholder.typicode.com/posts/2", function(error, response){
    if(error){
      console.log(error);
    }else{
      console.log(response);
      // expect id: 101
    }
  });
}
console.log("Hello"); // at the top because ajax