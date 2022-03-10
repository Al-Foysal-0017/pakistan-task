import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/navbar/NavAndSidebar";
import { createPost } from "./store/actions/Posts";
import Home from "./pages/home";
import Login from "./pages/login";
// import Register from "./pages/register";
import RouteLinks from "./private/RouteLinks";
import AdminDashboard from "./pages/admin/dashboard";
import Lectures from "./pages/lectures";
import "./_app.scss";
import AboutUs from "./pages/about-us";
import ContactUs from "./pages/contact-us";
import AdminRoute from "./private/AdminRoute";
import AdvanceLevel from "./pages/lectures/AdvanceLevel";
import Intermiddate from "./pages/lectures/Intermiddate";
import BeginnerLevel from "./pages/lectures/BeginnerLevel";
import { homePosts } from "./store/actions/post.action";
// import Footer from "./components/footer/Footer";

const App = () => {
  // const [postData, setPostData] = useState({
  //   email: "xyz@gmail.com",
  //   password: "1234567890",
  // });
  const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(createPost(postData));
  const { posts } = useSelector((state) => state.allLectures);
  useEffect(() => {
    dispatch(homePosts());
  }, [dispatch]);
  // };
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/lectures" exact component={Lectures} />
        <Route path="/lectures/advance" exact component={AdvanceLevel} />
        <Route path="/lectures/intermiddate" exact component={Intermiddate} />
        <Route path="/lectures/beginner" exact component={BeginnerLevel} />
        {/* <RouteLinks path="/register" exact component={Register} /> */}
        <RouteLinks path="/login" exact component={Login} />
        <AdminRoute path="/admin-dashboard" exact component={AdminDashboard} />
      </Switch>
    </div>
  );
};

export default App;
