import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import useGetDataCheck from "../hooks/useGetDataCheck";
import auth from "../utils/auth";

const CustomerPage = () => {
  const [customer, setCustomer] = useState([]);

  const { isLoading } = useGetDataCheck(
    `${import.meta.env.VITE_ADDR_API}/customer`
  );
  useEffect(() => {
    isLoading
      ? toast.loading("Loading...", { id: "loader" })
      : toast.dismiss("loader");
  }, [isLoading]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/customer`, {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setCustomer(res.customer))
      .catch(() => {
        toast.error("error database or session expire");
      });
  }, [customer]);

  return (
    <div className="w-full">
      <main className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
        <h1 className="p-4 font-raleway text-2xl font-semibold">Customer</h1>
        <form className="font-roboto px-6 mx-4 border rounded-lg bg-white max-lg:px-4 overflow-auto shadow-xl">
          <table className="mb-4 border-collapse text-sm text-left text-gray-500 w-full mt-[30px] rounded-xl">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  No
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  NIK
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  Name
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  Email
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  Phone
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {customer &&
                customer.map((item, index) => (
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
                      {item.nikCustomer}
                    </td>
                    <td
                      className="p-4 border-secondary-gray border border-b-2 border-opacity-20"
                      data-cell=""
                    >
                      {item.nameCustomer}
                    </td>
                    <td
                      className="p-4 border-secondary-gray border border-b-2 border-opacity-20"
                      data-cell=""
                    >
                      {item.emailCustomer}
                    </td>
                    <td
                      className="p-4 border-secondary-gray border border-b-2 border-opacity-20"
                      data-cell=""
                    >
                      {item.tlpnCustomer}
                    </td>

                    <td
                      className="p-4 border-secondary-gray border border-b-2 border-opacity-20"
                      data-cell=""
                    >
                      {item.statusId.nameStatus}
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

export default CustomerPage;
