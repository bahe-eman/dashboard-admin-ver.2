import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import reBooking from '../utils/rebbooking'

export default function Rebook() {
  const navigate = useNavigate()
  const param = useParams()
  const id = param.id

  const handleSubmit = async (e) => {
    e.preventDefault()
    await reBooking(id, e.target.checkOut.value, e.target.day.value)
    navigate(-1)
  }

  return (
    <>
      <div className='w-full lg:w-[calc(100vw-220px)] space-y-4'>
        <h1 className='text-2xl font-semibold'>Re Booking</h1>
        <form
          onSubmit={handleSubmit} // Set the onSubmit handler directly on the form
          className='font-roboto px-4 mx-4 border rounded-lg bg-white max-md:text-sm overflow-auto'
        >
          <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 m-5'>
            <div className='md:col-span-3'>
              <label>Check out</label>
              <input
                name='checkOut'
                required
                type='date'
                className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                placeholder='name category'
              />
            </div>
            <div className='md:col-span-3'>
              <label>day</label>
              <input
                name='day'
                required
                type='text'
                className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                placeholder='day'
              />
            </div>
          </div>
          {/*footer*/}
          <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
            <button
              className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
              type='button'
              onClick={() => navigate('/checkout')}
            >
              back
            </button>
            <button
              className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
              type='submit'
            >
              re book
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
