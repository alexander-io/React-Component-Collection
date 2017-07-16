import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


let root = document.getElementById('root')

// function tick() {
//   const curr_time = <h1>{new Date().toLocaleTimeString()}</h1>
//
//   ReactDOM.render(curr_time, root)
// }
//
// setInterval(tick, 1000)

/*
 * components let you split hte ui into independent, reusable pieces, and think about each piece in isolation
 * conceptually, components are javascript functions. they accept arbitrary inputs (called 'props') and return react elements describing what should appear on the screen
 */

// the simplest way to define a component is to write a javascript function
// function Welcome(props) {
//   return <h1>hello, {props.name}</h1>
//   /*
//    * this is a valid react component because it accepts a single 'props' object argument with data and returns a react element. we call such components functional because they are literally javascript functions
//    *
//    *
//   */
// }

//similarly, you can use an es6 class to define a component
// the aforementioned way of defining a react component is equivalent to using the 'class' style of definition
// class Welcome extends React.Component {
//   render () {
//     return <h1>hello, {this.props.name}</h1>
//   }
// }

// RENDERING A COMPONENT, https://facebook.github.io/react/docs/components-and-props.html
// previously we encountered react elements that represent DOM tags :
// const dom_tag_element = <div />;

// however, elements can also represent user-defined components

// const user_defined_component = <Welcome name="Grace" />;

// XXX when react sees an element representing a user-defined component, it passes jsx attributes to this component as a single object. we call this object props

// note, by convention components identifiers always start with a capital letter

// for example, the following renders  'hello, grace' on the page :
// function Welcome_User(props) {
//   return (
//     <div>
//       <h1>
//         hello, {props.name}
//       </h1>
//       <h2>
//         user : {props.user}
//       </h2>
//       <h2>
//         location : {props.location}
//       </h2>
//     </div>
//   )
// }
//
//
//
// const welcome_elem = <Welcome_User name="grace" user="gracily" location="seattle"/>;
//
// ReactDOM.render(welcome_elem, root)

// let branch = document.getElementById('branch');
// let s = <h1>ah-vak-oh-dew</h1>
// let c = <h1>ah-vak-oh-dewww</h1>
// TODO Functional and Class Components


// COMPOSING COMPONENTS, https://facebook.github.io/react/docs/components-and-props.html#composing-components

/*
components can refer to other components in their outpu. this lets us use the same component abstraction for any level of detail. a button, a form, a dialog, a screen: in react apps, all those are commonly expressed as components

for example, we can create an app component that renders Welcome many times
*/

// let Welcome = function(props) {
//   return <h1>hello, {props.name}</h1>
// }


/*
by convention, new react apps have a single App component at the very top

however, if you integrate react into an existing app, you might start bottom up with a small component like button and gradually work your way to the top of the view hierarchy

caveat, components must return a single root element, this is why in the App() function a <div>...</div> wrapper is needed to contain the numerous <Welcome /> elements
*/

// let App = function() {
//   return (
//     <div>
//       <Welcome name="justin" />
//       <Welcome name="kristen" />
//       <Welcome name="grace" />
//
//     </div>
//   )
// }
//
// ReactDOM.render(
//   <App />, document.getElementById('branch')
// )


/*
extracting components
https://facebook.github.io/react/docs/components-and-props.html#extracting-components

don't be afraid to split components into smaller components, for example... consider this comment component
*/

// let formatDate = function(date) {
//
// }

// writing components according to the following method can result in a component that's tricky to change or modify...
// as an alternative, re-write components with indivdual elements as return values...
// let Comment = function(props){
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       {/* <div className="UserInfo">
//         <img className="Avatar" src={props.author.avatarURL} alt={props.author.name}
//         />
//         <Avatar user={props.author} />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div> */}
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// using the avatar function, we can simplify the Comment component somewhat
// replace the following line with the one following it
//  <img className="Avatar" src={props.author.avatarURL} alt={props.author.name} />
// <Avatar user={props.author} />
// let Avatar = function(props) {
//   return (
//     <img className="Avatar" src={props.user.avatarURL} alt={props.user.name} />
//   )
// }

