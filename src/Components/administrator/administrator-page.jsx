import Modal from "./modal";
import DataAdmin from "./dataAdmin";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../utils/auth";

export default function AdministratorPage() {
  const [state, setState] = useState();
  useEffect(() => {
    fetch("http://localhost:2000/users/", {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then(setState);
  }, []);
  return (
    <div className="w-full">
      <main className="bg-primary-gray grow overflow-y-auto">
        <div
          id="modal-overlay"
          className="hidden bg-black h-full w-full absolute top-0 left-0 opacity-90"
        ></div>
        <div className="p-4 h-[calc(100vh-67.33px)]">
          <div>
            <h1 className="text-2xl font-semibold">Administrator</h1>
          </div>
          <div className="p-4">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <div className="relative overflow-x-auto">
                <div className="flex justify-between m-4">
                  <Link to={"/add-admin"}>
                    <button
                      type="button"
                      className="py-1 px-5 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue"
                    >
                      <i className="ri-hotel-bed-line mr-2"></i>Add Admin
                    </button>
                  </Link>
                  <input
                    type="search"
                    placeholder="search..."
                    className="pl-4 border border-secondary-gray rounded-[20px] focus:outline-none focus:border-gray-500"
                  />
                </div>
                <table className="w-full overflow-x-auto border-collapse  rounded-lg text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        No
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        Admin Name
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        Username
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        Level
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        Status
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        Option
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <DataAdmin dataAdmin={state} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
