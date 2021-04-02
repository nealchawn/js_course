// dont need the new keyword since homeState is not a constructor

const PageState = function(){
  let currentState = new homeState(this);

  this.init = function(){
    this.change(new homeState);
  }

  this.change = function(state){
    currentState = state;
  }

};


// Home State
const homeState = function(page){
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
  <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  `;
}

// About State
const aboutState = function(page){
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>This is the about page!</p>
  `;
};

// Contact State
const contactState = function(page){
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
    <form>
      <div class='form-group'>
        <label>Name</label>
        <input class='form-control' type='text'>
      </div>
      <div class='form-group'>
        <label>Email Address</label>
        <input class='form-control' type='email'>
      </div>
    </form>
  `;
};

// Instantiate Page state
const page = new PageState();

// init the first state
page.init();

// event listeners to toggle states
const homeBtn = document.querySelector('#home');
const aboutBtn = document.querySelector('#about');
const contactBtn = document.querySelector('#contact');

homeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  page.change(new homeState);
})

aboutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  page.change(new aboutState);
})

contactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  page.change(new contactState);
})