// next, extract the userinfo component that renders an Avatar next to the user's name

// let UserInfo = function(props){
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   )
// }


// props are read only, https://facebook.github.io/react/docs/components-and-props.html#props-are-read-only

/*
whether you declare a component as a function or a class, it must never modify its own props consider this sum function...

such functions are called 'pure' because they do not attempt to change their inputss, and always return the same result for the same inputs
*/
// let sum = function(a,b) {
//   return a+b
// }

/*
in contrast, this function is impure because it changes its own input
*/
// let withdraw = function(account, amount){
//   account.total -= amount;
// }

/*
sooooooo, react is pretty flexible but it has a single strict rule :
all react components must act like pure functions with respect to their props

*/


// STATE AND LIFECYCLE, https://facebook.github.io/react/docs/state-and-lifecycle.html
/*
in this section, we learn how to make a Clock component truly reusable and encapsulated.

it willset up its own timer and update itself every second

we can start encapsulating how the clock looks...
*/



// IMPLEMENTATION 1
// let Clock = function(props) {
//   return (
//     <div className="">
//       <h1>hello, world</h1>
//       <h2>it is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   )
// }
//
// let tick = function(){
//   ReactDOM.render(
//     <Clock date={new Date()} />, document.getElementById('root')
//   )
// }
//
// setInterval(tick, 1000)

// implementation 1 fails because it misses a crucial requirement, the fact that the clock sets up a timer and updates the ui every second should be an implementation detail of the Clock

// ideally, we want to write the following and have the clockl update itself
// ReactDOM.render(
//   <Clock />, document.getElementById('root')
// )

/*
to implement this, we need to add 'state' to the clock component

state is similar to props, but it is private and fully controlled by the component

we mentioned before that components defined as classes have some additional features. local state is exactly that : a feature available only to classes
*/

/*
CONVERTING A FUNCTION TO A CLASS, https://facebook.github.io/react/docs/state-and-lifecycle.html#converting-a-function-to-a-class

you can convert a functional component like clock to a class in five steps
  1. create an es6 class with the same name that extends React.Component
  2. add a single empty method to it called render()
  3. move the body of the function into the render() method
  4. replace props with this.props in the render() body
  5. delete the remaining empty function declaration

following this conversion algorithm, the Clock class becomes :
*/

// class Clock extends React.Component {
//
//   constructor(props) {
//     super(props) // note how props is passed to the base constructor
//     this.state = {date: new Date()}
//   }
//
//   render() {
//     return (
//       <div className="">
//         <h1>hello, world</h1>
//         <h2>it is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     )
//   }
// } // Clock is now defined as a class rather than a function

// adding local state to a class, https://facebook.github.io/react/docs/state-and-lifecycle.html#adding-local-state-to-a-class

/*
move the date from props to state in thee steps
  1. replace this.props.date with this.state.date in the render() method
  2. add a class constructor that assigns the initial this.state
  3. remove the date prop from the <Clock /> element
*/

// ReactDOM.render(
//   <Clock />, document.getElementById('root')
// )

/*
ADDING LIFECYCLE METHODS TO A CLASS, https://facebook.github.io/react/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class

in applications with many components, its very important to free up resources taken by the components when they are destroyed (GARBAGE COLLECTION)

want to set up a timer whenever the clock is rendered to the DOM for the first time. this is called 'mounting' in react

want to clear that timer whenever the DOM produced by the clock is removed. this is called 'unmounting' in react

can declare special methods on the component class to run some code when a component mounts and unmounts

  componentDidMount()
  componentWillUnmount()

these methods are called 'lifecycle hooks'

the componentDidMount() hook runs after the component output has been rendered to the DOM, this is a good place to set up a timer

*/

class Clock extends React.Component {

  constructor(props) {
    super(props) // note how props is passed to the base constructor
    this.state = {date: new Date()}
  }

