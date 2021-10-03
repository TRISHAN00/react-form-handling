import React, { Component } from 'react'

export default class TodoClass extends Component {
  state = { content: '', warningText: '' }

  onChangeHandler = e => {
    const InputContent = e.target.value
    const warningText = InputContent.includes('js')
      ? `Dont type "JS" in the box`
      : null

    this.setState({
      content: e.target.value,
      warningText: warningText
    })
  }

  render () {
    const { content, warningText } = this.state
    return (
      <div>
        <h3>Typing Content : {content}</h3>
        <textArea onChange={this.onChangeHandler} rows='4' cols='50'></textArea>
        <br />
        <span>
          <strong>{warningText || 'Good Choice!'}</strong>
        </span>
      </div>
    )
  }
}
