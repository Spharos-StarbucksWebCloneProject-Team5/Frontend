import React from 'react'

export default function MiddleLine(props: {gutterSize?:number, gutterSize2?:number}) {
  return (
    <hr 
      className="middle-line" 
      style={{margin:`${props.gutterSize}px 0px ${props.gutterSize2}px 0px`}}
    />
  )
}
