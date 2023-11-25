import React, { useState, useEffect } from "react";

const LaporanPage = () => {
  const [laporan, setLaporan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:2000/reports");
        const data = await response.json();
        setLaporan(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      <main className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
        <h1 className="p-4 font-raleway text-2xl font-semibold">Report</h1>
        <form className="font-roboto px-6 mx-4 border rounded-lg bg-white max-lg:px-4 overflow-auto shadow-xl">
          <table className="mb-4 border-collapse text-sm text-left text-gray-500 w-full mt-[30px] border-4 border-cyan-500 rounded-xl">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  No
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  Customer
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  Room
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  Status
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  Check In
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  Check Out
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  Booking
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  Payment Status
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left w-[210px] min-w-[210px]">
                  Option
                </th>
              </tr>
            </thead>
            <tbody>
              {laporan.map((item, index) => (
                <tr key={index}>
                  <td
                    className="p-4 border-secondary-gray border border-b-2 border-opacity-20"
                    data-cell=""
                  >
                    {index + 1}
                  </td>
                  <td
                    className="p-4 border-secondary-gray border border-b-2 border-opacity-20"
                    data-cell=""
                  >
                    {item.customer.nameCustomer}
                  </td>
                  <td
                    className="p-4 border-secondary-gray border border-b-2 border-opacity-20"
                    data-cell=""
                  >
                    {item.room.nameRoom}
                  </td>
                  <td
                    className="p-4 border-secondary-gray border border-b-2 border-opacity-20"
                    data-cell=""
                  >
                    {item.status.nameStatus}
                  </td>
                  <td
                    className="p-4 border-secondary-gray border border-b-2 border-opacity-20"
                    data-cell=""
                  >
                    {item.checkIn}
                  </td>
                  <td
                    className="p-4 border-secondary-gray border border-b-2 border-opacity-20"
                    data-cell=""
                  >
                    {item.checkOut}
                  </td>
                  <td
                    className="p-4 border-secondary-gray border border-b-2 border-opacity-20"
                    data-cell=""
                  >
                    {item.booking}
                  </td>
                  <td
                    className="p-4 border-secondary-gray border border-b-2 border-opacity-20"
                    data-cell=""
                  >
                    {item.payment.paymentStatus}
                  </td>
                  <td className="p-4 border-secondary-gray border border-b-2 border-opacity-20">
                    <button
                      type="button"
                      title="detail"
                      className="mr-1 py-1 px-5 bg-green-400 rounded-md hover:bg-hover-green"
                    >
                      <i className="ri-search-line text-white"></i>
                    </button>
                    <button
                      type="button"
                      title="hapus"
                      className="mr-1 py-1 px-5 bg-red-400 rounded-md hover:bg-hover-red"
                    >
                      <i className="ri-delete-bin-line text-white"></i>
                    </button>
                    <button
                      type="button"
                      title="edit"
                      className="py-1 px-5 bg-yellow-400 rounded-md hover:bg-hover-yellow"
                    >
                      <i className="ri-file-edit-line text-white"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </main>
    </div>
  );
};

export default LaporanPage;
