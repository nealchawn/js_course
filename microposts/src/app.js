document.clear;
import { http } from './http';
import { ui } from './ui';
// get posts on document load
document.addEventListener('DOMContentLoaded', getPosts);

ui.postSubmit.addEventListener('click', add_update_Post);

ui.post.addEventListener('click', edit_delete_post);

// list item click
function edit_delete_post(e){
  e.preventDefault();
  // delete
  if(e.target.tagName == 'I'){
    let post_id = e.target.parentElement.dataset.id;
    // delete
    if(e.target.className.match(/.+(remove)/)){
      http.delete(`http://localhost:3000/posts/${post_id}`)
    .then(()=>getPosts());
    }
    // edit
    else if(e.target.className.match(/.+(pencil)/)){
      // set form input id and populate form
      let post_id = e.target.parentElement.dataset.id;
      ui.idInput.value = post_id;
      showPost(post_id);
    }
  }
}

function showPost(post_id){
  ui.idInput.value = post_id;
  http.get(`http://localhost:3000/posts/${post_id}`)
  .then((jsonData) => {
    ui.titleInput.value = jsonData.title;
    ui.bodyInput.value = jsonData.body;
  });
}


function getPosts(e){
  http.get("http://localhost:3000/posts")
  .then((jsonData) =>{
    ui.showPosts(jsonData);
  })
  .catch((e)=>console.log(console.e));
}


// really form submit
function add_update_Post(e){
  e.preventDefault();
  const post_id = ui.idInput.value;
  const post_title = ui.titleInput.value;
  const post_body = ui.bodyInput.value;
  // create
  if(isNaN(ui.idInput.value)){
    http.post('http://localhost:3000/posts', {"title": post_title, "body": post_body})
    .then(() => getPosts());
  }
  // update
  else{
    http.put(`http://localhost:3000/posts/${post_id}`, {"title": post_title, "body": post_body})
    .then(() => getPosts());
  }
}
