import React, { useState } from 'react';
export function Demo1() {
    let [state, setState] = useState({count: 1});
    let up = () => {
        setState({count: state.count + 1});
    }
    let down = ()=>{
        setState({count: state.count - 1});
    };
    return (
        <div>
            <div>{state.count}</div>
            <div>
                <button key='up' onClick={up}>加</button>
                <button key="down" onClick={down}>减</button>
            </div>
        </div>
    );
}