import { useEffect, useState } from "react";
import AdminDetail from "./adminDetail";
import { Link } from "react-router-dom";
import auth from "../../utils/auth";
export default function DataAdmin({ dataAdmin }) {
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch(`${import.meta.env.VITE_ADDR_API}/users/` + id, {
        headers: {
          Authorization: `Bearer ${auth.isAuthenticated()}`,
        },
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <>
      {dataAdmin ? (
        <>
          {dataAdmin.map((product, index) => (
            <tr key={product.idUser}>
              <td>{index + 1}</td>
              <td>{product.nameUser}</td>
              <td>{product.emailUser}</td>
              <td>{product.userLevel.nameLevel}</td>
              <td>{product.userStatus.nameStatus}</td>
              <td>
                <div className="w-[190px]">
                  {/* <AdminDetail idData={product.idUser} /> */}
                  <button
                    title="hapus"
                    onClick={() => {
                      Removefunction(product.idUser);
                    }}
                    className="modal-hapusnya mr-1 py-1 px-5 bg-red-400 rounded-md hover:bg-hover-red"
                  >
                    <i className="ri-delete-bin-line text-white"></i>
                  </button>
                  <Link to={"/update-admin/" + product.idUser}>
                    <button
                      type="button"
                      title="icon edit"
                      className="edit py-1 px-5 bg-yellow-400 rounded-md hover:bg-hover-yellow"
                    >
                      <i
                        title="edit"
                        className="ri-file-edit-line text-white"
                      ></i>
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </>
      ) : (
        <tr></tr>
      )}
    </>
  );
}
