import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import Post from "./Post/Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log("POSTS:>>>", posts);
  const classes = useStyles();
  return (
    <div>
      {posts.map((item, index) => (
        <div
          style={{
            background: "#bababa",
            border: "3px solid #000",
            marginBottom: "32px",
          }}
          key={index}
        >
          <div>{item.title}</div>
          <div>{item.message}</div>
          <div>{item.message}</div>
          <img
            style={{ width: "120px", height: "120px" }}
            src={item.selectedFile}
            alt="XXX"
          />
        </div>
      ))}
    </div>
  );
};

export default Posts;
