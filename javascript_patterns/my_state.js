function UI(initState){
  this.state = initState;
  return{
    setState: function(newState = this.state){
      return function(e){
        
        console.log(`The old state:`, this.state);
        this.state = {...this.state, ...newState};
        console.log(`The new state:`, this.state);

        document.querySelector('#heading').innerText = this.state.heading;
        document.querySelector('#content').innerHTML = this.state.content.call();
      }
    }
  }
}

const uiCtrl = UI();

document.addEventListener('DOMContentLoaded', uiCtrl.setState({heading: null, content: homeComponent}));

document.querySelector('#home').addEventListener('click', uiCtrl.setState({heading: null, content: homeComponent}));

document.querySelector('#about').addEventListener('click', uiCtrl.setState({heading: "ABOUT", content: aboutComponent}));

document.querySelector('#contact').addEventListener('click', uiCtrl.setState({heading: "CONTACT", content: contactComponent}));

function homeComponent(){
  return `
  <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
    <a class="btn btn-outline-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  `;
}

function aboutComponent(){
  return `
   <p>Some Html component</p>
  `;
}

function contactComponent(){
  return `
  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text class="form-control">
    </div>
    <div class="form-group">
      <label>Email Address</label>
      <input type="email" class="form-control">
    </div>
    <button type="submit" class="btn btn-outline-primary">Submit</button>
  </form>
  `;
}