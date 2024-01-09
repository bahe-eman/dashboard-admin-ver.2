import Cookies from "js-cookie";

const auth = {
  storeId: (id) => {
    return Cookies.set("id", id);
  },

  isAuthenticated: () => {
    return Cookies.get("token");
  },
  storeAuthCredential: (token) => {
    return Cookies.set("token", token);
  },
  logout: () => {
    Cookies.remove("id");
    Cookies.remove("user");
    Cookies.remove("level");
    return Cookies.remove("token");
  },
  storeUser: (user) => {
    return Cookies.set("user", user);
  },
  isUser: () => {
    return Cookies.get("user");
  },
  storeRole: (role) => {
    return Cookies.set("role", role);
  },
  isRole: () => {
    return Cookies.get("role");
  },
};

export default auth;
