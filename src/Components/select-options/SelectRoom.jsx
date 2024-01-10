import { useEffect, useState } from "react";
import auth from "../../utils/auth";
export default function SelectRoom({ category, floor }) {
  const [state, setState] = useState([]);
  let cat = 0;
  let flo = 0;
  if (category == "") {
    cat = 0;
  } else {
    cat = category;
  }
  if (floor == "") {
    flo = 0;
  } else {
    flo = floor;
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/rooms/`, {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then(setState);
  }, [category, floor]);

  return (
    <>
      {state.map((opc, index) => {
        return (
          <option key={index} value={opc.idRoom}>
            {opc.nameRoom}-{opc.numberRoom}
          </option>
        );
      })}
    </>
  );
}
