import React from 'react';
import "./Card.css";
function card(props) {
  return (
    <div>
      <h1 className='heading'>{props.heading}</h1>
        <div className='items'>
        <ul>
            <li>{props.ul1}</li>
            <li>{props.ul2}</li>
            <li>{props.ul3}</li>
            <li>{props.ul4}</li>
        </ul>
        </div>
    </div>
  )
}

export default card