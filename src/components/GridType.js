import React from 'react'

function GridType(props) {
    let imgSetting ={
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'top',
        overflow:'hidden'
    }
  return (
    <div className={props.names}
         style={{gridArea:`${props.styles}`, position:'relative', overflow:'hidden', width:'100%', height:'100%'} }
    >
        <img src={props.src}
             alt={props.alt}
             style={{imgSetting}}
        >
        </img>
    </div>
  )
}

export default GridType