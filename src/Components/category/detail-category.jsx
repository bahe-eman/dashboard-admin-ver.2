import { useEffect, useState } from "react";
import { useContext } from "react";
import { global } from "../../context/context";
import { useNavigate } from "react-router-dom";
import auth from "../../utils/auth";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DetailCategory() {
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();
  const dataId = useContext(global).dataId;
  if (!dataId) {
    navigate("/category");
  }
  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/category/${dataId}`, {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then(setResponse);
  }, []);

  useEffect(() => {
    if (response.message) {
      alert(response.message);
      auth.logout();
      navigate("/");
    }
  }, [response.message]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    response.category && (
      <div className="w-full">
        <main className="bg-primary-gray grow overflow-y-auto">
          <div className="p-4 h-[calc(100vh-67.33px)]">
            <div>
              <h1 className="text-2xl font-semibold mb-4">Detail Category</h1>
            </div>
            <table className="mb-4 border-collapse  rounded-lg text-left text-gray-500 w-full">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left min-w-[120px]">
                    Category
                  </th>
                  <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left max-w-fit">
                    Price
                  </th>
                  <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left maz-w-fit">
                    Facilities
                  </th>
                  <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="capitalize text-sm text-gray-700 bg-gray-50">
                <tr>
                  <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                    {response.category.nameCategory}
                  </td>
                  <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                    ${response.category.price}/night
                  </td>
                  <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                    {response.category.facilityCategory}
                  </td>
                  <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                    {response.category.descCategory}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-center">
              <div className="w-[650px] flex justify-center rounded-md">
                <Slider {...sliderSettings} className="w-3/4">
                  <img
                    src={`${import.meta.env.VITE_ADDR_API}/${
                      response.category.image
                    }`}
                    className="h-80"
                  />
                  <img
                    src={`${import.meta.env.VITE_ADDR_API}/${
                      response.category.image2
                    }`}
                    className="h-80"
                  />
                </Slider>
              </div>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 absolute top-20 right-12"
                type="button"
                onClick={() => navigate("/category")}
              >
                Back
              </button>
            </div>
          </div>
        </main>
      </div>
    )
  );
}
