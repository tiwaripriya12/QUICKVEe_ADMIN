import React from 'react'
import DashboardMain from '../Dashboard/DashboardMain'
import MainOrder from './../Orders/MainOrder';
import MainProduct from '../Products/MainProduct';
import MainPurchase from '../PurchaseOrders/MainPurchase';


const LeftSide = ({visible}) => {
  return (
  <>
  <div className='width-[80%]'>
   
    { visible ==="dashboard" &&  <DashboardMain />}
    { visible ==="order" &&  <MainOrder />}
    { visible ==="category" && <MainProduct />}
    { visible ==="purchase-data" && <MainPurchase />}
 
  </div>


  </>
  )
}

export default LeftSide