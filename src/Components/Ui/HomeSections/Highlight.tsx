import React from 'react'
import Swiper from '../Swiper'
import { MdOutlineArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Highlight= (data:any ) => {
  
  if (data?.data?.length > 0) {
    return (

      <div className='ProductSection'>

          <MdOutlineArrowBackIos/>
        <div className='Cards'>
          <Swiper data={data?.data} />
        </div>
          <MdArrowForwardIos/>

      </div>
    )
  }
  else{
    return null
  }
}

export default Highlight