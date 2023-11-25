import { useEffect, useState } from "react";

export default function AdminDetail({ idData }) {
  const [showModal2, setShowModal2] = useState(false);
  const [admn, admnData] = useState({});
  const myId = idData;
  useEffect(() => {
    fetch("https://651107013ce5d181df5da09e.mockapi.io/admin/" + myId)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        admnData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <button
        title="detail"
        onClick={() => setShowModal2(true)}
        className="form-detail-data mr-1 py-1 px-5 bg-green-400 rounded-md hover:bg-hover-green"
      >
        <i className="ri-search-line text-white"></i>
      </button>

      {showModal2 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Form Detail Admin</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal2(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form>
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 m-5">
                    <div className="md:col-span-3">
                      <label>Level</label>
                      <select className="h-10 border mt-1 rounded px-4 w-full bg-gray-0">
                        <option value="0">--select level--</option>
                        <option>Admin</option>
                        <option>Superadmin</option>
                      </select>
                    </div>
                    <div className="md:col-span-3">
                      <label>NIK</label>
                      <input
                        type="text"
                        value={admn.nik}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="NIK"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label>Full Name</label>
                      <input
                        type="text"
                        value={admn.name}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        value={admn.phone}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="md:col-span-6">
                      <label>Address</label>
                      <input
                        type="text"
                        value={admn.address}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Address"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label>Email</label>
                      <input
                        type="email"
                        value={admn.username}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Email"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label>Password</label>
                      <input
                        type="password"
                        value={admn.password}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Password"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label>Photo</label>
                      <input
                        type="file"
                        className="py-[7px] h-10 pl-4 border rounded-sm bg-gray-50 md:w-[500px] lg:w-full"
                      />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal2(false)}
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
