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

const App = () => {
  const [postData, setPostData] = useState({
    email: "xyz@gmail.com",
    password: "1234567890",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/lectures" exact component={Lectures} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/admin-dashboard" exact component={AdminDashboard} />
      </Switch>
      {/* <Grow in>
        <Container>
          <Grid>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow> */}
      {/* <button onClick={handleSubmit}>SUBMIT</button> */}
    </div>
  );
};

export default App;
