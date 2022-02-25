import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAdminPost } from "../../../store/actions/post.action";
import FileBase from "react-file-base64";
import "./_adminDashboard.scss";

const AdminDashboard = (props) => {
  const { createErrors, redirect } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const {
    user: { _id, name },
  } = useSelector((state) => state.auth);

  const [state, setState] = useState({
    title: "",
    description: "",
    image: "",
    slug: "",
  });
  const handleDescription = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const createPost = (e) => {
    e.preventDefault();
    const { title, description, image, slug } = state;
    dispatch(setAdminPost({ title, description, slug, id: _id, name, image }));
  };
  useEffect(() => {
    if (redirect) {
      props.history.push("/lectures");
    }
  }, [createErrors, props.history, redirect]);
  return (
    <>
      <div className="admin">
        <h3 className="admin__heading">Admin Dashboard</h3>
        <form className="admin__form" onSubmit={createPost}>
          <h3 className="admin__form__header">Create new lecture</h3>
          <div className="admin__form__feild">
            <div>
              <label htmlFor="title">Lecture Title</label>
            </div>
            <input
              type="text"
              name="title"
              id="title"
              value={state.title}
              onChange={handleInput}
              className="admin__form__feild__input"
              placeholder="Lecture Title..."
            />
          </div>
          <div className="admin__form__feild">
            <div>
              <label htmlFor="thumbnail">Thumbnail Image</label>
            </div>
            <FileBase
              // type="file"
              // multiple={false}
              onDone={({ base64 }) => setState({ ...state, image: base64 })}
            />
          </div>
          <div className="admin__form__feild">
            <div>
              <label htmlFor="description">Lecture Description</label>
            </div>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              defaultValue={state.description}
              onChange={handleDescription}
              className="admin__form__feild__textFeild"
              placeholder="Lecture Description..."
              maxLength="150"
            ></textarea>
          </div>
          <div className="admin__form__feild">
            <div>
              <label htmlFor="slug">Lecturer Name</label>
            </div>
            <input
              type="text"
              name="slug"
              id="slug"
              value={state.slug}
              onChange={handleInput}
              className="admin__form__feild__input"
              placeholder="Lecturer Name"
            />
          </div>
          <div className="admin__form__feild">
            <input
              type="submit"
              value="Create post"
              className="admin__form__feild__btn"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminDashboard;
