import PropType from "prop-types";
import { useEffect, useState } from "react";
import auth from "../../utils/auth";

export default function SearchCategory({ search }) {
  const [res, setRes] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/category`, {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setRes(res.categories));
  }, []);

  const searching = (e) => {
    search(e.target.value.toLowerCase());
  };
  return (
    <div className="md:col-span-3">
      <select
        onClick={searching}
        required
        className="h-10 border mt-1 rounded-sm px-4 focus:border-blue-400 focus:outline-none w-40"
      >
        <option>All</option>
        {res &&
          res.map(({ nameCategory }, index) => {
            return <option key={index}>{nameCategory}</option>;
          })}
      </select>
    </div>
  );
}

SearchCategory.propTypes = {
  cari: PropType.func,
};
