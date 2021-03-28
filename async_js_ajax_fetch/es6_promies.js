const posts = [
  {title: "Post one", body: "This is post one."},
  {title: "Post two", body: "This is post two."},
  {title: "Post three", body: "This is post three."}
];

// function getPosts(){
//   console.log(posts);
//   let output = '<ul>';
//   posts.forEach((post)=>{
//     output += `<li>${post.title}</li>`;
//   });
//   output += '</ul>';

//   document.body.innerHTML = output;
// }

// function createPost(post){
//   posts.push(post);
//   console.log("created post");
// }


function createPost(post){
  return new Promise(function(resolve, reject){
    setTimeout(function(){

      let error = false;

      if(!error){
        posts.push(post);
        resolve();
      }else{
        reject("Some error");
      }
  
    },2000);
  });
  
}

function getPosts(){
  setTimeout(function(){
    let output = "<ul>";
    posts.forEach((post)=>{
      output += `<li>${post.title}</li>`;
    });
    output += '</ul>';
    document.body.innerHTML = output;
  },1000);
}


createPost({title: "Post four", body: "This is post four"})
.then(getPosts)
.catch(function(err){console.log(arguments);})

getPosts(); // not needed with callback

// case 1 - synchronous and fine
// setTimeout(createPost, 1000, {title: "Post four", body: "This is post four"});
// setTimeout(getPosts, 1000);

// case 1 - asynchronous and not fine
// setTimeout(createPost, 2000, {title: "Post four", body: "This is post four"});
// setTimeout(getPosts, 1000);
