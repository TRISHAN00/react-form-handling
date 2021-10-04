import React, { useEffect, useRef } from 'react'

function Form () {
  const inputRef = useRef(null)
  const paraRef = useRef('')
  useEffect(() => {
    // document loaded
    inputRef.current.focus()
    console.log(paraRef.current)
  }, [])
  return (
    <div>
      <p>
        <input ref={inputRef} type='text' placeholder='enter something' />
        <p ref={paraRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, est.
        </p>
      </p>
    </div>
  )
}

export default Form
