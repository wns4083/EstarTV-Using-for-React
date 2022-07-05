import React from 'react'
import './CardsItems.css'
function CardsItems(props) {
  return (
    <>
        <div className='cardsItems'>
            <figure>
                <span className='moveBlock'></span>
                <img src={props.srcs}
                     alt={props.alts}
                     style={{display:'block'}}
                />
                <figcaption>
                    <h2>{props.titles}</h2>
                    <p>{props.text}</p>
                </figcaption>
                <span className='moveBlock2'></span>
            </figure>
        </div>
    </>
  )
}

export default CardsItems