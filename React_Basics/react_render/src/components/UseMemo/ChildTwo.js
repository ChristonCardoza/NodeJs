import React from 'react'

export default function ChildTwo() {
    console.log('Child Two Render')
    return (
        <div>
            ChildTwo Component
        </div>
    )
}
export const MemoizedChildTwo = React.memo(ChildTwo)
