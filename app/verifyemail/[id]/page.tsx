'use client'
import axios from 'axios';
import React, { useState } from 'react'

export default function VerifyEmail({params}:any) {
  const [msg, setMsg] = useState('')
  const verifyEmail = async()=>{
    const reponse = await axios.post('/api/users/verifyemail', {token:params.id})
    console.log(reponse.data);
    setMsg(reponse.data.message)
  }
  console.log(params.id);
  return (
    <main className='text-center'>
      <button onClick={verifyEmail} className='bg-blue-500 p-2 rounded'>Verify Email</button>
      <h1 className='text-green-500'>{msg}</h1>
    </main>
  )
}
