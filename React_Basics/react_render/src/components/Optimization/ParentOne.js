import React, { useState } from 'react'
// import ChildOne  from './ChildOne'

export default function ParentOne({ children }) {
    const [count, setCount] = useState(0)

    console.log('Parent One Render')
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count} </button>
            {/* <ChildOne /> */}
            {children}
        </div>
    )
}
