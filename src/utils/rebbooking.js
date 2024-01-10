import auth from './auth'

const reBooking = async (idTransaction, checkout, day) => {
    try {
    const res = await fetch(`${import.meta.env.VITE_ADDR_API}/check/out/${idTransaction}` , {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.isAuthenticated()}`,
        },
    })
    const curent = await res.json()
    console.log(curent.data)
    const restReports = await fetch(`${import.meta.env.VITE_ADDR_API}/reports` , {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.isAuthenticated()}`,
        },
    })
    const reports = await restReports.json()
    console.log(reports.data.filter((report) => report.idTransaction === idTransaction))
    const data = {
        idCustomer : curent.data.customer.idCustomer,
        roomId : curent.data.roomId,
        emailCustomer : curent.data.customer.emailCustomer,
        checkIn: curent.data.checkOut,
        checkOut: new Date(checkout),
        day: day,
        people: curent.data.people,
        statusPayment: 1,
        totalPayment: curent.data.totalPayment,
    } 
    const booking  = await fetch(`${import.meta.env.VITE_ADDR_API}/booking`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.isAuthenticated()}`,
        },
        body: JSON.stringify(data),
    })
    const bookingData = await booking.json()
    await fetch(`${import.meta.env.VITE_ADDR_API}/check/out/${idTransaction}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.isAuthenticated()}`,
        },
    })
    return bookingData
    
    } catch (err) {
        console.log(err)
    }    
}

export default reBooking