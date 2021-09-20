import React from 'react'

export default function FormDetails ({ firstName, lastName, age, value }) {
  return (
    <div>
      <h4>Your first name is : {firstName}</h4>
      <h4>Your last name is : {lastName}</h4>
      <h4>Your age is : {age}</h4>
      <h4>Your programing language is : {value}</h4>
    </div>
  )
}
