import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link ,useNavigate} from 'react-router-dom'

function APITRY() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('+91')
    const [pass,setPass]=useState('')
    const [vali,setVali]=useState(false)
    const [apires,setApires]=useState([])
    const [popup,setPopuo]=useState(false)
    const [sucessfully,setSucessfully]=useState(false)

const navigate = useNavigate()
axios.get(`http://localhost:9000/user?email=${email}&name=${name}`)
    .then(res=>setApires(res.data))
    .catch(e=>console.log(e))
  
const handClick=()=>{  
setTimeout(()=>{
        setPopuo(false)
    },1500)
    if (name.length === 0 ||!name.length >2 || email.length === 0 ||!email.endsWith('@gmail.com') || phone.length === 0 || !phone.startsWith('+91') || pass.length === 0) {
        return setVali(true)
    }
    if(apires.length !== 0){
        return setPopuo(true)
     }
    
    const data ={
        id:3,
        name:name,
        email:email,
        phone:phone,
        password:pass,
    }
    axios.post("http://localhost:9000/user",data)
    .then(res=>console.log(res.data))
    .catch(e=>console.log(e))
    setEmail('')
    setName('')
    setPass('')
    setPhone('+91')
    setVali(false)
    setSucessfully(true)
    setTimeout(()=>{
        navigate('/')
    },2000)
}
   
  return (
    <div className=' select-none'>
       <div style={{backgroundImage:'url(https://t3.ftcdn.net/jpg/05/24/14/44/360_F_524144420_kAYcOWuld4q0ggrzc4ObD1CFMtr8ELk5.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className='flex justify-center h-screen w-[min(80vh,)]'>
        <div className='flex flex-col items-center'>
           <div className={`bg-red-500 ${popup?'duration-500':'h-0 duration-500'} w-full  flex justify-center rounded-b-2xl items-center overflow-hidden`}>
                <h1 className='text-[min(12px,20px)] text-white font-bold'>&#128517;user already exists</h1>
           </div>
           <div className={`bg-blue-500 ${sucessfully?'duration-500':'h-0 duration-500'} w-full  flex justify-center rounded-b-2xl items-center overflow-hidden`}>
                <h1 className='text-[min(12px,20px)] text-white font-bold'>&#128522; accout sucessfully created</h1>
           </div>
            <div className='flex flex-col h-[450px] w-[min(80vw,150vh)] backdrop-blur-3xl p-2 xl:p-8 shadow-2xl border-w gap-5 xl:gap-10 items-center rounded-2xl mt-[min(20vw,19vh)] '>
            <h1 className='text-[min(8vw,5vh)] font-bold'>Create Account</h1>
            <div className='flex gap-4 xl:flex-row flex-col'>
                <input onChange={(e)=>setName(e.target.value)} className={`w-[min(60vh,60vw)] h-10 p-3 ${vali && name.length < 3?'border-red-500':''} rounded-full placeholder:p-3 shadow-2xl outline-none text-[20px] border`} min={5} max={20} type='text' value={name} placeholder='UserName'/>
                <input onChange={(e)=>setEmail(e.target.value)} className={`w-[min(60vh,60vw)] h-10 p-3 ${vali && !email.endsWith('@gmail.com')?'border-red-500':''} rounded-full placeholder:p-3 shadow-2xl outline-none text-[20px] border`} type='text' value={email} placeholder='Enter Email'/>
            </div>
            <div className='flex gap-4 xl:flex-row flex-col'>
                <input onChange={(e)=>setPass(e.target.value)} className={`w-[min(60vh,60vw)] h-10 p-3 ${vali && pass.length <4 ?'border-red-500':''} rounded-full placeholder:p-3 shadow-2xl outline-none text-[20px] border`} type='password' value={pass} placeholder='Password'/>
                <input onChange={(e)=>setPhone(e.target.value)} className={`w-[min(60vh,60vw)] h-10 p-3 ${vali && phone.length <13 ?'border-red-500':''} rounded-full placeholder:p-3 shadow-2xl outline-none text-[20px] border`} type='text' value={phone} maxLength={13} placeholder='Phone no +91'/>
            </div>
            <button onClick={handClick} className='bg-blue-500 text-white mt-3 rounded-full hover:scale-95 w-[min(60vw,20vh)] h-[min(20vw,6vh)] text-[min(8vw,3vh)]'>Create</button>
            <div className='flex'>
                <p>you have accout?</p>
                <Link to='/' className='text-blue-500 underline'>login page</Link>
            </div>
            </div>
            
        </div>
       </div>
    </div>
  )
}

export default APITRY