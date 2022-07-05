
import React from 'react'

function AffiliateItem(props) {
    const affiliateItemStyle = {width: 300, height: 200, fontSize: 24}
  return (
    <div className={props.names}
         style={affiliateItemStyle}
    >
        <span className='affiliateItemNames'>
            <h3>{props.Text}</h3>
        </span>
    </div>
  )
}

export default AffiliateItem