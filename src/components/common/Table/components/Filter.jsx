import { HiFilter } from 'react-icons/hi'

export default function Filter() {
  return (
    <button className='flex items-center bg-green-100 rounded-2xl py-2 px-3 cursor-pointer text-sm'>
        <HiFilter className='text-lg'/>
        <span>فیلتر</span>
    </button>
  )
}
