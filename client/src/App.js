import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "./components/navbar/NavAndSidebar";
import { createPost } from "./store/actions/Posts";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import RouteLinks from "./private/RouteLinks";
import AdminDashboard from "./pages/admin/dashboard";
import Lectures from "./pages/lectures";
import "./_app.scss";
import AboutUs from "./pages/about-us";
import ContactUs from "./pages/contact-us";
// import Footer from "./components/footer/Footer";

const App = () => {
  // const [postData, setPostData] = useState({
  //   email: "xyz@gmail.com",
  //   password: "1234567890",
  // });
  // const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(createPost(postData));
  // };
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/lectures" exact component={Lectures} />
        <RouteLinks path="/register" exact component={Register} />
        <RouteLinks path="/login" exact component={Login} />
        <Route path="/admin-dashboard" exact component={AdminDashboard} />
      </Switch>
    </div>
  );
};

export default App;
