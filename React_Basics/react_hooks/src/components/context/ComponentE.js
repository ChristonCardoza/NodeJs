import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../../App'
import ComponentF from './ComponentF'

function ComponentE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            <div> <h4>Hook Context(ComponentE)</h4> User context value: {user}, channel context value: {channel}</div>
            <ComponentF />
        </div>
    )
}

export default ComponentE
