import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useGetDataCheck from "../hooks/useGetDataCheck";
import SelectCategory from "../Components/select-options/SelectCategory";
import SelectFloor from "../Components/select-options/SelectFloor";
import SelectPayment from "../Components/select-options/SelectPayment";
import SelectPrice from "../Components/select-options/SelectPrice";
import SelectRoom from "../Components/select-options/SelectRoom";
import auth from "../utils/auth";

export default function PesanKamarPage() {
  const navigate = useNavigate();

  const [roomId, setRoomid] = useState("");
  const [idCategory, setCategory] = useState("");
  const [idFloor, setFloor] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [day, setDay] = useState(0);
  const [people, setPeople] = useState("");
  const [statusPayment, setStatusPayment] = useState("");
  const [totalPayment, setTotalPayment] = useState(0);
  const [nikCustomer, setnikCustomer] = useState("");
  const [nameCustomer, setNamecustomer] = useState("");
  const [emailCustomer, setemailCustomer] = useState("");
  const [tlpnCustomer, settlpnCustomer] = useState("");
  const [addressCustomer, setaddressCustomer] = useState("");
  const [price, setPrice] = useState(0);
  const [fotoCustomer, setfotoCustomer] = useState("photo.png");

  const { isLoading } = useGetDataCheck(
    `${import.meta.env.VITE_ADDR_API}/booking`
  );
  useEffect(() => {
    isLoading
      ? toast.loading("Loading...", { id: "loader" })
      : toast.dismiss("loader");
  }, [isLoading]);

  const handlesubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      roomId,
      checkIn,
      checkOut,
      day,
      people,
      statusPayment,
      totalPayment,
      nikCustomer,
      nameCustomer,
      emailCustomer,
      tlpnCustomer,
      addressCustomer,
      fotoCustomer,
    };

    fetch(`${import.meta.env.VITE_ADDR_API}/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => {
        if (res.ok) {
          alert("Saved successfully.");
          navigate("/checkin");
        } else {
          throw new Error("Failed to save.");
        }
      })
      .catch(() => {
        toast.error("error database or session expire");
      });
  };

  useEffect(() => {
    setTotalPayment(day * price);
  }, [price, day]);

  // console.log(totalPayment);
  // console.log(day);
  // console.log(price);

  return (
    <main className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
      <h1 className="m-4 text-2xl font-semibold">Order</h1>
      <div
        id="modal"
        className="bg-white border inset-0 rounded-lg mt-2 mx-4 mb-4 p-4 overflow-x-auto"
      >
        <form
          onSubmit={handlesubmit}
          className="border-collapse  rounded-lg text-sm text-left text-gray-500"
        >
          <div className="p-4 flex gap-4 flex-wrap">
            <div className="flex flex-col">
              <label className="text-zinc-800 ">Category</label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                name="idCategory"
                id="category"
                required
                className="focus:outline-secondary-gray outline-secondary-gray p-2.5 rounded-full border border-gray-300 text-secondary-gray"
              >
                <option value="">--select category--</option>
                <SelectCategory />
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-zinc-800 text-primary-grey">Floor</label>
              <select
                onChange={(e) => setFloor(e.target.value)}
                required
                name="idFloor"
                id=""
                className="focus:outline-secondary-gray p-2.5 rounded-full border border-gray-300 text-secondary-gray"
              >
                <option value="">--select floor--</option>
                <SelectFloor />
              </select>
            </div>
            <div className="flex flex-col text-secondary-gray">
              <label className="text-zinc-800">No Room</label>
              <select
                name="idRoom"
                required
                onChange={(e) => setRoomid(e.target.value)}
                id=""
                className="focus:outline-secondary-gray p-2.5 rounded-full border border-gray-300 text-secondary-gray"
              >
                <option value="">--select room--</option>
                <SelectRoom category={idCategory} floor={idFloor} />
              </select>
            </div>
            <div className="flex flex-col text-secondary-gray">
              <label className="text-zinc-800">Price</label>
              <select
                name="price"
                required
                onChange={(e) => setPrice(e.target.value)}
                id=""
                className="focus:outline-secondary-gray p-2.5 rounded-full border border-gray-300 text-secondary-gray"
              >
                <option value=""></option>
                <SelectPrice category={idCategory} />
              </select>
              {/* <input
                onChange={(e) => setCheckIn(e.target.value)}
                required
                type="text"
                name="Harga kamar"
                id="harga kamar"
                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"
              /> */}
            </div>
            <div className="flex flex-col text-secondary-gray">
              <label className="text-zinc-800">Check In Date</label>
              <input
                onChange={(e) => setCheckIn(e.target.value)}
                required
                type="date"
                name="Tanggal check-in"
                id="Tanggal checkin"
                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"
              />
            </div>
            <div className="flex flex-col text-secondary-gray">
              <label className="text-zinc-800">Check Out Date</label>
              <input
                onChange={(e) => setCheckOut(e.target.value)}
                type="date"
                name="Tanggal Check-out"
                id="Tanggal Check-out"
                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"
              />
            </div>
            <div className="flex flex-col text-secondary-gray">
              <label className="text-zinc-800">Total Days of Stay</label>
              <input
                onChange={(e) => setDay(e.target.value)}
                type="number"
                name="jumlah-hari"
                id="jumlah-hari"
                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"
              />
            </div>
          </div>
          <div className="mx-2">
            <h3 className="font-semibold text-secondary-gray">Customer</h3>
          </div>
          <div className="p-4 flex gap-4 flex-wrap">
            <div className="flex flex-col text-secondary-gray">
              <label className="text-zinc-800">Nik</label>
              <input
                onChange={(e) => setnikCustomer(e.target.value)}
                type="number"
                name="nik"
                id="nik"
                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"
              />
            </div>
            <div className="flex flex-col text-secondary-gray">
              <label className="text-zinc-800">Full Name</label>
              <input
                onChange={(e) => setNamecustomer(e.target.value)}
                type="text"
                name="nama-lengkap"
                id="nama-lengkap"
                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"
              />
            </div>
            <div className="flex flex-col text-secondary-gray">
              <label className="text-zinc-800">Phone Number</label>
              <input
                onChange={(e) => settlpnCustomer(e.target.value)}
                type="text"
                name="no-telepon"
                id="no-telepon"
                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"
              />
            </div>
            <div className="flex flex-col text-secondary-gray">
              <label className="text-zinc-800">Email</label>
              <input
                onChange={(e) => setemailCustomer(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"
              />
            </div>
            <div className="flex flex-col text-secondary-gray">
              <label className="text-zinc-800">Address</label>
              <input
                onChange={(e) => setaddressCustomer(e.target.value)}
                type="text"
                name="alamat"
                id="alamat"
                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"
              />
            </div>
          </div>
          <div className="p-4 flex gap-4 flex-wrap justify-end">
            <div className="flex flex-col text-secondary-gray">
              <label className="text-zinc-800">For How Many People</label>
              <input
                onChange={(e) => setPeople(e.target.value)}
                type="number"
                name="untuk-berapa-orang"
                id="untuk-berapa-orang"
                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"
              />
            </div>
            <div className="flex flex-col text-secondary-gray">
              <label className="text-zinc-800">Payment</label>
              <select
                onChange={(e) => setStatusPayment(e.target.value)}
                name="payment"
                id="payment"
                required
                className="focus:outline-secondary-gray outline-secondary-gray p-2.5 rounded-full border border-gray-300 text-secondary-gray"
              >
                <option value="">--select payment--</option>
                <SelectPayment />
              </select>
            </div>
            <div className="flex flex-col text-secondary-gray">
              <label className="text-zinc-800">Total Payment</label>
              <input
                value={totalPayment}
                onChange={(e) => setTotalPayment(e.target.value)}
                type="number"
                name="jumlah-bayar"
                id="jumlah-bayar"
                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"
              />
            </div>
          </div>
          <div className="flex justify-end p-4">
            <button
              type="submit"
              className="bg-blue-400 hover:bg-hover-blue text-white py-2 px-4 rounded-full"
            >
              Booking
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
