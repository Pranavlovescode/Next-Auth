'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Dashboard() {
    const router = useRouter()
    const handleLogout = async()=>{
        try {
            const response = await axios.get('/api/users/logout')
            console.log(response.data);
            router.push('/')
        } catch (error: any) {
            console.log(error.response.data);
        }
    }
  return (
    <main className='text-center align-middle'>
        <h1 className='font-bold text-3xl'>Dashboard</h1>
        <button onClick={handleLogout} className='bg-green-500 p-2 rounded'>Logout</button>
    </main>
  )
}
