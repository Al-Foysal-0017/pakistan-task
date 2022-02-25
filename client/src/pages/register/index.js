import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRegister } from "../../store/actions/auth.action";
import "./_register.scss";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  // const { loading, registerErrors, user } = useSelector(
  //   (state) => state.AuthReducer
  // );

  const dispatch = useDispatch();
  const handleInputs = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const userRegister = async (e) => {
    e.preventDefault();
    dispatch(postRegister(state));
  };
  // useEffect(() => {
  //   if (registerErrors.length > 0) {
  //     registerErrors.map((error) => toast.error(error.msg));
  //   }
  // }, [registerErrors, user]);
  return (
    <div className="register">
      <form className="register__form" onSubmit={userRegister}>
        <div className="group">
          <h3 className="register__heading">Register</h3>
        </div>
        <div className="register__feild">
          <input
            type="text"
            name="name"
            className="register__feild__input"
            placeholder="Enter Name"
            value={state.name}
            onChange={handleInputs}
          />
        </div>
        <div className="register__feild">
          <input
            type="email"
            name="email"
            className="register__feild__input"
            placeholder="Enter Email"
            value={state.email}
            onChange={handleInputs}
          />
        </div>
        <div className="register__feild">
          <input
            type="password"
            name="password"
            className="register__feild__input"
            placeholder="Create Password"
            value={state.password}
            onChange={handleInputs}
          />
        </div>
        <div className="register__feild">
          <input
            type="submit"
            className="register__feild__btn"
            // value={loading ? "Loading..." : "Register"}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
