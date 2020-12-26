import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Memo Component')
    return (
        <div>
            Memo Component {name}
        </div>
    )
}

export default React.memo(MemoComp)
