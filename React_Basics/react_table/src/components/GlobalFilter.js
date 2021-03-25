import React, { useState } from 'react'
// Debounce Filter
import { useAsyncDebounce } from 'react-table'

export const GlobalFilter = ({filter, setFilter}) => {
    
    // return (
    //     <span>
    //         Search: {' '}
    //         <input 
    //             value={filter || ''}
    //             onChange={e => setFilter(e.target.value)}
    //         />
    //     </span>
    // )

    // De-bouncing Logic
    const [value, setValue] = useState(filter)

    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)

    return (
        <span>
            Search: {' '}
            <input 
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value)
                    onChange(e.target.value)
                }}
            />
        </span>
    )
}
