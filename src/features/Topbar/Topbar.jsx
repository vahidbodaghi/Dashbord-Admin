import React from 'react'
import SearchInput from './components/SearchInput'
import Profile from './components/Profile'

export default function Topbar() {
  return (
    <div className='flex justify-between items-center bg-green-300 py-4 shadow-2xl border-b border-green-500'>
      <div>
        <SearchInput/>
      </div>
      <div>
        <Profile/>
      </div>
      

    </div>
  )
}
