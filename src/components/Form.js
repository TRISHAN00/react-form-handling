import React, { useEffect, useRef } from 'react'

function Form () {
  const inputRef = useRef()
  useEffect(() => {
    // document loaded
    inputRef.current.focus()
  }, [])
  return (
    <div>
      <p>
        <input ref={inputRef} type='text' placeholder='enter something' />
      </p>
    </div>
  )
}

export default Form
