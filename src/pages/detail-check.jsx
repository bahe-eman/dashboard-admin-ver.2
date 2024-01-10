import { Link, useLocation, useParams } from 'react-router-dom'
import useGetDataCheck from '../hooks/useGetDataCheck'

const DetailCheckin = () => {
  const param = useParams()
  const id = param.id
  const location = useLocation().pathname
  const out = location.includes('out')
  const { data } = useGetDataCheck(`${import.meta.env.VITE_ADDR_API}/check/${out ? 'out' : 'in'}/${id}`)

  return (
    <div className='w-full'>
      <main className='bg-primary-gray grow overflow-y-auto'>
        <div className='p-2 h-[calc(100vh-67.33px)]'>
          <div className='mb-4 flex'>
            <div>
              <Link to={out ? '/checkout' : '/checkin'}>
                <button className='block mr-5'>
                  <i className='ri-arrow-left-line text-xl'></i>
                </button>
              </Link>
            </div>
            <h1 className='text-2xl font-semibold'>detail Check {out ? 'Out' : 'In'}</h1>
          </div>
          {data && (
            <>
              <div className='grid gap-8 grid-cols-1 md:grid-cols-6 m-5 text-lg'>
                <div className='md:col-span-3'>
                  <p>
                    <span className='font-semibold'>Room Category :</span> {data.data?.room?.nameRoom}
                  </p>
                </div>
                <div className='md:col-span-3'>
                  <p>
                    <span className='font-semibold'>Floor :</span> {data.data?.room?.floorId}
                  </p>
                </div>
                <div className='md:col-span-3'>
                  <p>
                    <span className='font-semibold'>Number Room :</span> {data.data?.room?.numberRoom}
                  </p>
                </div>
                <div className='md:col-span-3'>
                  <p>
                    <span className='font-semibold'>total harga :</span> {data.data?.totalPayment}
                  </p>
                </div>
                <div className='md:col-span-3'>
                  <p>
                    <span className='font-semibold'>untuk berapa orang :</span> {data.data?.people}
                  </p>
                </div>
                <div className='md:col-span-3'>
                  <p>
                    <span className='font-semibold'>Checkin :</span> {data.data?.checkIn}
                  </p>
                </div>
                <div className='md:col-span-3'>
                  <p>
                    <span className='font-semibold'>Checkout :</span> {data.data?.checkOut}
                  </p>
                </div>
                <div className='md:col-span-3'>
                  <p>
                    <span className='font-semibold'>Jumlah Hari :</span> {data.data?.day}
                  </p>
                </div>
              </div>
              <h3 className='text-lg font-semibold mt-5'>Customer</h3>
              <div className='grid gap-8 grid-cols-1 md:grid-cols-6 m-5 text-lg'>
                <div className='md:col-span-3'>
                  <p>
                    <span className='font-semibold'>Nik :</span> {data.data?.customer?.nikCustomer}
                  </p>
                </div>
                <div className='md:col-span-3'>
                  <p>
                    <span className='font-semibold'>Name :</span> {data.data?.customer?.nameCustomer}
                  </p>
                </div>
                <div className='md:col-span-3'>
                  <p>
                    <span className='font-semibold'>No Tlp :</span> {data.data?.customer?.tlpnCustomer}
                  </p>
                </div>
                <div className='md:col-span-3'>
                  <p>
                    <span className='font-semibold'>Email:</span> {data.data?.customer?.emailCustomer}
                  </p>
                </div>
                <div className='md:col-span-3'>
                  <p>
                    <span className='font-semibold'>Address:</span> {data.data?.customer?.addressCustomer}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
export default DetailCheckin
