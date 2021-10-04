import React from 'react'

function Input ({ type, placeholder }, inputRef) {
  return (
    <div>
      <input ref={inputRef} type='text' placeholder='enter something' />
    </div>
  )
}

const forwardedRef = React.forwardRef(Input)

export default forwardedRef
