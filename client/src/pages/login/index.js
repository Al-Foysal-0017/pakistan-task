import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postLogin } from "../../store/actions/auth.action";
// import toast, { Toaster } from "react-hot-toast";
// import { postLogin } from "../../store/asyncMethods/AuthMethods";

const Login = () => {
  const dispatch = useDispatch();
  // const { loginErrors, loading } = useSelector((state) => state.AuthReducer);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const userLogin = (e) => {
    e.preventDefault();
    dispatch(postLogin(state));
  };
  // useEffect(() => {
  //   if (loginErrors.length > 0) {
  //     loginErrors.map((error) => toast.error(error.msg));
  //   }
  // }, [loginErrors]);
  return (
    <div style={{ minHeight: "100vh" }}>
      <form onSubmit={userLogin}>
        <div className="group">
          <h3 className="form-heading">Login</h3>
        </div>
        <div className="group">
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInputs}
            className="group__control"
            placeholder="Enter Email"
          />
        </div>
        <div className="group">
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputs}
            className="group__control"
            placeholder="Create Password"
          />
        </div>
        <div className="group">
          <input
            type="submit"
            className="btn btn-default btn-block"
            //  value={loading ? "Loading..." : "Login"}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
