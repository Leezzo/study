import React, {Component} from 'react';

function Square(props) {
    return (
        <button
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

// class Square extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null,
//         }
//     }
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         )
//     }
// }

export default Square;
