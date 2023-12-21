import { useEffect, useState } from "react";
import auth from "../../utils/auth";
export default function SelectFloor({}) {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/floor`, {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then(setState);
  }, []);
  console.log(state);
  return (
    <>
      {state.map((opc, index) => {
        return (
          <option key={index} value={opc.idFloor}>
            {opc.nameFloor}
          </option>
        );
      })}
    </>
  );
}
