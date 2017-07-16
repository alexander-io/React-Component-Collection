import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


let root = document.getElementById('root')

function tick() {
  const curr_time = <h1>{new Date().toLocaleTimeString()}</h1>

  ReactDOM.render(curr_time, root)
}

setInterval(tick, 1000)

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

//
// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         { this.props.value }
//       </button>
//     );
//   }
// }
//
// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square value={i}/>;
//   }
//
//   render() {
//     const status = 'Next player : X';
//
//     return (
//       <div>
//         <div className="status">{ status }</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }
//
// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* TODO */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }
//
// // =================================
//
// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );
