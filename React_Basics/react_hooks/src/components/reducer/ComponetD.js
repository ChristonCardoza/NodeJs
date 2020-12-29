import React, { useContext } from 'react'
import { CountContext } from '../../App'

function ComponentD() {
    const CountContext = useContext( CountContext)
    return (
        <div>
            Component D
            <button onClick={() => CountContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => CountContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => CountContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD
