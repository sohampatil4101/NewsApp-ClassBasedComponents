import React, { Component } from 'react'
import loading2 from './loading2.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center' >
        <img src={loading2} alt='loading' />

      </div>
    )
  }
}
