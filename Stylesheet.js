import React from 'react'
import myStyle from '../styles/myStyle.css'

function Stylesheet(props) {
  let className = props.primary ? 'primary':"  ";
  return (
    <>
    <h1 className = 'primary'>Hello World....!</h1>
    </>
  )
}

export default Stylesheet
