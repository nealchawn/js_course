const http = new easyHTTP();

//let data;

http.get("http://jsonplaceholder.typicode.com/users")
 .then(data => console.log(data))
 .catch(err => console.log(err))

http.post("http://jsonplaceholder.typicode.com/users",{
  userId: 9,
  name: "Nwahc Laen",
  username: "nwahclaen"
})
 .then(data => console.log(data))
 .catch(err => console.log(err))

http.put("http://jsonplaceholder.typicode.com/users/1",{
  userId: 9,
  name: "Nwahc Laen",
  username: "nwahclaen"
})
 .then(data => console.log(data))
 .catch(err => console.log(err))

http.delete("http://jsonplaceholder.typicode.com/users/2")
 .then(data => console.log(data))
 .catch(err => console.log(err))
