import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../utils/auth";

export default function AddCustomer() {
  const [AddCustomer, setAddCustomer] = useState(null);
  const [response, setResponse] = useState([]);
  const [connected, setConnected] = useState(true);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (AddCustomer) {
      fetch(`${import.meta.env.VITE_ADDR_API}/customer/add`, {
        method: "POST",
        // headers: {
        //   Authorization: `Bearer ${auth.isAuthenticated()}`,
        // },
        body: AddCustomer,
      })
        .then((res) => res.json())
        .then(setResponse)
        .catch(() => {
          setConnected(false);
        });
    }
  }, [AddCustomer]);

  useEffect(() => {
    if (response.success) {
      alert(response.success);
    }
    if (response.message) {
      alert(response.message);
      //   auth.logout();
      navigate("/");
    }
    if (!connected) {
      alert("database not conected...");
      setConnected(true);
    }
  }, [response.success, response.message, connected]);

  useEffect(() => {
    const upload = document.getElementById("upload");
    const show = document.getElementById("show");
    if (upload) {
      upload.addEventListener("change", (e) => {
        if (
          e.target.files[0].size < 5000000 &&
          (e.target.files[0].type == "image/jpeg" ||
            e.target.files[0].type == "image/jpg")
        ) {
          setPreview(URL.createObjectURL(e.target.files[0]));
          show.classList.remove("hidden");
        } else {
          alert("image not valid, select another image");
          show.classList.add("hidden");
          setPreview(null);
          e.target.value = "";
        }
      });
    }
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { password, verifyPassword } = Object.fromEntries(formData);
    if (password === verifyPassword) {
      formData.append("paswordCustomer", password);
      formData.append("statusCustomer", parseInt("1"));
      setAddCustomer(formData);
      setTimeout(() => {
        navigate("/customer");
      }, 1000);
    } else alert("password not match...");
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
              <h1 className="text-2xl font-semibold">Form Add Customer</h1>
            </div>
            <div className="p-4">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div className="relative overflow-x-auto">
                  <form onSubmit={handlesubmit}>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 m-5">
                      <div className="md:col-span-3">
                        <label>Name</label>
                        <input
                          name="nameCustomer"
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="name"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>NIK</label>
                        <input
                          name="nikCustomer"
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="NIK"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Address</label>
                        <input
                          name="addressCustomer"
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Address"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Telp</label>
                        <input
                          name="tlpnCustomer"
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Telp"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>E-mail</label>
                        <input
                          name="emailCustomer"
                          required
                          type="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="e-mail"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Username</label>
                        <input
                          name="userName"
                          required
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="username"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Password</label>
                        <input
                          name="password"
                          required
                          type="password"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="password"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Verify Password</label>
                        <input
                          name="verifyPassword"
                          required
                          type="password"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="re-password"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>
                          photo <span className="text-[12px]">(max 5mb)</span>
                        </label>
                        <input
                          id="upload"
                          name="fotoCustomer"
                          required
                          type="file"
                          accept=".jpg, .jpeg"
                          className="py-[7px] h-10 pl-4 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                        <img
                          src={preview}
                          className="mx-2 mt-2 mb-[-10px] w-24"
                        />
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => navigate("/customer")}
                      >
                        Close
                      </button>
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
