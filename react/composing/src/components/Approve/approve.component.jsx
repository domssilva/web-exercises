import React from 'react'

export default function Approve(props) {
  console.log(props);
  return (
    <div className="ui card">
      <div className="content">
        {props.children}
      </div>
      <div className="ui two buttons">
        <button className="ui basic green button">approve</button>
        <button className="ui basic red button">reject</button>
      </div>
    </div>
  )
}
