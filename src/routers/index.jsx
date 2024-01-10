import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./protected-route";
import PrivateRoute from "./private-route";

import LoginPage from "../pages/login-page";
import DashboardPage from "../pages/dashboard-page";
import ProfilePage from "../pages/profile-page";
import ListKamarPage from "../pages/list-rooms-page";
import Floor from "../pages/floor";
import AddFloor from "../Components/floor/add";
import UpdateFloor from "../Components/floor/update";
import PesanKamarPage from "../pages/order-page";
import CheckinKamarPage from "../pages/checkin-page";
import DetailCheckin from "../pages/detail-check";
import CheckoutKamarpage from "../pages/checkout-page";
import LaporanPage from "../pages/report-page";
import AdministratorPage from "../pages/administrator-page";
import ProfilAdmin from "../Components/ProfilAdmin/ProfilAdmin";
import AddRoom from "../Components/list-rooms/add-room";
import UpdateRoomForm from "../Components/list-rooms/update-room";
import CustomerPage from "../pages/customer-page";

import CategoryPage from "../pages/category-page";
import AddCategory from "../Components/category/add-category";
import DetailCategory from "../Components/category/detail-category";
import EditCategory from "../Components/category/edit-category";
import AdminAdd from "../Components/administrator/adminAdd";
import AdminEdit from "../Components/administrator/adminEdit";
import Rebook from "../pages/rebook";

export default function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile-user" element={<ProfilAdmin />} />
          <Route path="/administrator" element={<AdministratorPage />} />
          <Route path="/add-admin" element={<AdminAdd />} />
          <Route path="/update-admin/:id" element={<AdminEdit />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category-add" element={<AddCategory />} />
          <Route path="/category-detail" element={<DetailCategory />} />
          <Route path="/category-edit" element={<EditCategory />} />
          <Route path="/list-rooms" element={<ListKamarPage />} />
          <Route path="/floor" element={<Floor />} />
          <Route path="/add-floor" element={<AddFloor />} />
          <Route path="/update-floor" element={<UpdateFloor />} />
          <Route path="/add-room" element={<AddRoom />} />
          <Route path="/update-kamar/:id" element={<UpdateRoomForm />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/order" element={<PesanKamarPage />} />
          <Route path="/checkin" element={<CheckinKamarPage />} />
          <Route path="/checkin/:id" element={<DetailCheckin />} />
          <Route path="/checkout" element={<CheckoutKamarpage />} />
          <Route path="/checkout/:id" element={<DetailCheckin />} />
          <Route path="/rebook/:id" element={<Rebook />} />
          <Route path="/report" element={<LaporanPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
