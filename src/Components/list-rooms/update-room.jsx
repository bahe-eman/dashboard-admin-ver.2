import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import auth from "../../utils/auth";

export default function UpdateRoomForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [floorId, setFloorId] = useState(null);
  const [category, dataCategory] = useState(null);
  const [floor, dataFloor] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/rooms/${id}`, {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then(setFloorId)
      .catch(() => {
        toast.error("error database or session expire");
      });

    fetch(`${import.meta.env.VITE_ADDR_API}/category`, {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => dataCategory(res.categories));

    fetch(`${import.meta.env.VITE_ADDR_API}/floor`, {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then(dataFloor);
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { categoryId, floorId, nameRoom, numberRoom, statusId, descRoom } =
      Object.fromEntries(formData);

    fetch(`${import.meta.env.VITE_ADDR_API}/rooms/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        categoryId: categoryId,
        floorId: floorId,
        nameRoom: nameRoom,
        numberRoom: numberRoom,
        statusId: statusId,
        descRoom: descRoom,
      }),
    })
      .then(() => {
        toast.success("Successfully!");
        navigate("/list-rooms");
      })
      .catch(() => {
        toast.error("error database or session expire");
      });
  };

  return (
    <>
      {floorId && (
        <div className="w-full">
          <main className="bg-primary-gray grow overflow-y-auto">
            <div
              id="modal-overlay"
              className="hidden bg-black h-full w-full absolute top-0 left-0 opacity-90"
            ></div>
            <div className="p-4 h-[calc(100vh-67.33px)]">
              <div>
                <h1 className="text-2xl font-semibold">Update Room</h1>
              </div>
              <div className="p-4">
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
                  <div className="relative overflow-x-auto">
                    <form onSubmit={handlesubmit}>
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 m-5">
                        <div className="md:col-span-3">
                          <label>Room Category</label>
                          <select
                            required
                            name="categoryId"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                          >
                            <option value={""}>--select--</option>
                            {category &&
                              category.map(
                                ({ idCategory, nameCategory }, index) => {
                                  return (
                                    <option key={index} value={idCategory}>
                                      {nameCategory}
                                    </option>
                                  );
                                }
                              )}
                          </select>
                        </div>
                        <div className="md:col-span-3">
                          <label>Floor</label>
                          <select
                            name="floorId"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                          >
                            <option value={""}>--select--</option>
                            {floor &&
                              floor.map(({ idFloor, nameFloor }, index) => {
                                return (
                                  <option key={index} value={idFloor}>
                                    {nameFloor}
                                  </option>
                                );
                              })}
                          </select>
                        </div>
                        <div className="md:col-span-3">
                          <label>Name Room</label>
                          <input
                            required
                            name="nameRoom"
                            type="text"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder={floorId.nameRoom}
                          />
                        </div>
                        <div className="md:col-span-3">
                          <label>Number Room</label>
                          <input
                            required
                            name="numberRoom"
                            type="number"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder={floorId.numberRoom}
                          />
                        </div>
                        <div className="md:col-span-3">
                          <label>Description</label>
                          <input
                            required
                            type="text"
                            name="descRoom"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder={floorId.descRoom}
                          />
                        </div>
                        <div className="md:col-span-3">
                          <label>Status</label>
                          <select
                            required
                            name="statusId"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                          >
                            <option value={""}>--select--</option>
                            <option value={6}>Empty</option>
                            <option value={7}>Booked</option>
                          </select>
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <Link to="/list-rooms">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
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
      )}
    </>
  );
}
