import { useEffect, useState } from "react";
import auth from "../../utils/auth";

export default function SelectCategory({}) {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/category`, {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setState(res.categories));
  }, []);
  return (
    <>
      {state.map((opc, index) => {
        return (
          <option key={index} value={opc.idCategory}>
            {opc.nameCategory}
          </option>
        );
      })}
    </>
  );
}
