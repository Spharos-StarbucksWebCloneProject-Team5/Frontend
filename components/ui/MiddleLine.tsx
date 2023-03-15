import React from 'react'

export default function MiddleLine(props: {gutterSize?:number}) {
  return (
    <hr 
      className="middle-line" 
      style={{margin:`${props.gutterSize}px 0px`}}
    />
  )
}
