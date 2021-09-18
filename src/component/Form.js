import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    age: '',
    error: '',
    checkbox: false,
    value: 'select'
  }

  handleOnBlur = e => {
    if (e.target.name === 'firstName') {
      this.setState({
        firstName: e.target.value
      })
    } else if (e.target.name === 'lastName') {
      this.setState({
        lastName: e.target.value
      })
    } else if (e.target.name === 'age') {
      this.setState({
        age: e.target.value
      })
    } else if (e.target.name === 'checkbox') {
      this.setState({
        checkbox: true
      })
    } else if (e.target.name === 'selectName') {
      this.setState({
        value: e.target.value
      })
    } else {
      console.log('please type number in age field')
    }
  }

  handleOnSubmit = e => {
    const { firstName, lastName, age, checkbox } = this.state
    if (firstName && lastName && age && checkbox) {
      console.log('submit succes')
    } else {
      this.setState({
        error: 'Please fillup all the field'
      })
    }
    e.preventDefault()
  }

  render () {
    const { firstName, lastName, age, checkbox, value } = this.state
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            required
            name='firstName'
            onChange={this.handleOnBlur}
            type='text'
            value={firstName}
            placeholder='write firstname'
          />

          <br />
          <br />
          <input
            required
            name='lastName'
            onChange={this.handleOnBlur}
            type='text'
            value={lastName}
            placeholder='write lastname'
          />
          <br />
          <br />
          <input
            required
            name='age'
            onChange={this.handleOnBlur}
            type='text'
            value={age}
            placeholder='age'
          />
          <br />
          <br />
          <input
            onChange={this.handleOnBlur}
            type='checkbox'
            name='checkbox'
            id='checkbox'
            value={checkbox}
          />
          <br />
          <br />
          <select onChange={this.handleOnBlur} name='selectName' value={value}>
            <option value='Select'>Select</option>
            <option value='React'>React</option>
            <option value='Angular'>Angular</option>
            <option value='Vue'>Vue</option>
          </select>
          <br />
          <br />
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}
