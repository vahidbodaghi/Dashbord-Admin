
import { HiEye } from 'react-icons/hi2'
import Modal from '../../../components/common/Modal/Modal'

export default function ChangeVisibiltyIcon() {
    const Trigger = () => <button className='text-lg text-green-600 cursor-pointer'>
            <HiEye className='text-xl'/>
        </button>
  return (
    <Modal title="تغییر وضعیت انتشار" Trigger={<Trigger/>}></Modal>
  )
}
