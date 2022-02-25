import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homePosts } from "../../store/actions/post.action";
import { REDIRECT_FALSE, REMOVE_MESSAGE } from "../../store/types";
// import { homePosts } from "../store/asyncMethods/PostMethods";
import toast, { Toaster } from "react-hot-toast";

const Lectures = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.allLectures);
  console.log(posts);
  useEffect(() => {
    dispatch(homePosts());
  }, [dispatch]);

  const { redirect, message, loading } = useSelector((state) => state.post);
  // const {
  //   user: { _id },
  //   token,
  // } = useSelector((state) => state.auth);
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
      <h1>Lecture</h1>
      {posts?.map((item, index) => (
        <div
          key={index}
          style={{ border: "2px solid #000", marginTop: "16px" }}
        >
          <div>
            <img
              style={{ width: "50px", height: "50px" }}
              src={item?.image}
              alt=""
            />
          </div>
          <div>{item?.title}</div>
          <div>{item?.userName}</div>
          <div>{item?.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Lectures;
