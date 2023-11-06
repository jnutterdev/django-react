import React, { useEffect, useState } from 'react'

const Cards = () => {
 
    const [posts, setPosts] = useState([])

    const fetchData = () => {
      fetch("api/posts")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setPosts(data)
        })
  }


  useEffect(() => {
    fetchData()
  }, [])


  return (
    <section>
        {posts.length > 0 && (
        <ul>
          {posts.map(post => (
            <><li key={post.id}>{post.title}</li><p>{post.content}</p></>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Cards;
