import { Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import LandingPage from './LandingPage'
import Navbar from './Navbar'
import Sweetmainia from './Sweetmainia'

function Shop() {
  const [modal,setModal] = useState(false)
  useEffect(()=>{
    setTimeout(()=>setModal(true),4000)
  },[])
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/sweetmania' element={<Sweetmainia />}/>
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Modal open={modal} onClose={()=>setModal(false)}>
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            backgroundColor: "white",
            padding: "2rem 1rem",
          }}>
            <h1 onClick={()=>setModal(false)} style={{textAlign:'right',cursor:'pointer',fontSize:'1.8rem',margin:'0',padding:'0'}}>&times;</h1>
            <img src='https://d168jcr2cillca.cloudfront.net/uploadimages/coupons/10155-SweetKhana_640x320_Banner.jpg' alt=''/>
            
          </div>
        </Modal>
        <div className='scroll'>
      <i className="fa-solid fa-angles-up" onClick={()=>{window.scrollTo({top:0,left:0,behavior:'smooth'})}}></i>
      </div>
    </div>
  )
}

export default Shop