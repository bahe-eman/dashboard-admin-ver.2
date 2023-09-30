import { Link } from "react-router-dom";

export default function ProfilAdmin() {
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
              <h1 className="text-2xl font-semibold">Profil User</h1>
            </div>
            <div className="p-4">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div className="relative overflow-x-auto">
                  <form>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 m-5">
                      <div className="md:col-span-3">
                        <label>Level</label>
                        <select className="h-10 border mt-1 rounded px-4 w-full bg-gray-0">
                          <option value="0">--pilih level--</option>
                          <option selected>Admin</option>
                          <option>Superadmin</option>
                        </select>
                      </div>
                      <div className="md:col-span-3">
                        <label>NIK</label>
                        <input
                          type="text"
                          value="3212123412344321"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="NIK"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Nama Lengkap</label>
                        <input
                          type="text"
                          value="Admin"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Nama Lengkap"
                          required
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Nomor Telepon</label>
                        <input
                          type="text"
                          value={"+6281514566915"}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Nomor Telepon"
                        />
                      </div>
                      <div className="md:col-span-6">
                        <label>Alamat</label>
                        <input
                          type="text"
                          value={"Jl.Sukses Selalu - Indonesia"}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Alamat"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Email</label>
                        <input
                          type="email"
                          value={"admin@gmail.com"}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Email"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Password</label>
                        <input
                          type="password"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Password"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Foto</label>
                        <input
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
                        Update
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
