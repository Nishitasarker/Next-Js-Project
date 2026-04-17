'use client'

import React from 'react'
import Link from 'next/link'
import { BiSolidError } from "react-icons/bi";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        
        {/* icon here */}
        <div className="flex justify-center mb-4">
          <div className="rounded-full  ">
            <BiSolidError className='text-8xl text-red-500' />
          </div>
        </div>

        <h2 className="mb-2 text-3xl font-bold text-gray-900">Page Not Found!</h2>

        <div className="flex justify-center gap-4">
          <Link 
            href="/"
            className="btn btn-success"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}