import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DatFetching() {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios
            // .get(`https://jsonplaceholder.typicode.com/posts/`)
            // .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    // },[id])
    },[idFromButtonClick])
    return (
        <div>
           {/* <ul>
               {posts.map(post => (
                   <li key={post.id}>{post.title}</li>
               ))}
           </ul>  */}
           <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{posts.title}</div>
        </div>
    )
}

export default DatFetching
