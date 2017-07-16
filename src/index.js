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
