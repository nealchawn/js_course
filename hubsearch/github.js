class Hub{
  constructor(){
    this.client_id = "1a9afc839f2cc4865e5a";
    this.client_secret = "d344937fb64cd524d0132cecda18dfd8d34fe594";
    this.repos_count =5;
    this.repos_sort = "created: asc";
  }

   // /users/username
    // /users/username/repos
  async getUser(username){
    const profileResponse = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile: profileData,
      repos
      
    };
  }

    // /users/username/repos
    async getRepos(username){
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const reposData = reposResponse.json();
      return reposData;
    }

}