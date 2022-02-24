import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRegister } from "../../store/actions/auth.action";

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
    <div>
      <form onSubmit={userRegister}>
        <div className="group">
          <h3 className="form-heading">Register</h3>
        </div>
        <div className="group">
          <input
            type="text"
            name="name"
            className="group__control"
            placeholder="Enter Name"
            value={state.name}
            onChange={handleInputs}
          />
        </div>
        <div className="group">
          <input
            type="email"
            name="email"
            className="group__control"
            placeholder="Enter Email"
            value={state.email}
            onChange={handleInputs}
          />
        </div>
        <div className="group">
          <input
            type="password"
            name="password"
            className="group__control"
            placeholder="Create Password"
            value={state.password}
            onChange={handleInputs}
          />
        </div>
        <div className="group">
          <input
            type="submit"
            className="btn btn-default btn-block"
            // value={loading ? "Loading..." : "Register"}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
