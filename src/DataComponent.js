import React from 'react'

const DataComponent = props => {
    return (
        <div>
           <h1>
               {props.title}
           </h1>
           <p> {props.explanatiion}</p>
    {props.type === 'video' ? <iframe src={props.url} allowFullScreen /> : <img src={props.url} alt="today's space pic" /> }
        </div>
    )
}

export default DataComponent