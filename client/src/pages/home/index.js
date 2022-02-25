import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { REDIRECT_FALSE, REMOVE_MESSAGE } from "../../store/types";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const dispatch = useDispatch();
  const { redirect, message, loading } = useSelector((state) => state.post);
  const {
    user: { _id },
    token,
  } = useSelector((state) => state.auth);
  useEffect(() => {
    if (redirect) {
      dispatch({ type: REDIRECT_FALSE });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: REMOVE_MESSAGE });
    }
  }, [message]);
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
