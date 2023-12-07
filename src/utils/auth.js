import Cookies from "js-cookie";

const auth = {
  isAuthenticated: () => {
    return Cookies.get("token");
  },
  storeAuthCredential: (token) => {
    return Cookies.set("token", token);
  },
  logout: () => {
    Cookies.remove("user");
    return Cookies.remove("token");
  },
  storeUser: (user) => {
    return Cookies.set("user", user);
  },
  isUser: () => {
    return Cookies.get("user");
  },
};

export default auth;
