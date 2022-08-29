import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './styles/Specials.module.css'

function Specials() {
  const nav = useNavigate()
  return (
    <div className={classes.specials}>
        <h1>Our Specials</h1>
        <div className={classes.specialprod}>
            <img src='https://www.dadus.co.in/media/catalog/product/cache/a75c14610ad2258f4e58b13f2a9e2150/g/h/ghee_mysore_pak.png' alt=''/>
            <div className={classes.specialprodcontent}>
                <h2>Mysore Pak</h2>
                <p>Mysore Pak is a sweet dish from the state of Karnataka, prepared especially during diwali. Besan, ghee, sugar and water mixed together to form soft pieces.</p>
                <p className={classes.tagline}>Your daily dose of sweet is just one click away</p>
                <button onClick={()=>nav('/sweetmania')}>View More</button>
            </div>
        </div>
        <div className={classes.specialprod1}>
            <img src='https://static.toiimg.com/thumb/60291237.cms?imgsize=736214&width=800&height=800' alt=''/>
            <div className={classes.specialprodcontent}>
                <h2>Kheer Kadam</h2>
                <p>A traditional Bengali recipe made with the enticing combination of khoya, milk, red edible colour, green cardamom powder and sugar.</p>
                <p className={classes.tagline}>Your Sweet packet is just 30 min away from your door </p>
                <button onClick={()=>nav('/sweetmania')}>View More</button>
            </div>
        </div>
    </div>
  )
}

export default Specials