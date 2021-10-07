import React, { useEffect, useState } from 'react'

function GetPost () {
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setPost(data)
      })
      .catch(err => {
        setLoading(false)
        setPost({})
        setError('There was some problem')
      })
  }, [])

  return (
    <div>
      <h1>{loading ? 'Loading...' : post.title}</h1>
      <h2>{error ? null : post.title}</h2>
    </div>
  )
}

export default GetPost
