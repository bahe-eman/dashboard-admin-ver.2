import { useEffect } from "react";
import useGetDataCheck from "../hooks/useGetDataCheck";
import TableRowCheck from "../Components/check/TableRowCheck";
import toast from "react-hot-toast";
import auth from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function CheckinKamarPage() {
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useGetDataCheck(
    `${import.meta.env.VITE_ADDR_API}/check/out`
  );
  const handleDetail = (id) => {
    navigate(`/checkout/${id}`);
  };
  useEffect(() => {
    isLoading
      ? toast.loading("Loading...", { id: "loader" })
      : toast.dismiss("loader");
  }, [isLoading]);
  const handleCheck = (id) => {
    fetch(`${import.meta.env.VITE_ADDR_API}/check/out/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        toast.success('check out success')
        refetch()
      })
  }
  
  return (
    <div className="w-full">
      <main className="bg-primary-gray grow overflow-y-auto">
        <div className="p-2 h-[calc(100vh-67.33px)]">
          <div className="mb-4">
            <h1 className="text-2xl font-semibold">Check Out</h1>
          </div>
          <div className="p-6 m-3 bg-white">
            <div className="flex p-2 mb-2 justify-end w-full">
              <div>
                <input
                  type="search"
                  placeholder="search"
                  className="px-2 py-1 border border-secondary-gray rounded-full focus:outline-secondary-gray"
                />
              </div>
            </div>
            <table className="border-collapse  rounded-lg text-sm text-left text-gray-500 bg-white w-full">
              <thead className="text-xs text-gray-700 bg-gray-50 uppercase">
                <tr className="odd:bg-zinc-400 odd:bg-opacity-10 md:odd:bg-transparent">
                  <th className="hidden md:table-cell border-2 border-opacity-10 border-secondary-gray p-2 text-left">
                    no
                  </th>
                  <th className="hidden md:table-cell border-2 border-opacity-10 border-secondary-gray p-2 text-left">
                    registration id
                  </th>
                  <th className="hidden md:table-cell border-2 border-opacity-10 border-secondary-gray p-2 text-left">
                    nik
                  </th>
                  <th className="hidden md:table-cell border-2 border-opacity-10 border-secondary-gray p-2 text-left">
                    Full Name
                  </th>
                  <th className="hidden md:table-cell border-2 border-opacity-10 border-secondary-gray p-2 text-left">
                    No Room
                  </th>
                  <th className="hidden md:table-cell border-2 border-opacity-10 border-secondary-gray p-2 text-left">
                    check in date
                  </th>
                  <th className="hidden md:table-cell border-2 border-opacity-10 border-secondary-gray p-2 text-left">
                    Option
                  </th>
                </tr>
              </thead>
              <tbody>
                {data ? (
                  data.data.map((item, index) => (
                    <TableRowCheck
                      key={item.idTransaction + index}
                      no={index + 1}
                      idRegistrasi={item.idTransaction}
                      nik={item.customer.nikCustomer}
                      nama={item.customer.nameCustomer}
                      noKamar={item.room.numberRoom}
                      tanggalCheck={item.checkOut}
                      btnDetail={() => handleDetail(item.idTransaction)}
                      btnCheck={() => handleCheck(item?.idTransaction)}
                      btnReBook={() => {
                        navigate(`/rebook/${item.idTransaction}`)
                      }}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">No check-out data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
