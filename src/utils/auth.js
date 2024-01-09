import Cookies from "js-cookie";

const auth = {
  storeId: (id) => {
    return Cookies.set("id", id);
  },
  isID: () => {
    return Cookies.get("id");
  },

  isAuthenticated: () => {
    return Cookies.get("jwt");
  },
  storeAuthCredential: (jwt) => {
    return Cookies.set("jwt", jwt);
  },
  logout: () => {
    Cookies.remove("id");
    return Cookies.remove("jwt");
  },
};

export default auth;
