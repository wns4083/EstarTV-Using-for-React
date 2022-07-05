import React from 'react'
import AffiliateItem from './AffiliateItem'
import './Affiliate.css'
function Affiliate() {
   
  return (
    <section className='AffiliateSection'>
      <div className='AffiliateSubject'>
        <h2>제휴업체</h2>
      </div>
    <div className='AffiliateWrrap'>
        <AffiliateItem
         Text='코코메디'
         names='item1'
        />
        <AffiliateItem
         Text='THERAGUN'
         names='item2'
        />
        <AffiliateItem
         Text='FINDA'
         names='item3'
        />
        <AffiliateItem
         Text='닭형'
         names='item4'
        />
        <AffiliateItem
         Text='추맨세끼'
         names='item5'
        />
        <AffiliateItem
         Text='MALDEN'
         names='item6'
        />
        <AffiliateItem
         Text='닭의 도리'
         names='item7'
        />
        <AffiliateItem
         Text='런던 방앗간'
         names='item8'
        />
        <AffiliateItem
         Text='러브래빗'
         names='item9'
        />
        <AffiliateItem
         Text='마카올로지'
         names='item10'
        />
        <AffiliateItem
         Text='AIA'
         names='item11'
        />
        <AffiliateItem
         Text='Folder'
         names='item12'
        />
    </div>
  </section>
  )
}

export default Affiliate