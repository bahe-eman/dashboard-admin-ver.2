import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../utils/auth";
import toast from "react-hot-toast";
import SelectCategory from "../select-options/SelectCategory";
import SelectFloor from "../select-options/SelectFloor";
export default function UpdateFloor() {
  const [categoryId, setCategory] = useState("");
  const [floorId, setFloor] = useState("");
  const [nameFloor, setName] = useState("");
  const [numberRoom, setNumber] = useState("");
  const [descRoom, setDesc] = useState("");
  const [statusId, setStatus] = useState("");

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_ADDR_API}/floor`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
      body: JSON.stringify({ nameFloor }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) toast.success(res.message);
        else toast.error(res.error);
        navigate("/floor");
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  return (
    <>
      <div className="w-full">
        <main className="bg-primary-gray grow overflow-y-auto">
          <div
            id="modal-overlay"
            className="hidden bg-black h-full w-full absolute top-0 left-0 opacity-90"
          ></div>
          <div className="p-4 h-[calc(100vh-67.33px)]">
            <div>
              <h1 className="text-2xl font-semibold">Update Floor</h1>
            </div>
            <div className="p-4">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div className="relative overflow-x-auto">
                  <form onSubmit={handlesubmit}>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 m-5">
                      <div className="md:col-span-3">
                        <label>Name Floor</label>
                        <input
                          name="nameFloor"
                          required
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="floor"
                        />
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <Link to="/floor">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => navigate("/floor")}
                        >
                          Close
                        </button>
                      </Link>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
