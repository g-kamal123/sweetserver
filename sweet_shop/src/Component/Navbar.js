import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Storage } from './Storage'
import classes from './styles/Navbar.module.css'

function Navbar() {
    const [animation,setanimation] = useState(false)
    const detail = useContext(Storage)
  return (
    <>
    <nav className={classes.navbar}>
        <Link to='/'><img src='https://m.media-amazon.com/images/S/abs-image-upload-na/1/AmazonStores/A21TJRUUN4KGV/d737e71d0c19943f08d74ec1be93923e.w3600.h1080.png' alt='' onClick={detail.removeSearch}/></Link>
        <div className={classes.srch}>
        <div className={animation? classes.act:classes.inact}>
          {detail.show && <div className={`${classes.srchicon} ${animation? classes.act:classes.inact}`} onClick={()=>{setanimation(true)
         }} >
        <i class="fa fa-search" aria-hidden="true" ></i>
        </div>}
        </div>
        <div className={animation? classes.active : classes.notactive}>
    <input id='focus' onChange={(event)=>detail.searchItem(event.target.value)}/>
    <span onClick={()=>setanimation(false)}>&times;</span>
    </div>
        <ul>
            <li onClick={()=>detail.showsearch()}>
              <NavLink to='/sweetmania'>Sweetmania</NavLink>
            </li>
            <li><NavLink to='/cart'>Cart({detail.cartarr.length})</NavLink></li>
        </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar