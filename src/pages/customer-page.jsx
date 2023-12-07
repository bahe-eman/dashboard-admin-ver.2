import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CustomerPage = () => {
  const [customer, setCustomer] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/customer`)
      .then((res) => res.json())
      .then((res) => setCustomer(res.customer))
      .catch((Error) => console.log(Error));
  }, [customer]);

  const option = (el) => {
    if (el.target.id) {
      if (el.target.title) {
        if (el.target.title == "delete") {
          fetch(
            `${import.meta.env.VITE_ADDR_API}/customer/delete/${el.target.id}`,
            {
              method: "DELETE",
            }
          )
            .then((res) => res.json())
            .then((res) => alert(res.message))
            .catch((Error) => console.log(Error.message));
        }
        if (el.target.title == "edit") {
          console.log(el.target.id);
          console.log("edit");
        }
        if (el.target.title == "detail") {
          console.log(el.target.id);
          console.log("detail");
        }
      }
    }
  };

  return (
    <div className="w-full">
      <main className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
        <h1 className="p-4 font-raleway text-2xl font-semibold">Customer</h1>
        <form className="font-roboto px-6 mx-4 border rounded-lg bg-white max-lg:px-4 overflow-auto shadow-xl">
          <div className="grid gap-5 place-items-start sm:flex justify-between m-4">
            <button
              onClick={() => navigate("/add-customer")}
              className="py-2 px-5 bg-blue-400 rounded-md text-xs text-white hover:bg-hover-blue"
            >
              <i className="ri-account-pin-circle-fill text-sm mr-2"></i>Add
              Customer
            </button>
          </div>
          <table
            onClick={option}
            className="mb-4 border-collapse text-sm text-left text-gray-500 w-full mt-[30px] rounded-xl"
          >
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  No
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  Name
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  Email
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  Phone
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">
                  Status
                </th>
                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left w-[210px] min-w-[210px]">
                  Option
                </th>
              </tr>
            </thead>
            <tbody>
              {customer &&
                customer.map((item, index) => (
                  <tr key={index}>
                    <td
                      className="p-4 border-secondary-gray border border-b-2 border-opacity-20"
                      data-cell=""
                    >
                      {index + 1}
                    </td>
                    <td
                      className="p-4 border-secondary-gray border border-b-2 border-opacity-20"
                      data-cell=""
                    >
                      {item.nameCustomer}
                    </td>
                    <td
                      className="p-4 border-secondary-gray border border-b-2 border-opacity-20"
                      data-cell=""
                    >
                      {item.emailCustomer}
                    </td>
                    <td
                      className="p-4 border-secondary-gray border border-b-2 border-opacity-20"
                      data-cell=""
                    >
                      {item.tlpnCustomer}
                    </td>

                    <td
                      className="p-4 border-secondary-gray border border-b-2 border-opacity-20"
                      data-cell=""
                    >
                      {item.statusCustomer}
                    </td>

                    <td className="p-4 border-secondary-gray border border-b-2 border-opacity-20">
                      <button
                        id={item.idCustomer}
                        type="button"
                        title="detail"
                        className="mr-1 py-1 px-5 bg-green-400 rounded-md hover:bg-hover-green"
                      >
                        <i
                          id={item.idCustomer}
                          title="detail"
                          className="ri-search-line text-white"
                        ></i>
                      </button>
                      <button
                        id={item.idCustomer}
                        type="button"
                        title="delete"
                        className="mr-1 py-1 px-5 bg-red-400 rounded-md hover:bg-hover-red"
                      >
                        <i
                          id={item.idCustomer}
                          title="delete"
                          className="ri-delete-bin-line text-white"
                        ></i>
                      </button>
                      <button
                        id={item.idCustomer}
                        type="button"
                        title="edit"
                        className="py-1 px-5 bg-yellow-400 rounded-md hover:bg-hover-yellow"
                      >
                        <i
                          id={item.idCustomer}
                          title="edit"
                          className="ri-file-edit-line text-white"
                        ></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </form>
      </main>
    </div>
  );
};

export default CustomerPage;
