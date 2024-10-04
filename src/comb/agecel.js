import React, { useEffect, useState } from 'react'

function Ages() {
    const [Name,setName]=useState('')
    const [year,setYear]=useState()
    const [age,setAge]=useState()
    const [show,setShow]=useState(false)
    useEffect(()=>{
        const allyear = new Date()
        const y=allyear.getFullYear()
        setAge(year !=0? y - year:'')
    },[year])
  return (
    <div className='flex flex-col p-6'>
        <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='Enter your name'/>
        <input type='text' onChange={(e)=>setYear(e.target.value)} placeholder='Year'/>
        <input readOnly type='text' value={age} />
        {console.log(Name)}
        {console.log(age)}
        {console.log(year)}
    </div>
  )
}

export default Ages