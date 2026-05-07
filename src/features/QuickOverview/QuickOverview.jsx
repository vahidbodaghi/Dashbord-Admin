
import LastProducts from './components/LastProducts'
import LastUsers from './components/LastUsers'

export default function QuickOverview() {
  return (
    <div className='grid grid-cols-5 gap-5 space-y-10 *:p-5 *:border *:border-green-400  *:rounded-lg *:shadow mt-15'>
        <LastProducts/>
        <LastUsers/>
      
    </div>
  )
}
