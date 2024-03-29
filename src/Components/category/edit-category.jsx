import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useGetDataCheck from "../../hooks/useGetDataCheck";
import { global } from "../../context/context";
import auth from "../../utils/auth";

export default function EditCategory() {
  const [response, setResponse] = useState([]);
  const [getCategory, setGetCategory] = useState([]);
  const [editCategory, setEditCategory] = useState(null);
  const [preview, setPreview] = useState(null);
  const [preview2, setPreview2] = useState(null);
  const navigate = useNavigate();
  const dataId = useContext(global).dataId;

  if (!dataId) {
    navigate("/category");
  }

  const { isLoading } = useGetDataCheck(
    `${import.meta.env.VITE_ADDR_API}/category/${dataId}`
  );
  useEffect(() => {
    isLoading
      ? toast.loading("Loading...", { id: "loader" })
      : toast.dismiss("loader");
  }, [isLoading]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/category/${dataId}`, {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then(setGetCategory)
      .catch(() => {
        toast.error("error database or session expire");
      });
  }, []);
  const { category } = getCategory;

  useEffect(() => {
    if (editCategory) {
      fetch(`${import.meta.env.VITE_ADDR_API}/category/update/${dataId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${auth.isAuthenticated()}`,
        },
        body: editCategory,
      })
        .then((res) => res.json())
        .then(setResponse)
        .catch(() => {
          toast.error("error database or session expire");
        });
    }
  }, [editCategory]);

  useEffect(() => {
    if (response.success) {
      toast.success("Successfully!");
      setTimeout(() => {
        navigate("/category");
      }, 2000);
    }
    if (response.message) {
      toast.error("This didn't work.");
      navigate("/category");
    }
    if (getCategory.message) {
      toast.error("This didn't work.");
      navigate("/");
    }
  }, [response.success, response.message, getCategory.message]);

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
    setEditCategory(formData);
  };
  return (
    category && (
      <div className="w-full">
        <Toaster />
        <main className="bg-primary-gray grow overflow-y-auto">
          <div
            id="modal-overlay"
            className="hidden bg-black h-full w-full absolute top-0 left-0 opacity-90"
          ></div>
          <div className="p-4 h-[calc(100vh-67.33px)]">
            <div>
              <h1 className="text-2xl font-semibold">Form Edit Category</h1>
            </div>
            <div className="p-4">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div className="relative overflow-x-auto">
                  <form onSubmit={handlesubmit}>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 m-5">
                      <div className="md:col-span-3">
                        <label>Name Category</label>
                        <input
                          name="nameCategory"
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder={category.nameCategory}
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Price ($/night)</label>
                        <input
                          name="price"
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder={category.price}
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Facilities</label>
                        <input
                          name="facilityCategory"
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder={category.facilityCategory}
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Description</label>
                        <input
                          name="descCategory"
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder={category.descCategory}
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
    )
  );
}
