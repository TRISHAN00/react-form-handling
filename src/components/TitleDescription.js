import React, { useState } from 'react'

function TitleDescription () {
  const [todo, setTodo] = useState({
    title: '',
    description: ''
  })
  const { title, description } = todo
  return (
    <div>
      <h2>{title}</h2>
      <input
        type='text'
        onChange={e => {
          setTodo({
            title: e.target.value
          })
        }}
      />
      <br />
      <br />
      <textarea
        onChange={e => {
          setTodo({
            description: e.target.value
          })
        }}
        cols='30'
        rows='4'
      ></textarea>
    </div>
  )
}

export default TitleDescription
