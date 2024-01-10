import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import auth from "../../utils/auth";
export default function ListTable({ dataHotel }) {
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch(`${import.meta.env.VITE_ADDR_API}/rooms/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${auth.isAuthenticated()}`,
        },
      })
        .then(() => {
          toast.success("Successfully!");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  let display;
  if (dataHotel == undefined) {
    display = [];
  } else display = dataHotel;

  if (display.length > 0 && display != undefined) {
    return (
      <>
        <table
          id="tabel"
          className="mb-4 border-collapse  rounded-lg text-sm text-left text-gray-500 w-full"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left">
                No
              </th>
              <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left min-w-[150px]">
                Room
              </th>
              <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left">
                Floor
              </th>
              <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left min-w-[250px]">
                Category
              </th>
              <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left">
                Price
              </th>
              <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left">
                Status
              </th>
              <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left">
                Option
              </th>
            </tr>
          </thead>
          <tbody>
            {display.map((room, index) => {
              return (
                <tr key={room.idRoom} className="capitalize">
                  <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                    {index + 1}
                  </td>
                  <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                    {room.nameRoom}-{room.numberRoom}
                  </td>
                  <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                    {room.Floor.nameFloor}
                  </td>
                  <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                    {room.Category.nameCategory}
                  </td>
                  <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                    ${room.Category.price}/night
                  </td>
                  <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                    {room.Status.nameStatus}
                  </td>
                  <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                    <div className="flex justify-center items-center flex-nowrap">
                      {/* <Link to={`/detail-kamar/${room.idRoom}`}>
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
                      </Link> */}
                      <button
                        onClick={() => {
                          Removefunction(room.idRoom);
                        }}
                        type="button"
                        title="hapus"
                        className="hapus mr-1 py-1 px-5 bg-red-400 rounded-md hover:bg-hover-red"
                      >
                        <i
                          title="icon hapus"
                          className="ri-delete-bin-line text-white"
                        ></i>
                      </button>
                      <Link to={`/update-kamar/${room.idRoom}`}>
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
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
