import React, { useState } from "react";
import { useAuthLoginMutation } from "../../store/services/authService";
import { axios } from "axios";
const url = "http://localhost:6000/";
const AdminLogin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [login, response] = useAuthLoginMutation();
  console.log("My Response:", response);
  const handleInputs = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    // login(state);
    // fetch("/login", {
    //   method: "POST",
    //   body: state,
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    // const { email, password } = state;

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(state),
    });

    const resp = await res.json();
    console.log(resp);
  };
  return (
    <div>
      <h1>Dashboard Login</h1>
      <form onSubmit={onSubmitForm}>
        <input
          placeholder="Enter Email"
          name="email"
          type="email"
          value={state.email}
          onChange={handleInputs}
        />
        <input
          placeholder="Enter Password"
          name="password"
          type="password"
          value={state.password}
          onChange={handleInputs}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AdminLogin;
