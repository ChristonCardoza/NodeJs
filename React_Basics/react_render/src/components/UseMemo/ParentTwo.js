import React, { useState } from 'react'
import { MemoizedChildTwo } from './ChildTwo'
// import ChildTwo from './ChildTwo'

export default function ParentTwo() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState(0)

    console.log('ParentTwo Render')

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}> Count - {count}</button>
            <button onClick={() => setName('DeadMan Zone')}> Name - {name}</button>
            {/* <ChildTwo name={name} /> */}
            <MemoizedChildTwo name={name} />
        </div>
    )
}
