import { useNavigate } from "react-router-dom";
import auth from "../utils/auth";
import { useEffect, useState, useContext } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { emailUser, passwordUser } = Object.fromEntries(formData);
    fetch(`${import.meta.env.VITE_ADDR_API}/login`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        emailUser: emailUser,
        passwordUser: passwordUser,
      }),
    })
      .then((res) => res.json())
      .then(setLogin)
      .catch(() => alert("database not conected..."));
  };
  useEffect(() => {
    if (login) {
      if (login.token) {
        auth.storeAuthCredential(login.token);
        auth.storeUser(login.userData.nameUser);
        navigate("/dashboard");
      } else {
        alert(login.message);
        navigate("/");
      }
    }
  }, [login]);

  return (
    <div className="flex items-center justify-center h-screen bg-[url('https://images.pexels.com/photos/1021066/pexels-photo-1021066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover">
      <div className="backdrop-blur-sm bg-white/20 p-6 rounded-xl shadow-xl w-[300px] text-sm sm:mx-3">
        <h1 className="text-3xl font-semibold mb-4 text-center font-roboto">
          Log In
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="text"
              id="email"
              name="emailUser"
              placeholder="admin"
              className="bg-sky-100 text-slate-900 mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="passWord"
              name="passwordUser"
              className="bg-sky-100 mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="flex justify-between items-center my-4 p-2">
            <div className="flex items-center">
              <input type="checkbox" id="remember" />
              <label className="ml-2">Remember Me</label>
            </div>
            <a
              href="#"
              className="text-primary-blue font-semibold hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-green-200 hover:from-green-500 hover:to-yellow-500 text-white py-2 rounded-md "
          >
            Log In
          </button>
          <div className="my-4 text-center">
            <span>
              Not an admin?
              <a
                href="src/pages/login/register.html"
                className="text-primary-blue font-semibold hover:text-pink-400 hover:underline"
              >
                Sign Up
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
