import { useEffect, useState } from "react";
import ListTable from "../Components/list-rooms/list-table";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useGetDataCheck from "../hooks/useGetDataCheck";
import auth from "../utils/auth";

export default function ListKamarPage() {
  const [state, setState] = useState();
  const [count, setCount] = useState(0);
  const { isLoading } = useGetDataCheck(
    `${import.meta.env.VITE_ADDR_API}/rooms`
  );
  useEffect(() => {
    isLoading
      ? toast.loading("Loading...", { id: "loader" })
      : toast.dismiss("loader");
  }, [isLoading]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/rooms`, {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then(setState)
      .catch(() => {
        toast.error("error database or session expire");
      });
  }, [count]);
  setTimeout(() => {
    setCount(count + 1);
  }, 10000);

  return (
    <div className="w-full lg:w-[calc(100vw-220px)]">
      <div className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
        <h1 className="p-4 font-raleway text-2xl font-semibold">List Rooms</h1>
        <form className="font-roboto px-4 mx-4 border rounded-lg bg-white max-md:text-sm overflow-auto">
          <div className="grid gap-5 place-items-start sm:flex justify-between m-4 ">
            <Link to="/add-room">
              <button className="py-2 px-5 bg-blue-400 rounded-md text-xs text-white hover:bg-hover-blue">
                <i className="ri-hotel-bed-line text-sm mr-2"></i>Add Room
              </button>
            </Link>
          </div>
          <ListTable dataHotel={state} />
        </form>
      </div>
    </div>
  );
}
