import { useEffect, useState } from "react";

import ListTable from "../Components/list-table";
import TambahKamar from "../Components/tambah-kamar";
import Cari from "../Components/Cari";
import TambahKamarForm from "./tambah-kamar";
import { Link } from "react-router-dom";
import auth from "../utils/auth";

export default function ListKamarPage() {
  const [state, setState] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/rooms`, {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then(setState);
  }, []);

  return (
    <div className="w-full lg:w-[calc(100vw-220px)]">
      <div className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
        <h1 className="p-4 font-raleway text-2xl font-semibold">List Rooms</h1>
        <form className="font-roboto px-4 mx-4 border rounded-lg bg-white max-md:text-sm overflow-auto">
          <div className="grid gap-5 place-items-start sm:flex justify-between m-4 ">
            {/* <TambahKamarForm /> */}
            <Link to="/tambah-kamar">
              <button className="py-2 px-5 bg-blue-400 rounded-md text-xs text-white hover:bg-hover-blue">
                <i className="ri-hotel-bed-line text-sm mr-2"></i>Add Room
              </button>
            </Link>
            {/* <Cari cari={cari} /> */}
          </div>
          <ListTable dataHotel={state} />
        </form>
      </div>
    </div>
  );
}
