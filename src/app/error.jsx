'use client'

import React, { useEffect } from 'react'
import { BiSolidError } from "react-icons/bi";


export default function Error({ error, reset }) {
  
  useEffect(() => {
      console.error(error)
  }, [error])

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
       
       {/* icon here */}
        <div className="flex justify-center mb-4">
          <div >
           <BiSolidError className='text-8xl text-red-500' />
          </div>
        </div>

        <h2 className="mb-2 text-3xl font-bold text-gray-900">Something went wrong!</h2>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => window.location.href = '/'}
            className="btn btn-success"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  )
}