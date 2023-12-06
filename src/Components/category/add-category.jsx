import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../utils/auth";

export default function AddCategory() {
  const [addCategory, setAddCategory] = useState(null);
  const [response, setResponse] = useState([]);
  const [connected, setConnected] = useState(true);
  const [preview, setPreview] = useState(null);
  const [preview2, setPreview2] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (addCategory) {
      fetch(`${import.meta.env.VITE_ADDR_API}/category/add`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${auth.isAuthenticated()}`,
        },
        body: addCategory,
      })
        .then((res) => res.json())
        .then(setResponse)
        .catch(() => {
          setConnected(false);
        });
    }
  }, [addCategory]);

  useEffect(() => {
    if (response.success) {
      alert(response.success);
    }
    if (response.message) {
      alert(response.message);
      auth.logout();
      navigate("/");
    }
    if (!connected) {
      alert("database not conected...");
      setConnected(true);
    }
  }, [response.success, response.message, connected]);

  useEffect(() => {
    const upload = document.getElementById("upload");
    const upload2 = document.getElementById("upload2");
    const show = document.getElementById("show");
    if (upload) {
      upload.addEventListener("change", (e) => {
        if (
          e.target.files[0].size < 5000000 &&
          upload.value != upload2.value &&
          (e.target.files[0].type == "image/jpeg" ||
            e.target.files[0].type == "image/jpg")
        ) {
          setPreview(URL.createObjectURL(e.target.files[0]));
          show.classList.remove("hidden");
          if (upload2) {
            upload2.addEventListener("change", (e) => {
              if (
                e.target.files[0].size < 5000000 &&
                upload.value != upload2.value &&
                (e.target.files[0].type == "image/jpeg" ||
                  e.target.files[0].type == "image/jpg")
              ) {
                setPreview2(URL.createObjectURL(e.target.files[0]));
              } else {
                alert("image not valid, select another image");
                setPreview2(null);
                e.target.value = "";
              }
            });
          }
        } else {
          alert("image not valid, select another image");
          show.classList.add("hidden");
          setPreview(null);
          setPreview2(null);
          e.target.value = "";
          upload2.value = "";
        }
      });
    }
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setAddCategory(formData);
    setTimeout(() => {
      navigate("/category");
    }, 1000);
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
              <h1 className="text-2xl font-semibold">Form Add Category</h1>
            </div>
            <div className="p-4">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div className="relative overflow-x-auto">
                  <form onSubmit={handlesubmit}>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 m-5">
                      <div className="md:col-span-3">
                        <label>Name Category</label>
                        <select
                          name="nameCategory"
                          required
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                        >
                          <option value={""}>--select--</option>
                          <option value={"Junior Suite"}>Junior Suite</option>
                          <option value={"Executive Suite"}>
                            Executive Suite
                          </option>
                          <option value={"Super Delux"}>Super Delux</option>
                        </select>
                      </div>
                      <div className="md:col-span-3">
                        <label>Price ($/night)</label>
                        <input
                          name="price"
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="price"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Facilities</label>
                        <input
                          name="facilityCategory"
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="facilities"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Description</label>
                        <input
                          name="descCategory"
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="description"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>
                          image <span className="text-[12px]">(max 5mb)</span>
                        </label>
                        <input
                          id="upload"
                          name="image"
                          required
                          type="file"
                          accept=".jpg, .jpeg"
                          className="py-[7px] h-10 pl-4 border mt-1 rounded px-4 w-full bg-gray-50"
                        />

                        <img
                          src={preview}
                          className="mx-2 mt-2 mb-[-10px] w-56"
                        />
                      </div>
                      <div className="md:col-span-3 hidden" id="show">
                        <label>
                          image <span className="text-[12px]">(max 5mb)</span>
                        </label>
                        <input
                          id="upload2"
                          name="image2"
                          required
                          type="file"
                          accept=".jpg, .jpeg"
                          className="py-[7px] h-10 pl-4 border mt-1 rounded px-4 w-full bg-gray-50"
                        />

                        <img
                          src={preview2}
                          className="mx-2 mt-2 mb-[-10px] w-56"
                        />
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => navigate("/category")}
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
