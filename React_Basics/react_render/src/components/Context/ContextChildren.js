import React, { useContext } from 'react'
import { CountContext } from './ContestParent'

export const ChildA = () => {
    console.log('Child A Render')
    return (
        <div>
            <div> Child A</div>
            <ChildB />
        </div>
    )
}
export const MemoizedChildA = React.memo(ChildA)

export const ChildB = () => {
    console.log('Child B Render')
    return (
        <div>
            <div> Child B</div>
            <ChildC />
        </div>
    )
}


export const ChildC = () => {
    const count = useContext(CountContext)
    console.log('Child C Render')
    return (
        <div>
            <div> Child C Count = {count}</div>
        </div>
    )
}