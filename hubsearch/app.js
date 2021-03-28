const searchUserInput = document.getElementById('searchUser');

const ghub = new Hub();
const ui = new UI();


searchUserInput.addEventListener('keyup', (e) =>{
  const userText = e.target.value;

  if(userText !== ''){
    // github request via github class
    // nealchawn
    ghub.getUser(e.target.value)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        // show alert ui.js
        ui.showAlert('User Not Found','alert alert-danger');
      }else{
        // console.log(data.profile) ui.js
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  }else {
    // clear profile
    ui.clearProfile();
  }
});