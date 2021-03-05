import React, { useState } from 'react'
import { ChildA, MemoizedChildA } from './ContextChildren'

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

export default function ContextChildren() {

    const [count, setCount] = useState(0)
    console.log('Context Parent Render')

    return (
        <>
          <button onClick={() => setCount(c => c+1)}>Count {count}</button>  
          <CountProvider value={count}>
            {/* <ChildA /> */}
            <MemoizedChildA />
          </CountProvider>
        </>
    )
}
