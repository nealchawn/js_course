// like a dating site
/**
 * API Random images: randomuser.me/api/portraits/men/82.jpg
 */

const profiles = [
  {
    name: "John Doe",
    age:  32,
    gender: "male",
    lookingfor: "female",
    location: "smallwood, ny",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Jane Plain",
    age:  30,
    gender: "female",
    lookingfor: "male",
    location: "monticello, ny",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    name: "Jack Brock",
    age:  37,
    gender: "male",
    lookingfor: "female",
    location: "smallwood, ny",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  }
];

function iterator(arr = []){
  let nextIndex = 0;

  return {
    next: function(){
      return(nextIndex < arr.length ? {value: arr[nextIndex++], done: false} : {done: true});
    },
    // need to add 2 or subtract 2 when switching directions.
    prev: function(){
      return(nextIndex > 0 ? {value: arr[nextIndex--], done: false} : {done: true});
    }
  }
}

const profileIterator = iterator(profiles);

// when we click next we want to iterate
document.getElementById('next').addEventListener('click', getNextProfile);

function getNextProfile(){
  //e.preventDefault();

  let profileData = profileIterator.next();
  let profile = profileData.value;

  if(!profileData.done){
    document.getElementById('profileDisplay').innerHTML = `
    <ul class= 'list-group'>
      <li class='list-group-item'>Name: ${profile.name}</li>
      <li class='list-group-item'>Age: ${profile.age}</li>
      <li class='list-group-item'>Location: ${profile.location}</li>
      <li class='list-group-item'>Preference: ${profile.gender} looking for ${profile.lookingfor}</li>
    </ul>`

    document.getElementById('imageDisplay').innerHTML =
    `
    <img src='${profile.image}'>
    `;
  }else {
    //window.location.reload();
    profileIterator.nextIndex = 0;
  }
}

getNextProfile()