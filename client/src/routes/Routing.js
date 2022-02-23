import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "../pages/adminLogin";
// import Login from "../pages/login";
// import Register from "../pages/register";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth">
          <Route path="admin-login" element={<AdminLogin />} />
          {/* <Route path="teams" element={<Register />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
