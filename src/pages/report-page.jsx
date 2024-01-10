import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import useGetDataCheck from "../hooks/useGetDataCheck";
import auth from "../utils/auth";

const LaporanPage = () => {
  const [laporan, setLaporan] = useState([]);

  const { isLoading } = useGetDataCheck(
    `${import.meta.env.VITE_ADDR_API}/reports`
  );
  useEffect(() => {
    isLoading
      ? toast.loading("Loading...", { id: "loader" })
      : toast.dismiss("loader");
  }, [isLoading]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_ADDR_API}/reports`,
          {
            headers: {
              Authorization: `Bearer ${auth.isAuthenticated()}`,
            },
          }
        );
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
          <table className="mb-4 border-collapse text-sm text-left text-gray-500 w-full mt-[30px] rounded-xl">
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
