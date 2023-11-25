import { useEffect, useState } from "react";
import auth from "../utils/auth";
import TableCategory from "../Components/category/table-category";
import SearchCategory from "../Components/category/search-category";
import { useNavigate } from "react-router-dom";

export default function CategoryPage() {
  const [categories, setCategories] = useState(null);
  const [dataValue, setDataValue] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    if (false) {
      auth.logout();
      navigate("/");
    }
  });

  useState(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/category`)
      .then((res) => res.json())
      .then(setCategories)
      .catch((error) => {
        console.log(error.message);
      });
  }, [categories]);

  console.log(categories);

  const search = (value) => {
    setDataValue(value);
    if (value == "all") {
      fetch(`${import.meta.env.VITE_ADDR_API}/category`)
        .then((res) => res.json())
        .then(setCategories);
    } else
      fetch(`${import.meta.env.VITE_ADDR_API}/category/search/${value}`)
        .then((res) => res.json())
        .then(setCategories);
  };

  const deleting = (value) => {
    fetch(`${import.meta.env.VITE_ADDR_API}/category/delete/${value}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => alert(res.message));
    setTimeout(() => {
      search(dataValue);
    }, 1000);
  };

  // if (auth.isAuthenticated()) {
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
          <TableCategory categories={categories} deleteCategory={deleting} />
        </form>
      </div>
    </div>
  );
  // } else {
  //   alert();
  // }

  // return token ? (
  //   <div className="w-full lg:w-[calc(100vw-220px)]">
  //     <div className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
  //       <h1 className="p-4 font-raleway text-2xl font-semibold">Category</h1>
  //       <form className="font-roboto px-4 mx-4 border rounded-lg bg-white max-md:text-sm overflow-auto">
  //         <div className="grid gap-5 place-items-start sm:flex justify-between m-4">
  //           <button
  //             onClick={() => navigate("/category-add")}
  //             className="py-2 px-5 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue"
  //           >
  //             <i className="ri-hotel-bed-line mr-2"></i>Add Category
  //           </button>
  //           <SearchCategory search={search} />
  //         </div>
  //         <TableCategory categories={categories} deleteCategory={deleting} />
  //       </form>
  //     </div>
  //   </div>
  // ) : (
  //   <div>ini</div>
  // );
}
