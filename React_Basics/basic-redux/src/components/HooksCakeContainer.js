import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    // const numOfCakes = useSelector(state => state.numOfCakes)
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of cakes (using Hooks) - {numOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
