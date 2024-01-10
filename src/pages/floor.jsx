import { useEffect, useState } from "react";
import ListTable from "../Components/floor";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useGetDataCheck from "../hooks/useGetDataCheck";
import auth from "../utils/auth";

export default function Floor() {
  const [state, setState] = useState();
  const { isLoading } = useGetDataCheck(
    `${import.meta.env.VITE_ADDR_API}/floor`
  );
  useEffect(() => {
    isLoading
      ? toast.loading("Loading...", { id: "loader" })
      : toast.dismiss("loader");
  }, [isLoading]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/floor`, {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then(setState)
      .catch(() => {
        toast.error("error database or session expire");
      });
  }, []);

  return (
    <div className="w-full lg:w-[calc(100vw-220px)]">
      <div className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
        <h1 className="p-4 font-raleway text-2xl font-semibold">List Rooms</h1>
        <form className="font-roboto px-4 mx-4 border rounded-lg bg-white max-md:text-sm overflow-auto">
          <div className="grid gap-5 place-items-start sm:flex justify-between m-4 ">
            <Link to="/add-floor">
              <button className="py-2 px-5 bg-blue-400 rounded-md text-xs text-white hover:bg-hover-blue">
                <i className="ri-hotel-bed-line text-sm mr-2"></i>Add
              </button>
            </Link>
          </div>
          <ListTable dataHotel={state} />
        </form>
      </div>
    </div>
  );
}
