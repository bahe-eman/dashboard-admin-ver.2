import { useState } from "react";
import useGetDataCheck from "../hooks/useGetDataCheck";
import TableRowCheckOut from "../Components/TableRowCheckOut";

export default function CheckoutKamarpage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setSelectedId] = useState(null);
  const { data, isLoading } = useGetDataCheck(
    "https://shy-pink-mussel-veil.cyclic.cloud/customer/check-out"
  );
  const handleBtnClick = (id) => {
    setIsModalOpen(true);
    setSelectedId(id);
  };
  return (
    <div className="w-full">
      <main className="bg-primary-gray grow overflow-y-auto">
        <div
          onClick={() => setIsModalOpen(false)}
          className={`${
            isModalOpen ? "" : "hidden"
          } z-40 bg-black h-full w-full absolute top-0 left-0 opacity-90`}
        ></div>
        <div className="p-2 h-[calc(100vh-67.33px)]">
          <div className="mb-4">
            <h1 className="text-2xl font-semibold">Check out</h1>
          </div>
          <div className="p-6 m-3 bg-white">
            {isLoading ? (
              <div className="grid place-items-center fixed inset-0 w-screen h-screen">
                <h1 className="text-center text-zinc-500 text-7xl animate-bounce">
                  Loading
                </h1>
              </div>
            ) : (
              <></>
            )}
            <div
              id="modal"
              className={`${
                isModalOpen ? "absolute" : "hidden"
              } bg-white inset-0 m-auto w-[90%] h-[550px] rounded  overflow-y-auto z-[999999]`}
            >
              <div className="flex justify-between px-2">
                <h3 className="my-4 ml-2 text-2xl font-semibold">
                  detail Check-out
                </h3>
                <button
                  id="close-modal"
                  className="text-3xl"
                  onClick={() => setIsModalOpen(false)}
                >
                  <i className="ri-close-fill text-secondary-gray hover:text-secondary-blue"></i>
                </button>
              </div>
              <div className="p-2">
                <form action="#">
                  <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="kategori" className="text-secondary-gray">
                        Kategori
                      </label>
                      <select
                        name="kategori"
                        id=""
                        className="w-full focus:outline-secondary-gray outline-secondary-gray p-2.5 rounded border border-gray-300"
                      >
                        <option>--pilih kategori--</option>
                        <option>gold</option>
                        <option>silver</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="Lantai" className="text-secondary-gray">
                        Lantai
                      </label>
                      <select
                        name="Lantai"
                        id=""
                        className="w-full focus:outline-secondary-gray p-2.5 rounded border border-gray-300"
                      >
                        <option>--pilih Lantai--</option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-zinc-800" htmlFor="No kamar">
                        No kamar
                      </label>
                      <select
                        name="No kamar"
                        id=""
                        className="w-full focus:outline-secondary-gray p-2.5 rounded border border-gray-300"
                      >
                        <option>--pilih No kamar--</option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-zinc-800" htmlFor="Harga kamar">
                        Harga kamar
                      </label>
                      <input
                        type="text"
                        name="Harga kamar"
                        id="Harga kamar"
                        className="focus:outline-secondary-gray p-2 rounded border border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="text-zinc-800"
                        htmlFor="Tanggal check-in"
                      >
                        Tanggal check-in
                      </label>
                      <input
                        type="text"
                        name="Tanggal check-in"
                        id="Tanggal checkin"
                        className="focus:outline-secondary-gray p-2 rounded border border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-zinc-800" htmlFor="jam check-in">
                        jam check-in
                      </label>
                      <input
                        type="text"
                        name="jam check-in"
                        id="jam check-in"
                        className="focus:outline-secondary-gray p-2 rounded border border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="text-zinc-800"
                        htmlFor="Tanggal Check-out"
                      >
                        Tanggal Check-out
                      </label>
                      <input
                        type="text"
                        name="Tanggal Check-out"
                        id="Tanggal Check-out"
                        className="focus:outline-secondary-gray p-2 rounded border border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-zinc-800" htmlFor="Jam Check-out">
                        Jam Check-out
                      </label>
                      <input
                        type="text"
                        name="Jam Check-out"
                        id="Jam Check-out"
                        className="focus:outline-secondary-gray p-2 rounded border border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-zinc-800" htmlFor="jumlah-hari">
                        Jumlah hari
                      </label>
                      <input
                        type="text"
                        name="jumlah-hari"
                        id="jumlah-hari"
                        className="focus:outline-secondary-gray p-2 rounded border border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="mx-2">
                    <h3 className="font-semibold">Custummer</h3>
                  </div>
                  <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="flex flex-col">
                      <label className="text-zinc-800" htmlFor="nik">
                        Nik
                      </label>
                      <input
                        type="text"
                        name="nik"
                        id="nik"
                        className="focus:outline-secondary-gray p-2 rounded border border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-zinc-800" htmlFor="nama-lengkap">
                        Nama lengkap
                      </label>
                      <input
                        type="text"
                        name="nama-lengkap"
                        id="nama-lengkap"
                        className="focus:outline-secondary-gray p-2 rounded border border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-zinc-800" htmlFor="no-telepon">
                        No telepon
                      </label>
                      <input
                        type="text"
                        name="no-telepon"
                        id="no-telepon"
                        className="focus:outline-secondary-gray p-2 rounded border border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-zinc-800" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="focus:outline-secondary-gray p-2 rounded border border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-zinc-800" htmlFor="alamat">
                        Alamat
                      </label>
                      <input
                        type="text"
                        name="alamat"
                        id="alamat"
                        className="focus:outline-secondary-gray p-2 rounded border border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="flex flex-col">
                      <label
                        className="text-zinc-800"
                        htmlFor="untuk-berapa-orang"
                      >
                        Untuk berapa orang
                      </label>
                      <input
                        type="text"
                        name="untuk-berapa-orang"
                        id="untuk-berapa-orang"
                        className="focus:outline-secondary-gray p-2 rounded border border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="text-zinc-800"
                        htmlFor="metode-pembayaran"
                      >
                        Metode pembayaran
                      </label>
                      <input
                        type="text"
                        name="metode-pembayaran"
                        id="metode-pembayaran"
                        className="focus:outline-secondary-gray p-2 rounded border border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-zinc-800" htmlFor="jumlah-bayar">
                        Jumlah bayar
                      </label>
                      <input
                        type="text"
                        name="jumlah-bayar"
                        id="jumlah-bayar"
                        className="focus:outline-secondary-gray p-2 rounded border border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end p-4">
                    <button className="bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded">
                      check-out
                    </button>
                  </div>
                </form>
              </div>
            </div>
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
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
                    no Room
                  </th>
                  <th className="hidden md:table-cell border-2 border-opacity-10 border-secondary-gray p-2 text-left">
                    check in date
                  </th>
                  <th className="hidden md:table-cell border-2 border-opacity-10 border-secondary-gray p-2 text-left">
                    option
                  </th>
                </tr>
              </thead>
              <tbody>
                {data ? (
                  data.filterCustomers.map((item, index) => (
                    <TableRowCheckOut
                      key={item.id}
                      no={index + 1}
                      idRegistrasi={item.id}
                      nik={item.nik}
                      nama={item.name}
                      noKamar={item.noKamar}
                      tanggalCheckin={item.tanggalCheckIn}
                      onBtnClick={handleBtnClick}
                    />
                  ))
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
