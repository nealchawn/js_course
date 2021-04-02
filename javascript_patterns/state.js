function app(initialState = {}) {
  const state = initialState
  return {
    setState(newSftate = state) {
      return (e) => {
        console.log('previous state', state);
        // state = { ...state, ...newState};
        Object.assign(state, newState);
        console.log('updated state', state)
        document.getElementById('heading').textContent = state.heading
        document.getElementById('content').innerHTML = state.content()
        e.preventDefault()
      }
    },
  }
}
 
function homeComponent() {
  return `
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  `
}
 
function aboutComponent() {
  return `
    <p>This is the about page</p>
  `
}
 
function contactComponent() {
  return `<form>
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
  pageState.setState({ heading: null, content: homeComponent })
)
 
document
  .getElementById('home')
  .addEventListener(
    'click',
    pageState.setState({ heading: null, content: homeComponent })
  )
 
document
  .getElementById('about')
  .addEventListener(
    'click',
    pageState.setState({ heading: 'About Us', content: aboutComponent })
  )
 
document
  .getElementById('contact')
  .addEventListener(
    'click',
    pageState.setState({ heading: 'Contact Us', content: contactComponent })
  )

  




/**
 * 
 * 
 * https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/8762534#questions/9892434
 * 
 * We seem to be getting a lot of questions and confusion about this lecture: -

What is going on?
Why the new keyword?
I'm very confused here..
Why the unused/pointless code?

In an attempt to answer and rectify this, I'll add to a post I replied to a few months ago.

We don't need the new keyword as HomeState is not a constructor, it just manipulates the DOM. In fact we don't even need currentState as with using the new keyword and HomeState not setting any properties, it will always be an empty object which is never read or used (you may even see linter warnings to the effect).




I'm not sure what Brad was dong here to be honest and I find it hard to reason about or support the code in this lesson as even valid JavaScript.

Maybe just a few late nights and mid course burn out? I'm not sure. I have suggested that Brad remove or re-evaluate the lesson as I don't feel there is much to gain from it and it is confusing to students.

It's been a while since I took this course and the only state pattern I have become familiar with since this course is using frameworks like React and Vue and state management like Redux, React context and Vuex. So with fresh eyes and a lot more learning behind me I have to say I am a little baffled now to look back at this lecture to be honest.

With that in mind I have re-written it here to hopefully demonstrate a more accurate state pattern similar to that that you would find in a react application. So I hope that helps.
You can replace all the lecture code in app.js with the following and open your console to see how it runs.
 * 
 * 
 */