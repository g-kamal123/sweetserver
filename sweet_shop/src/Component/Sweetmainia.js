import React, { useContext, useEffect, useState } from "react";
import { Storage } from "./Storage";
import classes from "./styles/Sweetmainia.module.css";
import { Alert, Drawer } from '@mui/material'
import { Modal } from '@mui/material'
import { useNavigate } from "react-router-dom";


function Sweetmainia() {
  const nav = useNavigate()
  const detail = useContext(Storage);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(800);
  const [draw,setDraw] = useState(false)
  const [modal, setModal] = useState(false);
  const [modalItem,setModalItem] = useState("")
  const [alert,setAlert] = useState(false)
  useEffect(()=>{
    detail.showsearch()
  },[])
  const filters = () => {
    const arr = document.querySelectorAll("input[type=checkbox]");
    let arr1 = [];
    for (let i = 0; i < 5; i++) {
      if (arr[i].checked === true) arr1.push(i);
    }
    let ord = document.getElementById("inc");
    let ord1 = document.getElementById("dec");
    let sequence;
    if (ord.checked) sequence = "0";
    if (ord1.checked) sequence = "1";
    detail.filterNow(arr1, min, max, sequence);
    console.log(arr1);
  };
  return (
    <>
    <div className={classes.sweetmania}>
      <div className={classes.filters}>
        <div className={classes.filtercontent}>
          <h2>filters</h2>
          <ul>
          <li>
              <input type="checkbox" id="all" onChange={filters} />
              <span>All</span>
            </li>
            <li>
              <input type="checkbox" id="bfst" onChange={filters} />
              <span>BreakFast</span>
            </li>
            <li>
              <input type="checkbox" id="birth" onChange={filters} />
              <span>Birthday</span>
            </li>
            <li>
              <input type="checkbox" id="sweet" onChange={filters} />
              <span>Sweets</span>
            </li>
            <li>
              <input type="checkbox" id="kulfi" onChange={filters} />
              <span>Other</span>
            </li>
          </ul>
          <h2>Price</h2>
          <input
            type="radio"
            name="order"
            id="inc"
            value="0"
            onClick={(event) => detail.orderfilter(event.target.value)}
          />
          <label>Low to high</label>
          <input
            type="radio"
            name="order"
            value="1"
            id="dec"
            onClick={(event) => detail.orderfilter(event.target.value)}
          />
          <label>Hight to low</label>
          <h2>Range</h2>
          <select
            onChange={(event) => {
              setMin(event.target.value);
              let ord = document.getElementById("inc");
              let ord1 = document.getElementById("dec");
              let sequence;
              if (ord.checked) sequence = "0";
              if (ord1.checked) sequence = "1";
              // console.log(sequence)
              detail.selectedPrice(event.target.value, max, sequence);
            }}
          >
            <option>Min</option>
            <option>0</option>
            <option>100</option>
            <option>200</option>
            <option>300</option>
            <option>400</option>
            <option>500</option>
            <option>600</option>
            <option>700</option>
          </select>
          <select
            onChange={(event) => {
              setMax(event.target.value);
              let ord = document.getElementById("inc");
              let ord1 = document.getElementById("dec");
              let sequence;
              if (ord.checked) sequence = "0";
              if (ord1.checked) sequence = "1";
              detail.selectedPrice(min, event.target.value, sequence);
            }}
          >
            <option>Max</option>
            <option>100</option>
            <option>200</option>
            <option>300</option>
            <option>400</option>
            <option>500</option>
            <option>600</option>
            <option>700</option>
            <option>800</option>
            <option>900</option>
            <option>1000</option>
          </select>
        </div>
      </div>
      <div className={classes.allproducts}>
        {detail.alldata &&
          detail.alldata.map((item) => (
            <div className={classes.prod} onClick={()=>{setModalItem(item)
              setModal(true)}}>
              <img src={item.image} alt="" />
              <p onClick={()=>{setModalItem(item)
            setModal(true)}}>
                <span>{item.name}</span>
                <span>&#8377;{item.price}/kg</span>
              </p>
              {/* <button onClick={() => detail.addToCartHandler(item)}>View Item</button> */}
            </div>
          ))}
      </div>
      <div>
      <div className={classes.off}>
      <i class="fa-solid fa-caret-left" onClick={()=>setDraw(true)}></i>
      <p>Flat 10% OFF</p>
      </div>
      </div>
    </div>
    <Drawer open={draw} onClose={()=>setDraw(false)} anchor='right' PaperProps={{sx : {height: '16.8rem',position:'absolute',top:'10rem'}}}>
      <div className={classes.draw}>
    <div className={classes.off1}>
      <i class="fa-solid fa-caret-right" onClick={()=>setDraw(false)}></i>
      <p>Flat 10% OFF</p>
    </div>
    <div className={classes.drawcontent}>
      <div>
      <h1>10% Off</h1>
      <h2>+ free delivery</h2>
      <span>*applicable only on first order</span>
      </div>
      <div className={classes.imgbtn}>
        <img src="https://imgmedia.lbb.in/media/2020/10/5f86c78f7ae9b945100593ba_1602668431993.png" alt=""/>
      </div>
    </div>
    </div>
    </Drawer>
    <Modal open={modal} onClose={() => setModal(false)}>
        <div className={classes.modal}>
            <div className={classes.content}>
              <div
                className={classes.closemodal}
                onClick={() => {setModal(false)
                setAlert(false)}}
              >
                &times;
              </div>
              <img
                src={modalItem.image}
                alt=""
              />
              <div className={classes.textcontent}>
                <p style={{width:
                '25vw'}}>{modalItem.desc}</p>
                <h3 style={{width:
                '25vw',margin:'0'}}>{modalItem.name}</h3>
                <h3 style={{width:
                '25vw',margin:'0'}}>&#8377;{modalItem.price}</h3>
                <Alert icon={false} severity="success">
                  {alert && <span>added to cart</span>}
                </Alert>
                <button onClick={() => {detail.addToCartHandler(modalItem)
                setAlert(true)
                }}>
                  add to cart
                </button>
                
                <button
                 onClick={()=>{
                  setAlert(false)
                  nav('/cart')}}
                 >Go to cart</button>
              </div>
            </div>
        </div>
      </Modal>
    </>
  );
}

export default Sweetmainia;
