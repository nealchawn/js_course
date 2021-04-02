function app(initialState = {}) {
  const state = initialState
  return {
    setState(newState = state) {
      return (e) => {
        const previousState = { ...state }
        console.log('previous state', previousState)
        Object.assign(state, newState)
        console.log('updated state', state)
        render(previousState, newState)
        e.preventDefault()
      }
    },
  }
}
 
function render(previousState, newState) {
  if (previousState.heading !== newState.heading) {
    document.getElementById('heading').textContent = newState.heading
  }
  if (previousState.content !== newState.content) {
    document.getElementById('content').innerHTML = newState.content()
  }
}
 
function homeComponent(props) {
  return () => `
    <div class="jumbotron">
      <h1 class="display-4">${props.title}</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  `
}
 
function aboutComponent(props) {
  return () => `
    <p>You have visited this page ${props.count++} times!</p>
  `
}
 
function contactComponent(props) {
  return () => `
  <form>
   <div class="form-group">
     <label>Name</label>
     <input type="text class="form-control">
   </div>
     <div class="form-group">
     <label>Email Address</label>
     <input type="email" class="form-control">
   </div>
   <button type="submit" class="btn btn-primary">Submit</button>
 </form>
 `
}
 
const pageState = app()
 
document.addEventListener(
  'DOMContentLoaded',
  pageState.setState({
    heading: null,
    content: homeComponent({ title: 'The page just loaded!' }),
  })
)
 
document.getElementById('home').addEventListener(
  'click',
  pageState.setState({
    heading: null,
    content: homeComponent({ title: 'This is not the first visit to Home!' }),
  })
)
 
document.getElementById('about').addEventListener(
  'click',
  pageState.setState({
    heading: 'About Us',
    content: aboutComponent({ count: 1 }),
  })
)
 
document
  .getElementById('contact')
  .addEventListener(
    'click',
    pageState.setState({ heading: 'Contact Us', content: contactComponent() })
  )
 