  // the componentDidMount() hook runs after the component output has been rendered to the DOM, this is a good place to set up a timer
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div className="">
        <h1>hello, world</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

ReactDOM.render(<Clock />, root)

/*
summary of adding state to clock and making it self-contained and reusable...

  1. when <Clock /> is passed to ReactDOM.render(), react calls the constructor of the clock component. since clock needs to display the current time, it initializes this.state with an object including the current time

  2. react then calls the clock component render() method. this is how react learns what should be displayed on the screen. react then updates the DOM to match the clock's render output

  3. when the clock output is inserted in the DOM, react calls the componentDidMount() lifecycle hook. insiude it, the clock component asks the browser to set up a timer to call tick() once a second

  4. every second the browser calls the tick() method. inside it, the clock component schedules a ui update by calling setState() with an object containing the current time. thanks to the setState() call, react knows the state has changed, and calls render() method again to learn what should be on the screen. this time, this.state.date in the render() method will be different, and so the render output will include the updated time. react updates the DOM accordingly

  5. if the clock component is ever removed from the DOM, react calls the componentWillUnmount() lifecycle hook so the timer is stopped
*/


/*
USING STATE CORRECTLY, https://facebook.github.io/react/docs/state-and-lifecycle.html#using-state-correctly

there are three things to know about the setState() function

  1. do not modify state directly
    // wrong
    this.state.comment = 'Hello'

    // correct
    this.setState({comment : 'Hello'})

    the only place where you can assign this.state is the constructor

  2. state updates may be asynchronous

    react may batch multiple setState() calls into a single update for performance

    because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state

    for example, this code may fail to update the counter :

    // wrong
    this.setState({counter : this.state.counter + this.props.increment})

    to fix it, use a second form of setState() that accepts a function rather than an object. that function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument :

    // correct, regular nested function
    this.setState(function(prevState, props) {
      return {
        counter : prevState.counter + props.increment
      }
    })

    // correct, arrow function
    this.setState((prevState, props) => ({
      counter : prevState.counter + props.increment
    }))

  3. state updates are merged
    when you call setState(), react merges the object you provide into the current state.
    for example, your state may contain several independent variables :

      constructor(props) {
        super(props)
        this.state = {
          post : [],
          comments : []
        }
      }

    then you can update them independently with separate setState() calls :

      componentDidMount() {
        fetchPosts().then(response => {
          this.setState({
            posts : response.posts
          })
        })

        fetchComments().then(response => {
          this.setState({
            comments : response.comments
          })
        })
      }

    the merging is shallow, so this.setState({comments}) leave this.state.posts intact, but completely replaces this.state.comments
*/

/*
THE DATA FLOWS DOWN, https://facebook.github.io/react/docs/state-and-lifecycle.html#the-data-flows-down

neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn't care whether it is defined as a function or a class

this is why state is often called local or encapsulated. it is not accessible to any component other than the one that owns and sets it

a component may choose to pass its state down as props to its child components

  <h2>it is {this.state.date.toLocaleTimeString()}</h2>

this also works for user-defined components :
  <FormattedDate date={this.state.date} />

the FormattedDate component would receive the data in its props and wouldn't know whether it came from the clock's state, from the clock's props, or was typed by hand

  function FormattedDate(props) {
    return <h2>it is {props.date.toLocaleTimeString()}</h2>
  }

this is commonly called a 'top-down' or 'unidirectional' data flow. any state is always owned by some specific component, and any data or ui derived from that state can only affect components 'below' them in the tree

if you imagine a component tree as a waterfall of props, each component's state is like an additional water source that joins it at an arbirtrary point but also flows down

to show that all components are truly isolated, we can create an app component that renders three <Clock>s :
  function App() {
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
      </div>
    )
  }

  ReactDOM.render(
    <App />, document.getElementById('root')
  )


each clock sets up its own timer and updates independently

in react apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time. you can use stateless components inside stateful components, and vice versa

*/

/*
HANDLING EVENTS, https://facebook.github.io/react/docs/handling-events.html

handling events with react elements is very similar to handling events on DOM elements
there are some syntactic differences :
  react events are nam,ed useing camelCase, rather than lowercase
  with jsx you pass a function as the event handler, rather than a string

for example, the html
  <button onClick="activateLasers()">
    Activate Lasers
  </button>

is slightly different in react :
  <button onClick={activateLasers}>
    Activate Lasers
  </button>

another difference is that you cannot return false to prevent default behavior in react. you must call prevent default explicitly. for example, with plain html, to prevent the default link behavior of opening a new page, you can write :

  <a href="#" onclick="console.log('the linke was clicked'); return false">
    Click me
  </a>

in react this could instead be :
  function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('the link was clicked')
    }

    return (
      <a href="#" onClick={handleClick}>
        Click me
      </a>
    )
  }

here, e is a synthetic event. react defines these synthetic events according to the w3c spec, so you don't need to worry abut cross-browser compatibility.

when using react you should generally not need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered

when you define a component using an es6 class, a common pattern is for an event handler to be a method on the class. for example, this toggle component renders a button that lets the user toggle between 'on' and 'off' states :

*/

class Toggle extends React.Component {

