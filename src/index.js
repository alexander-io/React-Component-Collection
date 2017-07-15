import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'



let root = document.getElementById('root')
let branch = document.getElementById('branch');

let s = <h1>ah-vak-oh-dew</h1>
let c = <h1>ah-vak-oh-dewww</h1>

//
// let getTime = () => {
//   return getTime
//


function tick() {
  const curr_time = <h1>{new Date().toLocaleTimeString()}</h1>

  ReactDOM.render(curr_time, root)
}

setInterval(tick, 1000)








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
