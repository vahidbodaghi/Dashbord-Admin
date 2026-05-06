import React from 'react'
import { Link } from 'react-router'

export default function SidebarHeader() {
  return (
    <div className='text-center text-2xl border-b border-green-200 pb-5 text-gray-500'>
        <Link to="/" className='font-bold'>
         پنل مدیریت
        </Link>
     
    </div>
  )
}
