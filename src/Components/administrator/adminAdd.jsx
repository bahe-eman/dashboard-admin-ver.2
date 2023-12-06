import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../utils/auth";

export default function AdminAdd() {
  const navigate = useNavigate();
  const [idUser, setId] = useState("");
  const [nameUser, setName] = useState("");
  const [fotoUser, setFoto] = useState("");
  const [emailUser, setEmail] = useState("");
  const [passwordUser, setPassword] = useState("");
  const [tlpUser, setPhone] = useState("");
  const [addressUser, setAddress] = useState("");
  const [statusUser, setStatus] = useState("Aktive");
  const [levelUser, setLevel] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const admData = {
      fotoUser,
      nameUser,
      emailUser,
      passwordUser,
      tlpUser,
      addressUser,
      statusUser,
      levelUser,
    };
    fetch(`${import.meta.env.VITE_ADDR_API}/users/add`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
      body: formData,
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/administrator");
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
              <h1 className="text-2xl font-semibold">Form Add Admin</h1>
            </div>
            <div className="p-4">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div className="relative overflow-x-auto">
                  <form encType="multipart/form-data" onSubmit={handlesubmit}>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 m-5">
                      <div className="md:col-span-3">
                        <label>Level</label>
                        <select
                          name="levelUser"
                          onChange={(e) => setLevel(e.target.value)}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                        >
                          <option value="0">--select level--</option>
                          <option value={"1"}>Admin</option>
                          <option value={"2"}>Superadmin</option>
                        </select>
                      </div>
                      <div className="md:col-span-3">
                        <label>Full Name</label>
                        <input
                          name="nameUser"
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Status</label>
                        <select
                          name="statusUser"
                          onChange={(e) => setStatus(e.target.value)}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                        >
                          <option value="0">--select status--</option>
                          <option value={"1"}>Aktif</option>
                          <option value={"2"}>Non Aktif</option>
                        </select>
                      </div>
                      <div className="md:col-span-3">
                        <label>Phone Number</label>
                        <input
                          name="tlpUser"
                          onChange={(e) => setPhone(e.target.value)}
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="md:col-span-6">
                        <label>Address</label>
                        <input
                          name="addressUser"
                          onChange={(e) => setAddress(e.target.value)}
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Address"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Email</label>
                        <input
                          name="emailUser"
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Email"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Password</label>
                        <input
                          name="passwordUser"
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Password"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Photo</label>
                        <input
                          name="fotoUser"
                          onChange={(e) => setFoto(e.target.value)}
                          type="file"
                          className="py-[7px] h-10 pl-4 border rounded-sm bg-gray-50 md:w-[500px] lg:w-full"
                        />
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <Link to="/dashboard">
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
    </>
  );
}