  constructor(props) {
    super(props)
    this.state = {isToggleOn : true}
    // this binding is necessary to make 'this' work in the callback
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick() {
    this.setState(prevState => ({
      isToggleOn : !prevState.isToggleOn
    }))
  }

  // render component
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

ReactDOM.render(
  <Toggle />, document.getElementById('branch')
)

/*
you have to be careful about the meaning of this in jsx callbacks. in javascript, class methods are not bound by default. if you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called

this is not react-specific behavior; it is a part of how functions work in javascript. generally, if you refer to a method without () after it, such as onClick={this.handleClick} you should bind that method

if calling bind annoys you, there are two ways you can get around this. if you ar eusing the experimental property initializer syntax, you can use property initializers to conrrectly bind callbacks :
*/

// class LoggingButton extends React.Component {
//   // this syntax ensures 'this' is bound within handleClick
//   // warning : this is 'experimental syntax'
//   handleCLick = () => {
//     console.log('this is:', this);
//   }
//
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         click me
//       </button>
//     )
//   }
// }

/*
if you aren't using property initializer snytax, you can use an arrow function in the callback :
*/

class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is :', this);
  }
  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
        click me
      </button>
    )
  }
}

/*
the problem with this syntax is that a different callback is created each time the loggingbutton renders. in most cases, this is fine. however, if this clalabck is passed as a prop to lower components, those components might do an extra re-rendering. we generally recommend binding in the constructor or using the property initializer syntax, to avoid this ort of performance problems.
*/


/*
CONDITIONAL RENDERING, https://facebook.github.io/react/docs/conditional-rendering.html

in react, you can create distinct components that encapsulate behavior you need. then, you can render only some of them, depending on the state of your application.

conditional rendering in react works the same way conditions work in javascript. use javascript operators like if or the conditional operator to create elements representing the current state, and let react upate the UI to match them
*/

function UserGreeting(props) {
  return <h1>welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>please sign up</h1>
}

/*
we'll create a Greeting component that displays either of these components depending on whether a user is logged in
*/

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn

  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // if ifLoggedIn={true}, then the Greeting component returns a UserGreeting component, else GuestGreeting component
  <Greeting isLoggedIn={true} />, document.getElementById('branch')
)

/*
ELEMENT VARIABLES, https://facebook.github.io/react/docs/conditional-rendering.html

you can use variables to store elements. this can help you conditionally render a part of the component while the rest of the output doesn't change

consider these two new components representing logout and login buttons :
*/

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      login
    </button>

  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      logout
    </button>
  )
}

/*
in the example below, we will create a stateful component called LoginControl

it will render either <LoginButton /> or <LogoutButton /> depending on its current state. it will also render a <Greeting /> from the previous example :
*/
class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {isLoggedIn : false}
  }

  handleLoginClick() {
    this.setState({isLoggedIn : true})
  }

  handleLogoutClick() {
    this.setState({isLoggedIn : false})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn

    let button = null
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div className="">
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('stem')
);
