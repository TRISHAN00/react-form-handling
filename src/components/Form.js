import React, { useEffect, useRef } from 'react'
import Input from './Input'

function Form () {
  const inputRef = useRef(null)

  useEffect(() => {
    // document loaded
    inputRef.current.focus()
  }, [])
  return (
    <div>
      <p>
        <Input ref={inputRef} type='text' placeholder='enter something' />
      </p>
    </div>
  )
}

export default Form
