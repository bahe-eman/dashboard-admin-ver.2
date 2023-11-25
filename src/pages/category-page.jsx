import { useEffect, useState } from "react";
import auth from "../utils/auth";
import TableCategory from "../Components/category/table-category";
import SearchCategory from "../Components/category/search-category";
import { useNavigate } from "react-router-dom";

export default function CategoryPage() {
  const [response, setResponse] = useState([]);
  const [dataValue, setDataValue] = useState("all");
  const navigate = useNavigate();

  useState(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/category`, {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then(setResponse)
      .catch(() => {
        alert("database not conected...");
      });
  }, [response]);

  const search = (value) => {
    setDataValue(value);
    if (value == "all") {
      fetch(`${import.meta.env.VITE_ADDR_API}/category`, {
        headers: {
          Authorization: `Bearer ${auth.isAuthenticated()}`,
        },
      })
        .then((res) => res.json())
        .then(setResponse);
    } else {
      fetch(`${import.meta.env.VITE_ADDR_API}/category/search/${value}`, {
        headers: {
          Authorization: `Bearer ${auth.isAuthenticated()}`,
        },
      })
        .then((res) => res.json())
        .then(setResponse);
    }
  };

  const deleting = (value) => {
    fetch(`${import.meta.env.VITE_ADDR_API}/category/delete/${value}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then(setResponse);
    setTimeout(() => {
      search(dataValue);
    }, 1000);
  };

  useEffect(() => {
    if (response.message) {
      alert(response.message);
      auth.logout();
      navigate("/");
    }
    if (response.success) {
      alert(response.success);
    }
  }, [response.message, response.success]);

  return (
    <div className="w-full lg:w-[calc(100vw-220px)]">
      <div className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
        <h1 className="p-4 font-raleway text-2xl font-semibold">Category</h1>
        <form className="font-roboto px-4 mx-4 border rounded-lg bg-white max-md:text-sm overflow-auto">
          <div className="grid gap-5 place-items-start sm:flex justify-between m-4">
            <button
              onClick={() => navigate("/category-add")}
              className="py-2 px-5 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue"
            >
              <i className="ri-hotel-bed-line mr-2"></i>Add Category
            </button>
            <SearchCategory search={search} />
          </div>
          <TableCategory
            categories={response.categories}
            deleteCategory={deleting}
          />
        </form>
      </div>
    </div>
  );
}
