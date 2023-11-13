import React from 'react'
import Welcome from '../Dashboard/Welcome'
import NetSales from './../Dashboard/NetSales';
import BarChart from '../Dashboard/BarChart';

const LeftSide = () => {
  return (
  <>
  
  <Welcome />
  <NetSales />
  {/* <BarChart /> */}
  
  </>
  )
}

export default LeftSide