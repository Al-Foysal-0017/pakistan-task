import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postLogin } from "../../store/actions/auth.action";
// import toast, { Toaster } from "react-hot-toast";
// import { postLogin } from "../../store/asyncMethods/AuthMethods";
import "./_login.scss";

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
    <div className="login">
      <form className="login__form" onSubmit={userLogin}>
        <div className="login__heading">
          <h3>Sign in</h3>
        </div>
        <div className="login__feild">
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInputs}
            className="login__feild__input"
            placeholder="Enter Email"
          />
        </div>
        <div className="login__feild">
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputs}
            className="login__feild__input"
            placeholder="Enter Password"
          />
        </div>
        <div className="login__feild">
          <input
            type="submit"
            className="login__feild__btn"
            //  value={loading ? "Loading..." : "Login"}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
