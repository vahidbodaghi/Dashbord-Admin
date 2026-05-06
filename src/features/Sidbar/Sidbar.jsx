import React from 'react'
import SidebarHeader from './components/SidebarHeader'
import SidbarBody from "./components/SidbarBody"
import menus from "./../../data/menus"

export default function Sidbar() {
  return (
    <aside className='w-68 h-screen  z-10 bg-green-300 sticky top-0 border-l border-green-500 shadow-2xl pt-4'>
        <SidebarHeader/>
        <SidbarBody menus={menus}/>
      
    </aside>
  )
}
