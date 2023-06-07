import React from 'react'
import '../App.css';

export default function Header(props) {
  return (
    <div className="headerMain flex">
        <div onClick={()=>props.toggler(true)}>
            Shopping Cart
        </div>
        <div onClick={()=>props.toggler(false)}>
            Cart
            <sup>{props.count}</sup>
        </div>
    </div>
  )
}
