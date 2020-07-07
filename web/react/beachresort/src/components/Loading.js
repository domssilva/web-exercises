import React from 'react'

import Spinner from '../images/gif/loading-arrow.gif'

export default function Loading() {
  return (
    <div>
      <h3>Rooms Data Loading...</h3>
      <img src={Spinner} alt="loading gif"/>
    </div>
  )
}
