import PropTypes from "prop-types";
import { useContext } from "react";

import { global } from "../../context/context";
import { optionButton } from "./option-button";
import { useNavigate } from "react-router-dom";

export default function TableCategory({ categories, deleteCategory }) {
  const updateDataID = useContext(global).updateDataID;
  const navigate = useNavigate();
  let display;
  if (categories == undefined) {
    display = [];
  } else display = categories;

  const opsi = (el) => {
    if (el.target.title == "detail" || el.target.title == "icon detail") {
      updateDataID(optionButton(display, el.target, "detail"));
      navigate("/category-detail");
    } else if (el.target.title == "edit" || el.target.title == "icon edit") {
      updateDataID(optionButton(display, el.target, "edit"));
      navigate("/category-edit");
    } else if (
      el.target.title == "delete" ||
      el.target.title == "icon delete"
    ) {
      window.confirm("are you sure for delete this category?") &&
        deleteCategory(optionButton(display, el.target, "delete"));
    }
  };

  if (display.length && display) {
    return (
      <>
        <table
          onClick={opsi}
          id="tabel"
          className="mb-4 border-collapse  rounded-lg text-sm text-left text-gray-500 w-full"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left">
                No
              </th>
              <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left min-w-[150px]">
                Category
              </th>
              <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left">
                Price
              </th>
              <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left min-w-[250px]">
                Facilities
              </th>
              <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left min-w-[250px]">
                Image
              </th>
              <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left">
                Option
              </th>
            </tr>
          </thead>
          <tbody>
            {display.map(
              ({ nameCategory, price, facilityCategory, image }, index) => {
                return (
                  <tr key={index} className="capitalize">
                    <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                      {index + 1}
                    </td>
                    <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                      {nameCategory}
                    </td>
                    <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                      ${price}/night
                    </td>
                    <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                      {facilityCategory}
                    </td>
                    <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                      <img
                        src={`${import.meta.env.VITE_ADDR_API}/${image}`}
                        className="h-32"
                        alt="image not found"
                      />
                    </td>
                    <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                      <div className="flex justify-center items-center flex-nowrap">
                        <button
                          type="button"
                          title="detail"
                          className="detail mr-1 py-1 px-5 bg-green-400 rounded-md hover:bg-hover-green"
                        >
                          <i
                            title="icon detail"
                            className="ri-search-line text-white"
                          ></i>
                        </button>
                        <button
                          type="button"
                          title="delete"
                          className="delete mr-1 py-1 px-5 bg-red-400 rounded-md hover:bg-hover-red"
                        >
                          <i
                            title="icon delete"
                            className="ri-delete-bin-line text-white"
                          ></i>
                        </button>
                        <button
                          type="button"
                          title="edit"
                          className="edit py-1 px-5 bg-yellow-400 rounded-md hover:bg-hover-yellow"
                        >
                          <i
                            title="icon edit"
                            className="ri-file-edit-line text-white"
                          ></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </>
    );
  }
}

TableCategory.propTypes = {
  categories: PropTypes.array,
  deleteCategory: PropTypes.func,
};
