import { useEffect, useState } from "react";
import auth from "../../utils/auth";

export default function SelectPrice({ category }) {
  const [state, setState] = useState([]);
  let cat = 0;

  if (category == "") {
    cat = 0;
  } else {
    cat = category;
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/category`, {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setState(res.categories));
  }, []);
  console.log(state);
  return (
    <>
      {state.map((opc, index) => {
        return (
          <option selected key={index} value={opc.price}>
            {opc.price}
          </option>
        );
      })}
    </>
  );
}
