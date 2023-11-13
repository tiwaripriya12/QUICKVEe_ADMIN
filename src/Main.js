import React from 'react'

import { Route, Routes  , Navigate} from "react-router-dom";


const Main = () => {
  return (
    <>
    <Routes>
      <Route exact path="/" element={  <Home  /> } />
        <Route exact path="/forgotpass" element={<MainAuthentication visible={"forgotpass"} />} />
       
        
      </Routes>
    
    
    
    </>
  )
}

export default Main