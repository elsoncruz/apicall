import axios from 'axios'
import React, {useLayoutEffect, useState} from 'react'
import { BiUser } from 'react-icons/bi'
import { FaXmark } from 'react-icons/fa6'
import { RiReactjsFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function LOgin() {
    const [loginemail,setLoginEmail]=useState('')
    const [loginpass,setLoginpass]=useState('')
    const [arr,setArr]=useState([])
    const [go,setGo]=useState(false)
    const [show,setShow]=useState(true)
    const [showlogin,setShowlogin]=useState(true)

useLayoutEffect(()=>{
    axios.get(`http://localhost:9000/user`)
    .then(res=>{
        const y =res.data
        const x =y.filter(item=>item.email === localStorage.getItem("email") && item.password === localStorage.getItem("pass"))
        if(x.length >0){
            setArr(x)
            setGo(true)
        }
    })
    .catch(e=>console.log(e)) 
},[])
if(loginemail.length !== 0 && loginpass.length !== 0){
    axios.get(`http://localhost:9000/user?email=${loginemail}&password=${loginpass}`)
         .then(res=>setArr(res.data))    
         .catch(e=>console.log(e))
 }
const getallapi=()=>{
  
        if(arr.length !== 0){
            setGo(true)
        }else{
            setShow(false)
            setTimeout(()=>{
                setShow(true)
            },2000)
        }
        localStorage.setItem("email",loginemail)
        localStorage.setItem("pass",loginpass)
    }
    const logout=()=>{
        setGo(false)
        localStorage.clear("email")
        localStorage.clear("pass")
    }
  return (
  <>
  {go  ? <div className='h-screen w-full'>
    <div className='flex justify-between shadow-2xl p-4'>
    <div className='flex items-center'>
        <RiReactjsFill size={30} className='bg-black text-white rounded-full'/>
        <h1 className='text-[25px] select-none'>Hi..{arr.map(item=>item.name)}</h1> 
    </div>
   {showlogin?<BiUser onClick={()=>setShowlogin(false)} size={40} className='bg-black hover:scale-90 cursor-pointer rounded-full text-white p-2'/>:
    <BiUser onClick={()=>setShowlogin(true)} size={40} className='bg-black hover:scale-90 cursor-pointer rounded-full text-white p-2'/>} 
    </div>
    <div className={`bg-gray-50 select-none  fixed right-3 mt-2 rounded-2xl ${!showlogin?'h-[450px] border-2':'h-0'} w-[300px]  overflow-hidden`}>
        <div className='flex justify-end m-5'>
             <FaXmark onClick={()=>setShowlogin(true)} size={30} className='rotate-[135deg] hover:rotate-0 duration-500 cursor-pointer text-gray-500'/>
        </div>
        {arr.map((item,i)=>
        <div key={i} className='flex flex-col gap-2 items-center'>
            <img src='https://th.bing.com/th/id/OIP.dQZ_vqpyupxQ3AHa3hN6lgHaFe?rs=1&pid=ImgDetMain' alt='jhbjh' className='w-28 h-28 rounded-full'/>
            <h1 className=' font-bold text-[20px]'>{item.name}</h1>  
            <div className='bg-gray-100 gap-3 flex flex-col p-5 rounded-2xl'>
                <h1 className=''>name : {item.name}</h1>    
                <h1>email : {item.email}</h1>
                <h1>phone no : {item.phone}</h1>
                <div className='flex justify-center'>
                    <button onClick={logout} className='bg-red-500 text-white rounded-full w-20'>Logout</button>
                </div>
            </div>
        </div>)}
    </div>
    </div>
    :
    <div className=' overflow-hidden select-none'>
       {show?"":
       <div className=' flex justify-center'>
            <h1 className='text-white bg-red-500 p-5 rounded-b-xl flex text-[min(3vh,3vw)] items-center h-10'>&#128530;first create a accout (or) email, password wrong!</h1>
        </div>
       } 
    <div className='flex justify-center h-screen'>
        <div className='flex flex-col h-96  w-[min(80vw,90vh)]  backdrop-blur-3xl p-8 shadow-2xl border-w gap-6 items-center rounded-2xl mt-[min(30vw,25vh)]'>
            <h1 className='text-[30px] font-bold'>Login</h1>
            <input onChange={(e)=>setLoginEmail(e.target.value)} className={`w-[min(70vw,40vh)] h-10 p-3 rounded-full placeholder:p-3 shadow-2xl outline-none text-[20px] border`} type='email' placeholder='Enter email'/>
            <input onChange={(e)=>setLoginpass(e.target.value)} className='w-[min(70vw,40vh)] h-10 p-3 rounded-full placeholder:p-3 shadow-2xl outline-none text-[20px] border' type='password' placeholder='Enter password'/>
            <button onClick={()=>getallapi()} className='bg-blue-500 text-white mt-3 hover:scale-95 rounded-full w-[min(60vw,20vh)] h-[min(20vw,6vh)] text-[min(8vw,3vh)]'>login</button>
            <div className='flex'>
                <p>you don't have accout?</p>
                <Link to='/create' className='text-blue-500 underline'>create accout</Link>
            </div>
        </div>
    </div>
</div>
  }
  </>  
  )
}

export default LOgin