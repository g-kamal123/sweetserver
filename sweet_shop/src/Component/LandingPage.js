import React, { useContext, useEffect } from 'react'
import Carousell from './Carousell'
import CustomerSay from './CustomerSay'
import ItemNavs from './ItemNavs'
import Specials from './Specials'
import { Storage } from './Storage'

function LandingPage() {
  const detail = useContext(Storage)
  useEffect(()=>{
    detail.removeSearch()
  },[])
  return (
    <div>
        <ItemNavs />
        <Carousell />
        <Specials />
        <CustomerSay />
    </div>
  )
}

export default LandingPage