import React from 'react'

import GridSectionA from '../GridSectionA';
import ImageSlider from '../ImageSlider';
import Actors from '../Actors';
import Affiliate from '../Affiliate';
function Home() {
  return (
    <>
      <ImageSlider/>
      
      <GridSectionA/>
      <Actors/>
      <Affiliate/>
    </>
  )
}

export default Home;