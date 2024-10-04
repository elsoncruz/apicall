import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function LOgin() {
    const [loginemail,setLoginEmail]=useState('')
    const [loginpass,setLoginpass]=useState('')
    const [arr,setArr]=useState([])
    const [go,setGo]=useState(false)
    const [show,setShow]=useState(true)
if(loginemail !=0 && loginpass !=0){
   axios.get(`http://localhost:9000/user?email=${loginemail}&password=${loginpass}`)
        .then(res=>setArr(res.data))
        .catch(e=>console.log(e))
}
   const getallapi=()=>{
        console.log(arr)
        if(arr.length !== 0){
            setGo(true)
        }else{
            setShow(false)
            setTimeout(()=>{
                setShow(true)
            },2000)
        }
    }
  return (
  <>
  {go  ? <div className='h-screen w-full'>
    <h1 className='text-[100px] '>Hello,{arr.map(item=>item.name)}</h1> 
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