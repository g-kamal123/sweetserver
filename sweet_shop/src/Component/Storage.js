import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from './Data'
import {v4 as uuid} from 'uuid'

export const Storage = createContext()
export const Contxt = (props)=>{
    const [laddoo,setLaddoo] = useState([])
    const [barfi,setBarfi] = useState([])
    const [jamun,setJamun] = useState([])
    const [chhena,setChhena] = useState([])
    const [halwa,setHalwa] = useState([])
    const [cake,setCake] = useState([])
    const [kulfi,setKulfi] = useState([])
    const [salted,setSalted] = useState([])
    const [alldata,setAlldata] = useState([])
    const [cartarr,setCartarr] = useState([])
    const [show,setShow] = useState(false)
    const [srch,setsrch] = useState(false)
    const nav = useNavigate()
    const showsearch =()=>{
        setShow(true)
    }
    const Jamun =async()=>{
        const response = await api.get('/jamun')
        return response.data
    }
    const Chhena =async()=>{
        const response = await api.get('/chhena')
        return response.data
    }
    const Halwa = async()=>{
        const response = await api.get('/halwa')
        return response.data
    }
    const Cake = async()=>{
        const response = await api.get('/cake')
        return response.data
    }
    const Kulfi = async()=>{
        const response = await api.get('/kulfi')
        return response.data
    }
    const Salted = async()=>{
        const response = await api.get('/salted')
        return response.data
    }
    const Laddoo =async()=>{
        const response = await api.get('/laddoo')
        return response.data
    }
    const Barfi =async()=>{
        const response = await api.get('/barfi')
        return response.data
    }
    useEffect(()=>{
        const getdata =async()=>{
            const response = await api.get('/cart')
            setCartarr(response.data)
        }
        getdata()
    },[])
    useEffect(()=>{
        const getSalted = async()=>{
            const res = await Salted();
            setSalted(res)
        // setAlldata([...alldata,...res])
        }
        const getKulfi = async()=>{
            const res = await Kulfi();
            setKulfi(res)
        // setAlldata([...alldata,...res])
        }
        const getCake = async()=>{
            const res = await Cake();
            setCake(res)
        // setAlldata([...alldata,...res])
        }
        const getHalwa = async()=>{
            const res = await Halwa();
            setHalwa(res)
        // setAlldata([...alldata,...res])
        }
        const getChhena = async()=>{
            const res = await Chhena();
            setChhena(res)
        // setAlldata([...alldata,...res])
        }
        const getJamun = async()=>{
            const res = await Jamun();
            setJamun(res)
        // setAlldata([...alldata,...res])
        }
        const getBarfi = async()=>{
            const res = await Barfi();
            setBarfi(res)
        // setAlldata([...alldata,...res])
        }
        const getLaddoo = async()=>{
            const res=await Laddoo();
            setLaddoo(res)
        // setAlldata([...alldata,...res])
        }
        getLaddoo()
        getBarfi()
        getJamun()
        getChhena()
        getHalwa()
        getCake()
        getKulfi()
        getSalted()
    },[])
    useEffect (()=>{
        setAlldata([...laddoo,...barfi,...jamun,...chhena,...halwa,...cake,...kulfi,...salted])
    },[laddoo,barfi,jamun,chhena,halwa,cake,kulfi,salted])
    const removeSearch =()=>{
        setShow(false)
    }
    const searchItem =(val)=>{
        const arr = laddoo.filter((item)=>item.name.includes(val))
        const arr1 = barfi.filter((item)=>item.name.includes(val))
        setAlldata([...arr,...arr1])
        setsrch(true)
    }
    const filterNow =(val,min,max,ord)=>{
        console.log(max)
        if(val.length===0){
            setAlldata([...laddoo,...barfi])
            return
        }
        let arr =[[...laddoo,...barfi,...jamun,...chhena,...halwa,...cake,...kulfi],[...halwa],[...cake,...kulfi],[...laddoo,...barfi,...chhena,...jamun],[...salted]]
        // console.log(arr)
        let arr1 =[]
        for(let i=0;i<val.length;i++){
            arr1 = [...arr1,...arr[val[i]]]
        }
        arr1 = arr1.filter((item)=>item.price>=min)
        arr1 = arr1.filter((item)=>item.price<=max)
        if(ord==='0')
        arr1.sort(asc)
        if(ord==='1')
        arr1.sort(desc)
        // console.log(arr1)
        setAlldata(arr1)
    }
    const asc = (a, b) => {
        return Number(a.price) - Number(b.price);
    };
    const desc = (a, b) => {
        return Number(b.price) - Number(a.price);
    };
    const orderfilter =(val)=>{
        let arr = [...alldata]
        if(val==='0')
        arr.sort(asc)
        else 
        arr.sort(desc)
        setAlldata(arr)
    }
    const selectedPrice =(min,max,ord)=>{
        let arr =[]
        if(!srch)
        arr = [...laddoo,...barfi]
        else
        arr = [...alldata]
        arr = arr.filter((item)=>item.price>=min)
        arr = arr.filter((item)=>item.price<=max)
        if(ord==='0')
        arr.sort(asc)
        if(ord==='1')
        arr.sort(desc)
        setAlldata(arr)
    }
    const itemnav = async(val)=>{
        const response = await api.get(`/${val.toLowerCase()}`)
        console.log(response.data)
        setAlldata(response.data)
        showsearch()
        nav('/sweetmania')
    }
    const addToCartHandler =async(val)=>{
        const res = await api.get('/cart',{
            params:{
                prodId:val.id
            }
        })
        // console.log(res.data[0].id)
        if(res.data.length===0){
            const toAdd={
                id:uuid(),
                prodId:val.id,
                name:val.name,
                image:val.image,
                price:val.price,
                quantity:1
            }
            const response = await api.post('/cart',toAdd)
        setCartarr([response.data,...cartarr])
        }
        else{
            var id = res.data[0].id
            // console.log(id)
        var quantity = res.data[0].quantity + 1
        const toAdd={
            id:id,
            prodId:val.id,
            name:val.name,
            image:val.image,
            price:val.price,
            quantity:quantity
        }
            await api.put(`/cart/${id}`,toAdd)
            // console.log(response.data)
            const response = await api.get('/cart')
            setCartarr(response.data)
        }
    }
    const incrementHandler =async(val)=>{
        var id = val.id
            // console.log(id)
        var quantity = val.quantity + 1
        const toAdd={
            id:id,
            prodId:val.id,
            name:val.name,
            image:val.image,
            price:val.price,
            quantity:quantity
        }
            await api.put(`/cart/${id}`,toAdd)
            // console.log(response.data)
            const response = await api.get('/cart')
            setCartarr(response.data)
    }
    const decrementHandler = async(val)=>{
        var id = val.id
            // console.log(id)
            if(val.quantity>1)
        var quantity = val.quantity - 1
        else quantity = val.quantity
        const toAdd={
            id:id,
            prodId:val.id,
            name:val.name,
            image:val.image,
            price:val.price,
            quantity:quantity
        }
            await api.put(`/cart/${id}`,toAdd)
            // console.log(response.data)
            const response = await api.get('/cart')
            setCartarr(response.data)
    }
    const deleteCartItem =async(val)=>{
        await api.delete(`/cart/${val.id}`)
        const response = await api.get('/cart')
        setCartarr(response.data)
    }
    const del = async(val)=>{
        await api.delete(`/cart/${val}`)
    }
    const delCart =async()=>{
        // console.log('cart')
        const arr = await api.get('/cart')
        let arr1 = arr.data.map((item)=>item.id)
        arr1.map((item)=>del(item))
        setCartarr([])
    }
    return(
        <Storage.Provider value={{show:show,showsearch:showsearch,alldata:alldata,removeSearch:removeSearch,searchItem:searchItem,filterNow:filterNow,orderfilter:orderfilter,selectedPrice:selectedPrice,itemnav:itemnav,addToCartHandler:addToCartHandler,cartarr:cartarr,incrementHandler:incrementHandler,decrementHandler,deleteCartItem:deleteCartItem,delCart:delCart}}>
            {props.children}
        </Storage.Provider>
    )
}