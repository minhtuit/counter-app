import React, { useState } from 'react';

// type TState = {
//     count: number,
// };

// class Counter extends React.Component<{}, TState> {
//     constructor(props: {}) {
//         super(props);
//         this.state = {
//             count: 0,
//         }
//     }

//     tang = () => {
//         this.setState ({
//             count: this.state.count + 1
//         })
//     }
//     giam = () => {
//         this.setState ({
//             count: this.state.count - 1
//         })
//     }

//     render() {
//         const { tang, giam, state } = this;
//         const { count } = state;
//         return(
//             <div>
//                 {count}
//                 <button onClick={tang} >Tăng</button>
//                 <button onClick={giam}>Giảm</button>
//             </div>
//         )
//     }
// }


const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const tang = () => {
        setCount(count + 1);
    };
    const giam = () => {
        setCount (count - 1);
    }
    return(
        <div>
            {count}
            <button onClick={tang}>Tăng</button>
            <button onClick={giam}>Giảm</button>
        </div>
    )
}

export default Counter;