import React from 'react'

function ActorsItem(props) {
  return (
    <div className='ActorsItem'>
        <figure
               className={props.names}
               data-category={props.label}
        >
            <img
               src={props.src}
               alt={props.alt}
               title='ActorsImg'
               className='ActorItemImg'
               style={props.styles}
               />
            <div className='infoActor'>
                <h4 className='infoAbout'>
                    {props.text}
                </h4>
                <p className='infoDetail'>
                  {props.detail}
                </p>
            </div>
        </figure>
    </div>
  )
}

export default ActorsItem