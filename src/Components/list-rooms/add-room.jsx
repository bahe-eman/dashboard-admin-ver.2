import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../utils/auth";
import SelectCategory from "../select-options/SelectCategory";
import SelectFloor from "../select-options/SelectFloor";
export default function TambahKamarForm() {
  const [categoryId, setCategory] = useState("");
  const [floorId, setFloor] = useState("");
  const [nameRoom, setName] = useState("");
  const [numberRoom, setNumber] = useState("");
  const [descRoom, setDesc] = useState("");
  const [statusId, setStatus] = useState("");

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const admData = {
      categoryId,
      nameRoom,
      floorId,
      numberRoom,
      descRoom,
      statusId,
    };

    fetch(`${import.meta.env.VITE_ADDR_API}/rooms`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
      body: JSON.stringify(admData),
    })
      .then(() => {
        alert("Saved successfully.");
        navigate("/list-rooms");
      })
      .catch((err) => {
        console.log(err.message);
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
              <h1 className="text-2xl font-semibold">Form Add Room</h1>
            </div>
            <div className="p-4">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div className="relative overflow-x-auto">
                  <form onSubmit={handlesubmit}>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 m-5">
                      <div className="md:col-span-3">
                        <label>Room Category</label>
                        <select
                          name="categoryId"
                          required
                          onChange={(e) => setCategory(e.target.value)}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                        >
                          <option value={""}>--select--</option>
                          <SelectCategory />
                        </select>
                      </div>
                      <div className="md:col-span-3">
                        <label>Floor</label>
                        <select
                          name="floorId"
                          onChange={(e) => setFloor(e.target.value)}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                        >
                          <option value={""}>--select--</option>
                          <SelectFloor />
                        </select>
                      </div>
                      <div className="md:col-span-3">
                        <label>Name Room</label>
                        <input
                          name="nameRoom"
                          required
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Name Room"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Number Room</label>

                        <input
                          onChange={(e) => setNumber(e.target.value)}
                          type="number"
                          name="numberRoom"
                          required
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Description</label>
                        <input
                          onChange={(e) => setDesc(e.target.value)}
                          name="descRoom"
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Desc"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Status</label>
                        <select
                          onChange={(e) => setStatus(e.target.value)}
                          name="statusId"
                          required
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                        >
                          <option value={""}>--select--</option>
                          <option value={3}>Empty</option>
                          <option value={4}>Booked</option>
                        </select>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <Link to="/list-rooms">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => navigate("/list-rooms")}
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
