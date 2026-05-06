

import Modal from '../../../components/common/Modal/Modal'
import { BiEdit } from 'react-icons/bi'

export default function EditProductIcon() {
    const Trigger = () => <button className='text-lg text-green-800 cursor-pointer'>
        <BiEdit className='text-xl'/>
    </button>
  return (
    <Modal title="تغییر جزییات محصول" Trigger={<Trigger/>}></Modal>
  )
}
