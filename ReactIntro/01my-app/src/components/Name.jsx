import React, { Component } from 'react'

export default class Main extends Component {
  state = {
    nomeKey: '',
  }
  handleChange = e => {
    this.setState({
      nomeKey: e.target.value,
    })
  }
  render() {
    const { nomeKey } = this.state
    return (
      <div>
        <h1>{nomeKey}</h1>
        <label htmlFor="Nome">Nome: </label>
        <input type="text" onChange={this.handleChange} className="nome" />
      </div>
    )
  }
}
