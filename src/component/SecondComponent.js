import React from 'react'
import Third from './Third.js'

const SecondComponent = props => {
    console.log('second,components', props)
    return (
        <div>
  <h1> {props.title}</h1> 
  <h2>{props.exp} </h2>
{props.type === 'video' ? <iframe src={props.urlProp} allowFullScreen /> : <img src={props.urlProps} alt='space image' />}
        </div>
        
    )
}

export default SecondComponent