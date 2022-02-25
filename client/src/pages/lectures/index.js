import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homePosts } from "../../store/actions/post.action";
// import { homePosts } from "../store/asyncMethods/PostMethods";

const Lectures = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.allLectures);
  console.log(posts);
  useEffect(() => {
    dispatch(homePosts());
  }, [dispatch]);
  return (
    <div>
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
