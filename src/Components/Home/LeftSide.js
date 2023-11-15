import React from 'react'
import DashboardMain from '../Dashboard/DashboardMain'
import MainOrder from './../Orders/MainOrder';


const LeftSide = ({visible}) => {
  return (
  <>
  <div className='width-[80%]'>
   
    { visible ==="dashboard" &&  <DashboardMain />}
    { visible ==="order" &&  <MainOrder />}
 
  </div>


  </>
  )
}

export default LeftSide